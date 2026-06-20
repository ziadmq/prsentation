import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { featureKeys } from "../data/Data";

function FeaturesPage({ pageAnimation }) {
  const { t } = useTranslation();

  return (
    <motion.section key="features" className="page features-page" {...pageAnimation}>
      <div className="page-badge">{t("featuresPage.badge")}</div>
      <h1 className="main-title">{t("featuresPage.title")}</h1>

      <div className="features-grid">
        {featureKeys.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              className="feature-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
            >
              <div className="feature-icon">
                <Icon size={30} />
              </div>

              <h3>{t(`${feature.key}.title`)}</h3>
              <p>{t(`${feature.key}.text`)}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}

export default FeaturesPage;