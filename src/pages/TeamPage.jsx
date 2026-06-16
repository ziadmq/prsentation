import { motion } from "framer-motion";
import { Crown, ExternalLink, Sparkles } from "lucide-react";
import { supervisor, teamMembers } from "../data/Data";

function TeamPage({ pageAnimation }) {
  return (
    <motion.section key="team" className="page team-page" {...pageAnimation}>
      <div className="page-badge">
        <Sparkles size={18} />
        فريق مشروع التخرج
      </div>

      <h1 className="main-title">تعرف على فريق JoMap</h1>
      <p className="main-subtitle">
        فريق إبداعي يجمع بين التطوير، التصميم، الاختبار، والتوثيق لبناء طريقة أذكى لاكتشاف الأردن.
      </p>

      <motion.div
        className="supervisor-section"
        initial={{ opacity: 0, y: 45 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="supervisor-glow"></div>

        <div className="supervisor-image-wrap">
          <img src={supervisor.image} alt={supervisor.name} />
          <div className="crown-icon">
            <Crown />
          </div>
        </div>

        <div className="supervisor-info">
          <span>المشرف الأكاديمي</span>
          <h2>{supervisor.name}</h2>
          <p>
            توجيه الفريق خلال التخطيط، التطوير، التوثيق، وتجهيز العرض النهائي.
          </p>
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
          const Icon = member.icon;

          return (
            <motion.div
              key={index}
              className={
                index % 2 === 0
                  ? "team-roadmap-item left"
                  : "team-roadmap-item right"
              }
              initial={{ opacity: 0, x: index % 2 === 0 ? -90 : 90 }}
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
                    <img src={member.image} alt={member.name} />
                  </div>

                  <div className="team-role-icon">
                    <Icon size={24} />
                  </div>
                </div>

                <span className="team-role">{member.role}</span>
                <h3>{member.name}</h3>
                <p>{member.description}</p>

                <div className="skills-list">
                  {member.skills.map((skill, skillIndex) => (
                    <span key={skillIndex}>{skill}</span>
                  ))}
                </div>

                <a
                  className="linkedin-button"
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink size={19} />
                  عرض لينكد إن
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