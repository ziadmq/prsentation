import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ShieldCheck } from "lucide-react";
import { adminFlowStepKeys } from "../data/Data";

function AdminFlowPage({ pageAnimation }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  return (
    <motion.section key="adminFlow" className="page roadmap-page" {...pageAnimation}>
      <div className="page-badge">
        <ShieldCheck size={18} />
        {t("adminFlowPage.badge")}
      </div>

      <h1 className="main-title">{t("adminFlowPage.title")}</h1>
      <p className="main-subtitle">{t("adminFlowPage.subtitle")}</p>

      <div className="roadmap-container">
        <motion.div
          className="roadmap-line"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />

        {adminFlowStepKeys.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              className={index % 2 === 0 ? "roadmap-step start" : "roadmap-step end"}
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? (isRtl ? -90 : 90) : (isRtl ? 90 : -90) }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.13, duration: 0.55 }}
            >
              <motion.div className="roadmap-dot">
                {index + 1}
              </motion.div>

              <motion.div
                className="roadmap-card"
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  rotate: index % 2 === 0 ? -1 : 1,
                }}
              >
                <div className="roadmap-card-glow"></div>

                <div className="roadmap-icon">
                  <Icon size={28} />
                </div>

                <span>{t(`${step.key}.tag`)}</span>
                <h3>{t(`${step.key}.title`)}</h3>
                <p>{t(`${step.key}.text`)}</p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}

export default AdminFlowPage;
