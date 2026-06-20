import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function TechPage({ pageAnimation }) {
  const { t } = useTranslation();

  return (
    <motion.section key="tech" className="page tech-page" {...pageAnimation}>
      <div className="page-badge">{t("techPage.badge")}</div>
      <h1 className="main-title">{t("techPage.title")}</h1>

      <div className="tech-box">
        <div className="tech-column">
          <h2>{t("techPage.frontend")}</h2>
          <p>{t("techPage.frontendDesc")}</p>
          <span>Kotlin</span>
          <span>Framer Motion</span>
          <span>Lucide Icons</span>
        </div>

        <div className="connection-line"></div>

        <div className="tech-column">
          <h2>{t("techPage.backend")}</h2>
          <p>{t("techPage.backendDesc")}</p>
          <span>Spring Boot</span>
          <span>REST API</span>
          <span>Email Service</span>
        </div>

        <div className="connection-line"></div>

        <div className="tech-column">
          <h2>{t("techPage.database")}</h2>
          <p>{t("techPage.databaseDesc")}</p>
          <span>Neon Database</span>
          <span>Firebase Storage</span>
          <span>MySql</span>
        </div>
      </div>
      <div className="connection-line"></div>

      
    </motion.section>
  );
}

export default TechPage;