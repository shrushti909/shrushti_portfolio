"""
Portfolio data for Shrushti Manohar Nandgaonkar.
Mirrors the resume credentials, academic history, and projects.
"""

PROFILE = {
    "name": "Shrushti Manohar Nandgaonkar",
    "headline": "Python-Django Developer & Backend Engineer",
    "location": "Pune, Maharashtra, India",
    "email": "officialshrushti909@gmail.com",
    "description": (
        "MCA student and Immediate Joiner with solid experience in Python, Django, "
        "Django REST Framework, and MySQL. Experienced in building full-stack web "
        "applications and completed a 6-month Engineer Trainee internship in Java technologies."
    ),
    "tech_line": [
        "Python",
        "Django",
        "Django REST Framework",
        "MySQL",
        "Java",
        "REST APIs",
    ],
    "github": "https://github.com/shrushti909",
    "linkedin": "http://www.linkedin.com/in/shrushtinandgaonkar",
    "resume": "/resume/Shrushti_Resume.pdf",
}

SKILLS = [
    {
        "category": "Backend Engineering",
        "skills": [
            "Python",
            "Django",
            "Django REST Framework",
            "REST APIs",
            "Django ORM",
            "Java",
            "JSP",
            "JDBC",
        ],
    },
    {
        "category": "Frontend & Web",
        "skills": ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design"],
    },
    {
        "category": "Databases & Storage",
        "skills": [
            "MySQL",
            "SQLite",
            "SQL Queries",
            "Relational Schema Design",
            "Database Normalization",
        ],
    },
    {
        "category": "Computer Science Fundamentals",
        "skills": [
            "Data Structures & Algorithms",
            "Object-Oriented Programming",
            "Database Design (ER Modeling)",
            "Database Relationships",
            "Web Application Architecture",
        ],
    },
    {
        "category": "Developer Tools",
        "skills": ["Git", "GitHub", "VS Code", "Postman", "Command Line"],
    },
]

PROJECTS = [
    {
        "id": "fooddash",
        "name": "FoodDash",
        "subtitle": "Full-Stack Food Delivery Web Application",
        "status": "Active",
        "description": (
            "A full-stack food delivery application built using Python, Django, and MySQL "
            "featuring customer authentication, menu exploration, dynamic cart management, "
            "and streamlined order checkout."
        ),
        "technologies": ["Python", "Django", "MySQL", "HTML5", "CSS3", "Bootstrap"],
        "features": [
            "User authentication, session handling, and customer profile management",
            "Cart management with real-time price computation & order processing",
            "Optimized Django ORM relational schema with MySQL for data integrity",
            "Responsive, mobile-friendly interface styled with CSS3 and Bootstrap",
        ],
        "github_url": "https://github.com/shrushti909/food_dash",
        "live_url": None,
        "category": "fullstack",
    },
    {
        "id": "job-portal",
        "name": "Job Portal (Jobify)",
        "subtitle": "Role-Based Recruitment & Career Platform",
        "status": "Active",
        "description": (
            "A role-based job portal developed using Python, Django, and Django REST Framework. "
            "Enables job seekers to search and track applications while allowing recruiters "
            "to post openings and manage candidates."
        ),
        "technologies": [
            "Python",
            "Django",
            "Django REST Framework",
            "SQLite",
            "HTML5",
            "CSS3",
            "Bootstrap",
        ],
        "features": [
            "Role-based access control (RBAC) separating applicants and recruiters",
            "Secure authentication, authorization, and profile management pipeline",
            "Job posting, application submission, and live candidate status tracking",
            "Modular REST APIs integrated with a responsive web interface",
        ],
        "github_url": "https://github.com/shrushti909/jobify",
        "live_url": None,
        "category": "backend",
    },
    {
        "id": "partyconnect",
        "name": "PartyConnect (EYMS Clone)",
        "subtitle": "Enterprise Event & Party Management System",
        "status": "Internship Project",
        "description": (
            "Full-stack enterprise event coordination platform developed during a 6-month "
            "Engineer Trainee internship at RapportSoft Consulting & Technology Pvt. Ltd."
        ),
        "technologies": ["Java", "JSP", "JDBC", "SQL", "HTML5", "CSS3"],
        "features": [
            "Enterprise full-stack event workflow built with Java, JSP, and JDBC",
            "Relational SQL database architecture for event bookings and schedules",
            "Collaborated with senior engineers following SDLC standards",
            "Client-side and server-side validation ensuring system integrity",
        ],
        "github_url": None,
        "live_url": None,
        "category": "team",
    },
    {
        "id": "mediprep",
        "name": "MediPrep",
        "subtitle": "AI-Assisted & IoT Medication Verification System",
        "status": "SIH 2026 | Team Project",
        "description": (
            "An innovative AI-assisted medication verification system combining software-based "
            "prescription recognition with IoT hardware verification to prevent dispensing "
            "errors before billing."
        ),
        "technologies": ["Python", "Django", "REST APIs", "React", "AI/OCR", "IoT"],
        "features": [
            "Prescription OCR pipeline extracting medicine dosages and names",
            "IoT sensor integration linking dispensing hardware to backend",
            "Role-based pharmacist verification workflow and billing checks",
            "Audit logs stored in relational database for tracking compliance",
        ],
        "github_url": None,
        "live_url": None,
        "category": "team",
    },
]

EXPERIENCE = [
    {
        "company": "RapportSoft Consulting & Technology Pvt. Ltd.",
        "location": "Pune, Maharashtra",
        "position": "Engineer Trainee | Java",
        "duration": "Nov 2024 – May 2025",
        "project_name": 'EYMS Clone — "PartyConnect"',
        "description": (
            "Worked on the development of an EYMS Clone ('PartyConnect') using Java, JSP, "
            "JDBC, SQL, HTML, and CSS under the direct guidance of senior engineers."
        ),
        "responsibilities": [
            "Developed and modified core application modules using Java, JSP, and JDBC.",
            "Implemented database interactions and relational SQL queries for transactional workflows.",
            "Contributed to full-stack features of the PartyConnect event management platform.",
            "Collaborated with senior developers on code reviews and standard coding practices.",
            "Gained hands-on exposure to software development lifecycle (SDLC) processes.",
        ],
        "start_year": "2024",
        "end_year": "2025",
    }
]

EDUCATION = [
    {
        "degree": "MCA",
        "full_degree": "Master of Computer Applications",
        "university": "Vishwakarma University",
        "location": "Pune, Maharashtra",
        "duration": "2025 – 2027",
        "cgpa": "8.5",
        "status": "Pursuing",
    },
    {
        "degree": "BCA",
        "full_degree": "Bachelor of Computer Applications",
        "university": "Dr. D Y Patil University",
        "location": "Pune, Maharashtra",
        "duration": "2022 – 2025",
        "cgpa": "7.5",
        "status": "Completed",
    },
    {
        "degree": "HSC",
        "full_degree": "Higher Secondary Certificate (Science)",
        "university": "Modern Junior College",
        "location": "Basmath, Maharashtra",
        "duration": "Jul 2018 – Aug 2020",
        "cgpa": "67.54%",
        "status": "Completed",
    },
    {
        "degree": "SSC",
        "full_degree": "Secondary School Certificate",
        "university": "Ahilya Devi Holkar Girls School",
        "location": "Basmath, Maharashtra",
        "duration": "Mar 2017 – Jun 2018",
        "cgpa": "94.60%",
        "status": "Completed",
    },
]

CERTIFICATIONS = [
    {
        "name": "Python & Backend Development Specialization",
        "issuer": "Coursera",
        "url": None,
    },
    {
        "name": "Python (Basic) Certification",
        "issuer": "HackerRank",
        "url": None,
    },
    {
        "name": "Relational Database Design & SQL",
        "issuer": "Coursera",
        "url": None,
    },
]

ACTIVITIES = [
    {
        "title": "Startup & Entrepreneurship Volunteer — Headstart",
        "description": (
            "Volunteered in startup and entrepreneurship community sessions organized by Headstart, "
            "gaining valuable exposure to building scalable products, MVP development cycles, "
            "and tech-driven innovation in early-stage startups."
        ),
    }
]
