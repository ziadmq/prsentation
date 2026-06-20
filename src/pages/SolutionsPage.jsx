import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { AlertTriangle, Lightbulb } from "lucide-react";

function SolutionsPage({ pageAnimation }) {
  const { t } = useTranslation();

  const problems = ["notifications", "mapPerformance", "imageSpeed"];

  return (
    <motion.section key="solutions" className="page solutions-page" {...pageAnimation}>
      <div className="page-header">
        <h2 className="page-title">{t("solutionsPage.title")}</h2>
        <p className="page-subtitle">{t("solutionsPage.subtitle")}</p>
      </div>

      <div className="build-content">
        <div className="phases-section">
          <div className="timeline">
            {problems.map((key, index) => (
              <div className="timeline-item" key={key}>
                <div className="timeline-icon">{index + 1}</div>
                <div className="timeline-content">
                  <div style={{ marginBottom: "24px" }}>
                    <h4 style={{ display: "flex", alignItems: "center", gap: "10px", color: "#f97316" }}>
                      <AlertTriangle size={20} />
                      {t(`solutionsPage.problems.${key}.problem`)}
                    </h4>
                    <p>{t(`solutionsPage.problems.${key}.problemText`)}</p>
                  </div>
                  <div>
                    <h4 style={{ display: "flex", alignItems: "center", gap: "10px", color: "#eab308" }}>
                      <Lightbulb size={20} />
                      {t(`solutionsPage.problems.${key}.solution`)}
                    </h4>
                    <p>{t(`solutionsPage.problems.${key}.solutionText`)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default SolutionsPage;
