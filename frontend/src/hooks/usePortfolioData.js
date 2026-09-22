import { useState, useEffect } from "react";
import { portfolioData } from "../data/portfolioData";

const API_BASE = import.meta.env.VITE_API_URL || "";

/**
 * Fetches all portfolio data from the FastAPI backend.
 * Falls back to static local data if API is unreachable.
 */
export function usePortfolioData() {
  const [data, setData] = useState(portfolioData);
  // If an API is configured, start in the loading state so the fetch that
  // begins in the effect can simply replace it when it resolves.
  const [loading, setLoading] = useState(() => Boolean(API_BASE));
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!API_BASE) {
      // No API configured — use static data
      return;
    }

    const endpoints = [
      "profile",
      "skills",
      "projects",
      "experience",
      "education",
      "certifications",
      "activities",
    ];

    Promise.all(
      endpoints.map((ep) =>
        fetch(`${API_BASE}/api/${ep}`)
          .then((r) => {
            if (!r.ok) throw new Error(`Failed to fetch ${ep}`);
            return r.json();
          })
          .then((json) => ({ [ep]: json }))
      )
    )
      .then((results) => {
        const merged = Object.assign({}, ...results);
        setData((prev) => ({ ...prev, ...merged }));
        setLoading(false);
      })
      .catch((err) => {
        console.warn("Portfolio API unavailable, using static data.", err);
        setError(err);
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}
