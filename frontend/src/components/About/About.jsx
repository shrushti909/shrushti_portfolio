import { useReveal } from "../../hooks/useReveal";
import "./About.css";

const currentFocus = [
  "Backend Development",
  "Python",
  "Django",
  "REST APIs",
  "Java",
  "SQL",
  "Software Development",
];

export default function About() {
  const { ref } = useReveal();

  return (
    <section id="about" className="section" ref={ref} aria-labelledby="about-title">
      <div className="container">
        <div className="about__header reveal">
          <p className="section-label">About Me</p>
          <h2 className="section-title" id="about-title">
            Who I Am
          </h2>
        </div>

        <div className="about__grid">
          {/* Bio */}
          <div className="about__bio reveal">
            <p className="about__para">
              I am an MCA student with a focus on backend and web application development. I work
              primarily with Python, Django, Django REST Framework, REST APIs, and relational
              databases.
            </p>
            <p className="about__para">
              I have practical experience building full-stack web applications and developing backend
              functionality, authentication, database relationships, and role-based access control. I
              also gained industry exposure as an Engineer Trainee, where I worked on a Java-based
              web application using Java, JSP, JDBC, SQL, HTML, and CSS under the guidance of senior
              developers.
            </p>
            <p className="about__para">
              Currently, I am strengthening my skills in backend development, Java, Python,
              databases, APIs, and software development practices while preparing for software
              development opportunities.
            </p>
          </div>

          {/* Focus Card */}
          <aside className="about__focus card reveal" aria-label="Current technical focus">
            <h3 className="about__focus-title">Current Focus</h3>
            <ul className="about__focus-list">
              {currentFocus.map((item) => (
                <li key={item} className="about__focus-item">
                  <span className="about__focus-dot" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
