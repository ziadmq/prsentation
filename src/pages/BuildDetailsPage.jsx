import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { 
  Smartphone, Server, Database, Layout, 
  Clock, GitBranch, CheckSquare, Activity,
  Wrench, Monitor, PenTool, Code2, Kanban,
  AlertTriangle, Lightbulb, CheckCircle2
} from "lucide-react";

function BuildDetailsPage({ pageAnimation }) {
  const { t } = useTranslation();

  const phases = ["planning", "design", "backend", "mobile", "testing"];

  return (
    <motion.section key="build" className="page build-page" {...pageAnimation}>
      <div className="page-header">
        <h2 className="page-title">{t("buildPage.title")}</h2>
        <p className="page-subtitle">{t("buildPage.subtitle")}</p>
      </div>

      <div className="build-content">
        {/* Development Phases Section */}
        <div className="phases-section">
          <h3 className="section-title-small">{t("buildPage.phasesTitle")}</h3>
          <div className="timeline">
            {phases.map((phase, index) => (
              <div className="timeline-item" key={phase}>
                <div className="timeline-icon">{index + 1}</div>
                <div className="timeline-content">
                  <h4>{t(`buildPage.phases.${phase}.title`)}</h4>
                  <p>{t(`buildPage.phases.${phase}.text`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default BuildDetailsPage;
