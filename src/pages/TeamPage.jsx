import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Crown, ExternalLink, Sparkles } from "lucide-react";
import { supervisor, teamMembers } from "../data/Data";

function TeamPage({ pageAnimation }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  return (
    <motion.section key="team" className="page team-page" {...pageAnimation}>
      <div className="page-badge">
        <Sparkles size={18} />
        {t("teamPage.badge")}
      </div>

      <h1 className="main-title">{t("teamPage.title")}</h1>
      <p className="main-subtitle">{t("teamPage.subtitle")}</p>

      <motion.div
        className="supervisor-section"
        initial={{ opacity: 0, y: 45 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="supervisor-glow"></div>

        <div className="supervisor-image-wrap">
          <img src={supervisor.image} alt={t(supervisor.nameKey)} />
          <div className="crown-icon">
            <Crown />
          </div>
        </div>

        <div className="supervisor-info">
          <span>{t("teamPage.supervisorLabel")}</span>
          <h2>{t(supervisor.nameKey)}</h2>
          <p>{t("teamPage.supervisorDesc")}</p>
        </div>
      </motion.div>

      <div className="team-roadmap">
        <motion.div
          className="team-roadmap-line"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />

        {teamMembers.map((member, index) => {
          return (
            <motion.div
              key={index}
              className={
                index % 2 === 0
                  ? "team-roadmap-item start"
                  : "team-roadmap-item end"
              }
              initial={{ opacity: 0, x: index % 2 === 0 ? (isRtl ? -90 : 90) : (isRtl ? 90 : -90) }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15, duration: 0.55 }}
            >
              <motion.div
                className="team-roadmap-dot"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: index * 0.15 + 0.2,
                  type: "spring",
                  stiffness: 170,
                }}
              >
                {index + 1}
              </motion.div>

              <motion.div
                className="team-roadmap-card"
                whileHover={{
                  y: -12,
                  scale: 1.025,
                  rotate: index % 2 === 0 ? -1 : 1,
                }}
              >
                <div className="team-card-light"></div>

                <div className="team-card-header">
                  <div className="team-avatar">
                    <img src={member.image} alt={t(member.nameKey)} />
                  </div>
                </div>

                <h3>{t(member.nameKey)}</h3>

                <a
                  className="linkedin-button"
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink size={19} />
                  {t("teamPage.linkedinButton")}
                </a>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}

export default TeamPage;
