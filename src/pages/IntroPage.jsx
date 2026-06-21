import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { 
  Map, 
  Users, 
  Tag, 
  Sparkles, 
  Flame, 
  Calendar, 
  TrendingUp, 
  AlertTriangle, 
  Lightbulb, 
  ShieldAlert,
  Target,
  Compass,
  Layers,
  Heart,
  Handshake,
  BrainCircuit,
  Briefcase,
  Monitor
} from "lucide-react";

function IntroPage({ pageAnimation }) {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const pillars = [
    { icon: Users, key: "community", color: "#26C6DA" },
    { icon: Map, key: "maps", color: "#1E88E5" },
    { icon: Calendar, key: "events", color: "#26C6DA" },
    { icon: Tag, key: "offers", color: "#1E88E5" }
  ];

  const problems = [
    { icon: AlertTriangle, key: "p1", color: "#1E88E5" },
    { icon: Target, key: "p2", color: "#26C6DA" },
    { icon: Heart, key: "p3", color: "#1E88E5" },
    { icon: ShieldAlert, key: "p4", color: "#26C6DA" },
    { icon: Handshake, key: "p5", color: "#1E88E5" },
    { icon: BrainCircuit, key: "p6", color: "#26C6DA" }
  ];

  const objectives = [
    { icon: Layers, key: "o1", color: "#1E88E5" },
    { icon: Compass, key: "o2", color: "#26C6DA" },
    { icon: TrendingUp, key: "o3", color: "#1E88E5" },
    { icon: Lightbulb, key: "o4", color: "#26C6DA" },
    { icon: Users, key: "o5", color: "#1E88E5" },
    { icon: Sparkles, key: "o6", color: "#26C6DA" }
  ];

  const roles = [
    { icon: Compass, key: "user", color: "#1E88E5" },
    { icon: Briefcase, key: "owner", color: "#26C6DA" },
    { icon: Monitor, key: "admin", color: "#1E88E5" }
  ];

  return (
    <motion.section key="intro" className="page intro-page" {...pageAnimation}>
      
      {/* Hero Section */}
      <div className="project-title-container">
        <h1 className="project-title">{t("introPage.title")}</h1>
        <h2 className="project-subtitle">{t("introPage.subtitle")}</h2>
      </div>

      <div className="full-width-hero">
        <div className="project-description">
          <p dangerouslySetInnerHTML={{ __html: t("introPage.description") }} />
        </div>

        {/* Simple Words Callout Box */}
        <div className="simple-intro-card">
          <div className="simple-intro-header">
            <Sparkles size={18} className="simple-intro-icon" />
            <span>{t("introPage.simpleIntroTitle")}</span>
          </div>
          <p className="simple-intro-text" dangerouslySetInnerHTML={{ __html: t("introPage.simpleDescription") }} />
        </div>
      </div>

      {/* Extended Info Wrapper */}
      <div className="extended-info-container">

        {/* System Roles Section */}
        <h2 className="section-title">{t("introPage.rolesTitle")}</h2>
        <div className="system-roles-grid">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <motion.div 
                className="role-card" 
                key={role.key}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                style={{ "--role-color": role.color }}
              >
                <div className="role-header">
                  <div className="role-icon-box">
                    <Icon size={26} />
                  </div>
                  <div className="role-titles">
                    <h3>{t(`introPage.roles.${role.key}.title`)}</h3>
                    <h4>{t(`introPage.roles.${role.key}.subtitle`)}</h4>
                  </div>
                </div>
                <p className="role-desc">{t(`introPage.roles.${role.key}.desc`)}</p>
                <div className="role-actions-box">
                  <strong className="role-actions-label">{t("introPage.roles.actionsLabel")}</strong>
                  <p className="role-actions-text">{t(`introPage.roles.${role.key}.actions`)}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 4 Pillars Section */}
        <h2 className="section-title">{t("introPage.pillarsTitle")}</h2>
        <motion.div 
          className="pillars-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div 
                className="pillar-card" 
                key={pillar.key}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.03 }}
                style={{ "--pillar-color": pillar.color }}
              >
                <div className="pillar-icon-box">
                  <Icon size={28} />
                </div>
                <h3>{t(`introPage.pillars.${pillar.key}.title`)}</h3>
                <p>{t(`introPage.pillars.${pillar.key}.desc`)}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Problems & Motivation Section */}
        <h2 className="section-title">{t("introPage.problemsTitle")}</h2>
        <div className="interactive-problems-list">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div 
                className="problem-strip" 
                key={problem.key}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.015 }}
                style={{ "--accent-color": problem.color }}
              >
                <div className="problem-num">0{index + 1}</div>
                <div className="problem-icon">
                  <Icon size={24} />
                </div>
                <div className="problem-content">
                  <h3>{t(`introPage.problems.${problem.key}.title`)}</h3>
                  <p>{t(`introPage.problems.${problem.key}.desc`)}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Objectives & Vision Section */}
        <h2 className="section-title">{t("introPage.objectivesTitle")}</h2>
        <div className="objectives-visual-grid">
          {objectives.map((obj, index) => {
            const Icon = obj.icon;
            return (
              <motion.div 
                className="objective-card" 
                key={obj.key}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -6, boxShadow: "0 15px 35px rgba(0,0,0,0.2)" }}
                style={{ "--obj-color": obj.color }}
              >
                <div className="obj-header">
                  <div className="obj-icon-circle">
                    <Icon size={24} />
                  </div>
                  <span className="obj-index">#0{index + 1}</span>
                </div>
                <h3>{t(`introPage.objectives.${obj.key}.title`)}</h3>
                <p>{t(`introPage.objectives.${obj.key}.desc`)}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </motion.section>
  );
}

export default IntroPage;