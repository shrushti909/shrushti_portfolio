# Shrushti Manohar Nandgaonkar — Developer Portfolio

**Live URL:** _(add after deployment)_  
**Stack:** React + Vite (frontend) · Python + FastAPI (backend)  
**Deployment:** Frontend → Vercel · Backend → Render

---

## Project Structure

```
Portfolio/
├── .gitignore                   ← root ignores (myworld venv, __pycache__, .env)
├── backend/                    ← FastAPI Python API
│   ├── main.py                 ← App + routes
│   ├── data.py                 ← ✏️ ALL CONTENT LIVES HERE
│   ├── models.py               ← Pydantic schemas
│   ├── requirements.txt
│   └── .env.example
│
├── frontend/                   ← React + Vite SPA
│   ├── public/
│   │   ├── favicon.svg
│   │   └── resume/
│   │       └── README.txt      ← ⚠️ PUT YOUR PDF HERE
│   ├── src/
│   │   ├── components/         ← One folder per section
│   │   ├── data/
│   │   │   ├── config.js       ← ✏️ GitHub, LinkedIn, Email, Resume
│   │   │   └── portfolioData.js← ✏️ Project URLs, content
│   │   ├── hooks/
│   │   │   ├── usePortfolioData.js
│   │   │   └── useReveal.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html              ← SEO meta tags
│   ├── vite.config.js
│   └── vercel.json             ← Vercel deployment config
│
└── README.md
```

---

## 🔧 What to Fill In (Before Deployment)

### 1. GitHub URL
Open: `frontend/src/data/config.js`  
Replace `"GITHUB_URL"` with your actual GitHub profile URL.  
Example: `"https://github.com/shrushti-nandgaonkar"`

### 2. LinkedIn URL
Same file: `frontend/src/data/config.js`  
Replace `"LINKEDIN_URL"` with your actual LinkedIn profile URL.  
Example: `"https://linkedin.com/in/shrushti-nandgaonkar"`

### 3. Resume PDF
1. Export your resume as a PDF.
2. Name it exactly: `Shrushti_Resume.pdf`
3. Place it at: `frontend/public/resume/Shrushti_Resume.pdf`
4. Delete `frontend/public/resume/README.txt`

### 4. Project GitHub URLs
Open: `frontend/src/data/portfolioData.js`  
Find each project and update `github_url`.  
Example for FoodDash:
```js
github_url: "https://github.com/shrushti-nandgaonkar/fooddash",
```

### 5. Project Live Demo URLs (optional)
Same file: set `live_url` to the deployed URL if available.  
Leave as `null` if not deployed — the button will be hidden automatically.

### 6. Certificate URLs (optional)
Open: `frontend/src/data/portfolioData.js`  
Set `url` for each certification. Leave as `null` to hide the button.

---

## 💻 Running Locally

### Frontend
```powershell
cd D:\Portfolio\frontend
npm install
npm run dev
```
Opens at: http://localhost:5173

### Backend (optional — frontend works without it)
```powershell
cd D:\Portfolio\backend
pip install -r requirements.txt
uvicorn main:app --reload
```
API runs at: http://localhost:8000  
Docs at: http://localhost:8000/docs

> **Note:** The frontend uses static data by default (no API needed). 
> Set `VITE_API_URL=http://localhost:8000` in `frontend/.env.local` to enable the API.

---

## 🏗️ Building for Production

```powershell
cd D:\Portfolio\frontend
npm run build
```

Output is in `frontend/dist/`. This is what gets deployed to Vercel.

---

## 🚀 Deploying to Vercel (Frontend)

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 2 — Connect to Vercel
1. Go to https://vercel.com and sign in with GitHub.
2. Click **"New Project"**.
3. Import your `portfolio` repository.
4. Configure the project:
   - **Framework Preset:** Vite
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**.

### Step 3 — Set Environment Variables (optional, if using API)
In Vercel project settings → Environment Variables:
```
VITE_API_URL = https://your-backend.onrender.com
```

### Step 4 — Get Your URL
After deployment, Vercel gives you a URL like:  
`https://shrushti-portfolio.vercel.app`

This is your **public portfolio URL** to share with recruiters.

### Custom Domain (Optional)
In Vercel → Domains → Add your domain (e.g., `shrushti.dev`).

---

## 🐍 Deploying Backend to Render (Optional)

> The frontend works completely without the backend. Only deploy this if you want live API-driven content.

1. Go to https://render.com and sign in.
2. Click **"New" → "Web Service"**.
3. Connect your GitHub repository.
4. Configure:
   - **Root Directory:** `backend`
   - **Runtime:** Python 3
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `uvicorn main:app --host 0.0.0.0 --port $PORT`
5. Add Environment Variable:
   - `FRONTEND_ORIGIN` = `https://your-vercel-url.vercel.app`
6. Deploy.

---

## ✅ Pre-Deployment Checklist

- [ ] GitHub URL set in `config.js`
- [ ] LinkedIn URL set in `config.js`
- [ ] Resume PDF placed at `public/resume/Shrushti_Resume.pdf`
- [ ] Project GitHub URLs updated in `portfolioData.js`
- [ ] `npm run build` succeeds with no errors
- [ ] All nav links scroll correctly
- [ ] Mobile menu opens and closes
- [ ] Email button opens mail client
- [ ] Resume button downloads file

---

## 🎨 Customization

| What to change | File |
|---------------|------|
| Your links (GitHub, LinkedIn, email, resume) | `frontend/src/data/config.js` |
| Project descriptions, URLs, features | `frontend/src/data/portfolioData.js` |
| Skills list | `frontend/src/data/portfolioData.js` → `skills` |
| Colors, fonts | `frontend/src/index.css` → `:root` variables |
| Accent color | Change `--color-accent: #7c3aed` to any color |
| Dark mode colors | `[data-theme="dark"]` block in `index.css` |

---

© 2026 Shrushti Manohar Nandgaonkar
