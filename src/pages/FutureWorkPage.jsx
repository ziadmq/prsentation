import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Compass, Sparkles, Globe, CreditCard, ShieldCheck } from "lucide-react";

function FutureWorkPage({ pageAnimation }) {
  const { t } = useTranslation();

  const futureIcons = [Sparkles, Globe, CreditCard, ShieldCheck];

  return (
    <motion.section key="futureWork" className="page future-work-page" {...pageAnimation}>
      <div className="page-badge">
        <Compass size={18} />
        {t("futureWorkPage.badge")}
      </div>

      <h1 className="main-title">{t("futureWorkPage.title")}</h1>
      <p className="main-subtitle">{t("futureWorkPage.subtitle")}</p>

      <div className="future-work-grid">
        {/* Future Goals Side */}
        <div className="future-goals-section">
          <h2 className="section-subtitle-custom">
            <Sparkles size={20} className="section-icon-custom" />
            {t("futureWorkPage.futureGoals.title")}
          </h2>
          <div className="goals-container">
            {["g1", "g2", "g3", "g4"].map((goalKey, idx) => {
              const GoalIcon = futureIcons[idx];
              return (
                <motion.div
                  className="goal-card"
                  key={goalKey}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="goal-icon-wrapper">
                    <GoalIcon size={24} />
                  </div>
                  <div className="goal-content">
                    <h3>{t(`futureWorkPage.futureGoals.${goalKey}.title`)}</h3>
                    <p>{t(`futureWorkPage.futureGoals.${goalKey}.desc`)}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Conclusion Side */}
        <div className="conclusion-section">
          <motion.div
            className="conclusion-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="conclusion-card-glow"></div>
            <h2 className="conclusion-title">
              {t("futureWorkPage.conclusion.title")}
            </h2>
            <p className="conclusion-text">
              {t("futureWorkPage.conclusion.text")}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default FutureWorkPage;
