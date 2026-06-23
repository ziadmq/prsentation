import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Eye, Layers3, Smartphone } from "lucide-react";
import { screenKeys } from "../data/Data";

function ScreensPage({ pageAnimation }) {
  const { t } = useTranslation();
  const highlightedScreen = screenKeys[0];

  return (
    <motion.section key="screens" className="page screens-page screens-showcase-page" {...pageAnimation}>
      <div className="screens-orb screens-orb-one"></div>
      <div className="screens-orb screens-orb-two"></div>

      <div className="screens-hero-block">
        <div className="page-badge screens-badge">
          <Smartphone size={18} />
          {t("screensPage.badge")}
        </div>

        <h1 className="main-title screens-title">{t("screensPage.title")}</h1>
        <p className="main-subtitle screens-subtitle">{t("screensPage.subtitle")}</p>

        <div className="screens-hero-pills">
          <span>
            <Layers3 size={16} />
            {screenKeys.length} App Screens
          </span>
          <span>
            <Smartphone size={16} />
            Clean Mobile UI
          </span>
          <span>
            <Eye size={16} />
            {t("screensPage.mobileExperience")}
          </span>
        </div>
      </div>

      {highlightedScreen && (
        <motion.div
          className="screens-featured-card"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="screens-featured-copy">
            <span className="screens-step-label">01 / Featured Flow</span>
            <h2>{t(`${highlightedScreen.key}.title`)}</h2>
            <p>{t(`${highlightedScreen.key}.text`)}</p>
            <div className="screen-mini-line featured-line">
              <div></div>
              <small>{t("screensPage.mobileExperience")}</small>
            </div>
          </div>

          <motion.div
            className="mobile-mockup screens-featured-phone"
            whileHover={{ scale: 1.025, rotate: -1.5 }}
          >
            <div className="phone-glow-ring"></div>
            <div className="phone-notch"></div>
            <div className="phone-screen">
              <img src={highlightedScreen.image} alt={t(`${highlightedScreen.key}.title`)} />
            </div>
          </motion.div>
        </motion.div>
      )}

      <div className="screens-gallery-grid">
        {screenKeys.map((screen, index) => (
          <motion.article
            className="screen-showcase-card"
            key={screen.key}
            initial={{ opacity: 0, y: 38 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 + 0.16 }}
          >
            <div className="screen-card-header">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <small>{t(`${screen.key}.tag`)}</small>
            </div>

            <div className="screen-card-phone-shell">
              <div className="phone-notch mini-notch"></div>
              <img src={screen.image} alt={t(`${screen.key}.title`)} />
            </div>

            <div className="screen-card-body">
              <h2>{t(`${screen.key}.title`)}</h2>
              <p>{t(`${screen.key}.text`)}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

export default ScreensPage;
