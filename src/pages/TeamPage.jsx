import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Crown, ExternalLink, Sparkles } from "lucide-react";
import { supervisor, teamMembers } from "../data/Data";

function TeamPage({ pageAnimation }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.45, ease: "easeOut" }
    }
  };

  return (
    <motion.section key="team" className="page team-page" {...pageAnimation}>
      {/* Decorative background orbits */}
      <div className="metrics-orbit orbit-one"></div>
      <div className="metrics-orbit orbit-two"></div>

      <div className="page-badge">
        <Sparkles size={18} />
        {t("teamPage.badge")}
      </div>

      <h1 className="main-title">{t("teamPage.title")}</h1>
      <p className="main-subtitle" style={{ maxWidth: "800px", margin: "0 auto 30px" }}>
        {t("teamPage.subtitle")}
      </p>

      {/* Supervisor Section Card */}
      <motion.div
        className="supervisor-section"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        <div className="supervisor-glow"></div>

        {/* DOM order: image wrapper first, then text info */}
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

      {/* Development Team Grid */}
      <div className="team-section-title" style={{ marginTop: "54px", marginBottom: "26px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "950", color: "#fff", margin: 0 }}>
          {t("teamPage.membersTitle", isRtl ? "أعضاء فريق التطوير" : "Development Team Members")}
        </h2>
      </div>

      <motion.div
        className="creative-team-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {teamMembers.map((member, index) => {
          return (
            <motion.div
              key={index}
              className="creative-member-card"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              style={{ "--delay": `${index * 0.1}s` }}
            >
              {/* Background gradient glow */}
              <div className="team-card-light"></div>

              <div className="member-image-ring" style={{ margin: "0 auto 16px" }}>
                <img src={member.image} alt={t(member.nameKey)} />
              </div>
              
              <h3 style={{ fontSize: "19px", fontWeight: "950", color: "#fff", margin: "0 auto 20px", textAlign: "center" }}>
                {t(member.nameKey)}
              </h3>

              {/* LinkedIn link */}
              <a
                className="linkedin-button"
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "10px 14px",
                  borderRadius: "12px",
                  background: "rgba(30, 136, 229, 0.1)",
                  border: "1px solid rgba(30, 136, 229, 0.2)",
                  color: "#fff",
                  fontSize: "13px",
                  fontWeight: "800",
                  textDecoration: "none",
                  width: "100%",
                  boxSizing: "border-box",
                  transition: "all 0.25s ease",
                  marginTop: "auto"
                }}
              >
                <ExternalLink size={15} />
                {t("teamPage.linkedinButton")}
              </a>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}

export default TeamPage;
