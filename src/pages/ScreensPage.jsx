import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Smartphone } from "lucide-react";
import { screenKeys } from "../data/Data";

function ScreensPage({ pageAnimation }) {
  const { t } = useTranslation();

  return (
    <motion.section key="screens" className="page screens-page" {...pageAnimation}>
      <div className="page-badge">
        <Smartphone size={18} />
        {t("screensPage.badge")}
      </div>

      <h1 className="main-title">{t("screensPage.title")}</h1>
      <p className="main-subtitle">{t("screensPage.subtitle")}</p>

      <div className="creative-screens-wrapper">
        {screenKeys.map((screen, index) => (
          <motion.div
            className={index % 2 === 0 ? "creative-screen-row" : "creative-screen-row reverse"}
            key={index}
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.12 }}
          >
            <motion.div
              className="mobile-mockup"
              whileHover={{ scale: 1.04, rotate: index % 2 === 0 ? 2 : -2 }}
            >
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <img src={screen.image} alt={t(`${screen.key}.title`)} />
              </div>
            </motion.div>

            <div className="screen-description-card">
              <span>{t(`${screen.key}.tag`)}</span>
              <h2>{t(`${screen.key}.title`)}</h2>
              <p>{t(`${screen.key}.text`)}</p>

              <div className="screen-mini-line">
                <div></div>
                <small>{t("screensPage.mobileExperience")}</small>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default ScreensPage;