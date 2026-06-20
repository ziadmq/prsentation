import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Send } from "lucide-react";

function EmailPage({ pageAnimation }) {
  const { t } = useTranslation();

  return (
    <motion.section key="email" className="page email-page" {...pageAnimation}>
      <div className="email-layout">
        <div className="email-info">
          <div className="page-badge">{t("emailPage.badge")}</div>
          <h1 className="main-title">{t("emailPage.title")}</h1>
          <p className="main-subtitle">{t("emailPage.subtitle")}</p>
        </div>

        <form className="email-form">
          <input type="text" placeholder={t("emailPage.namePlaceholder")} />
          <input type="email" placeholder={t("emailPage.emailPlaceholder")} />
          <textarea placeholder={t("emailPage.messagePlaceholder")} />

          <button type="button">
            <Send size={18} />
            {t("emailPage.sendButton")}
          </button>
        </form>
      </div>
    </motion.section>
  );
}

export default EmailPage;