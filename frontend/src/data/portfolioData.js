/**
 * Static portfolio data — mirrors the FastAPI backend.
 * Used as fallback when the API is unavailable.
 * Update project GitHub/live URLs here.
 */

export const portfolioData = {
  profile: {
    name: "Shrushti Manohar Nandgaonkar",
    headline: "MCA Student | Python & Backend Developer",
    location: "Pune, Maharashtra, India",
    email: "officialshrushti909@gmail.com",
    description:
      "I build backend-focused web applications using Python, Django, REST APIs, and relational databases, with industry experience in Java-based web development.",
    tech_line: ["Python", "Django", "REST APIs", "Java", "SQL"],
  },

  skills: [
    {
      category: "Backend Development",
      skills: ["Python", "Django", "Django REST Framework", "REST APIs", "Django ORM", "Java"],
    },
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    },
    {
      category: "Databases",
      skills: ["MySQL", "SQLite"],
    },
    {
      category: "CS Fundamentals",
      skills: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Design",
        "ER Modelling",
        "Database Relationships",
      ],
    },
    {
      category: "Developer Tools",
      skills: ["Git", "GitHub", "VS Code"],
    },
  ],

  projects: [
    {
      id: "fooddash",
      name: "FoodDash",
      subtitle: "Full-Stack Food Delivery Web Application",
      status: null,
      description:
        "A full-stack food delivery web application developed using Python and Django, featuring user authentication, cart management, order processing, and database-driven backend functionality.",
      technologies: ["Python", "Django", "MySQL", "HTML", "CSS", "Bootstrap"],
      features: [
        "User Authentication",
        "Cart Management",
        "Order Processing",
        "Django ORM",
        "MySQL Database",
        "Responsive UI",
      ],
      github_url: "GITHUB_URL", // Replace with actual URL
      live_url: null,
      category: "fullstack",
    },
    {
      id: "job-portal",
      name: "Job Portal",
      subtitle: "Role-Based Job Management System",
      status: null,
      description:
        "A role-based job portal developed using Django and Django REST Framework, allowing users to manage job postings, applications, profiles, and role-specific operations.",
      technologies: ["Python", "Django", "Django REST Framework", "SQLite", "HTML", "CSS", "Bootstrap"],
      features: [
        "Authentication",
        "Authorization",
        "Role-Based Access Control",
        "Job Posting",
        "Application Tracking",
        "Profile Management",
        "REST APIs",
      ],
      github_url: "GITHUB_URL", // Replace with actual URL
      live_url: null,
      category: "backend",
    },
    {
      id: "mediprep",
      name: "MediPrep",
      subtitle: "AI-Assisted & IoT-Based Medication Verification System",
      status: "SIH 2026 | Team Project | In Development",
      description:
        "An AI-assisted medication verification system designed to help verify medicines against prescription information before billing by combining software-based prescription processing with physical medicine verification.",
      technologies: ["Python", "Django", "REST APIs", "React", "AI/OCR", "IoT", "Database"],
      features: [
        "Prescription OCR",
        "Medicine Verification",
        "Database Management",
        "Hardware Integration",
        "Role-Based System",
        "Pharmacy Workflow",
        "AI-assisted Verification",
        "IoT-based Physical Verification",
      ],
      github_url: "GITHUB_URL", // Replace with actual URL
      live_url: null,
      category: "team",
    },
  ],

  experience: [
    {
      company: "RapportSoft Consulting & Technology Pvt. Ltd.",
      location: "Pune, Maharashtra",
      position: "Engineer Trainee | Java",
      duration: "Nov 2024 – May 2025",
      project_name: 'EYMS Clone — "PartyConnect"',
      description:
        "Worked on the development of an EYMS Clone, 'PartyConnect', using Java, JSP, JDBC, SQL, HTML, and CSS under the guidance of senior developers.",
      responsibilities: [
        "Developed and modified application modules.",
        "Worked with Java, JSP, JDBC and SQL.",
        "Contributed to the PartyConnect application.",
        "Collaborated with senior developers.",
        "Gained exposure to software development lifecycle practices.",
      ],
      start_year: "2024",
      end_year: "2025",
    },
  ],

  education: [
    {
      degree: "MCA",
      full_degree: "Master of Computer Applications",
      university: "Vishwakarma University",
      location: "Pune, Maharashtra",
      duration: "2025 – 2027",
      cgpa: "8.5",
      status: "Pursuing",
    },
    {
      degree: "BCA",
      full_degree: "Bachelor of Computer Applications",
      university: "Dr. D. Y. Patil University",
      location: "Pune, Maharashtra",
      duration: "2022 – 2025",
      cgpa: "7.9",
      status: null,
    },
  ],

  certifications: [
    { name: "Learn Python Specialization", issuer: "Coursera", url: null },
    { name: "Python Backend Development", issuer: "Coursera", url: null },
    { name: "Python Basics", issuer: "HackerRank", url: null },
  ],

  activities: [
    {
      title: "Startup & Entrepreneurship Volunteer — Headstart",
      description:
        "Volunteered in startup and entrepreneurship sessions, gaining exposure to MVP development, scalable products, and technology-driven innovation.",
    },
  ],
};
