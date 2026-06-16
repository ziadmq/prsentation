import { motion } from "framer-motion";

function TechPage({ pageAnimation }) {
  return (
    <motion.section key="tech" className="page tech-page" {...pageAnimation}>
      <div className="page-badge">System Architecture</div>
      <h1 className="main-title">Technology Stack</h1>

      <div className="tech-box">
        <div className="tech-column">
          <h2>Frontend</h2>
          <p>
            Kotlin is used to build the user interface with fast navigation,
            reusable components, and a modern interactive design.
          </p>
          <span>Kotlin</span>
          <span>Framer Motion</span>
          <span>Lucide Icons</span>
        </div>

        <div className="connection-line"></div>

        <div className="tech-column">
          <h2>Backend</h2>
          <p>
            Spring Boot provides REST APIs, authentication, business logic,
            database connection, and email sending service.
          </p>
          <span>Spring Boot</span>
          <span>REST API</span>
          <span>Email Service</span>
        </div>

        <div className="connection-line"></div>

        <div className="tech-column">
          <h2>Database & Storage</h2>
          <p>
            The system stores users, places, reviews, favorites, reports,
            and owner location data.
          </p>
          <span>Neon Database</span>
          <span>Firebase Storage</span>
          <span>MySql</span>
        </div>
      </div>
    </motion.section>
  );
}

export default TechPage;