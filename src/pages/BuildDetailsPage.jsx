import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { 
  Lightbulb, ClipboardList, PenTool, FileText,
  Server, Smartphone, TestTubeDiagonal,
  Monitor, Database, Globe, Layers, Users, Cpu
} from "lucide-react";

const phaseIcons = [Lightbulb, ClipboardList, PenTool, FileText, Server, Smartphone, TestTubeDiagonal];
const phaseColors = ["#1E88E5", "#26C6DA", "#a855f7", "#f59e0b", "#22c55e", "#1E88E5", "#26C6DA"];
const phaseKeys = ["phase1", "phase2", "phase3", "phase4", "phase5", "phase6", "phase7"];

function AnimatedCounter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const numericTarget = parseInt(target);

  useEffect(() => {
    let start = 0;
    const duration = 1800;
    const increment = numericTarget / (duration / 30);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [numericTarget]);

  return <span>{count}{suffix}</span>;
}

function BuildDetailsPage({ pageAnimation }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const stats = [
    { icon: Monitor, value: t("buildPage.stats.screens"), label: t("buildPage.stats.screensLabel"), color: "#1E88E5" },
    { icon: Globe, value: t("buildPage.stats.endpoints"), label: t("buildPage.stats.endpointsLabel"), color: "#26C6DA" },
    { icon: Database, value: t("buildPage.stats.entities"), label: t("buildPage.stats.entitiesLabel"), color: "#a855f7" },
    { icon: FileText, value: t("buildPage.stats.pages"), label: t("buildPage.stats.pagesLabel"), color: "#f59e0b" },
    { icon: Layers, value: t("buildPage.stats.integrations"), label: t("buildPage.stats.integrationsLabel"), color: "#22c55e" },
    { icon: Users, value: t("buildPage.stats.roles"), label: t("buildPage.stats.rolesLabel"), color: "#1E88E5" },
  ];

  return (
    <motion.section key="build" className="page build-page" {...pageAnimation}>
      <div className="page-header">
        <div className="page-badge">
          <Cpu size={16} />
          {t("buildPage.badge")}
        </div>
        <h1 className="main-title">{t("buildPage.title")}</h1>
        <p className="page-subtitle" style={{ maxWidth: "820px", margin: "0 auto 20px", fontSize: "16px", color: "var(--text-soft)" }}>
          {t("buildPage.subtitle")}
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 10px"
        }}
      >
        {/* Intro Card */}
        <motion.div 
          variants={itemVariants}
          style={{
            background: "linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.1), rgba(var(--color-secondary-rgb), 0.04))",
            border: "1px solid rgba(var(--color-primary-rgb), 0.22)",
            borderRadius: "24px",
            padding: "26px 28px",
            textAlign: "center",
            boxShadow: "var(--shadow-card)",
            backdropFilter: "blur(10px)"
          }}
        >
          <p style={{ fontSize: "16.5px", lineHeight: "1.8", color: "var(--text-soft)", margin: 0 }}>
            {t("buildPage.intro")}
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div variants={itemVariants}>
          <h3 className="section-title-small" style={{ textAlign: "center", marginBottom: "18px" }}>
            {t("buildPage.stats.title")}
          </h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "14px"
          }}>
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.04 }}
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--line)",
                    borderRadius: "20px",
                    padding: "20px 14px",
                    textAlign: "center",
                    boxShadow: "var(--shadow-card)",
                    cursor: "default"
                  }}
                >
                  <div style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "12px",
                    background: `linear-gradient(135deg, ${stat.color}22, ${stat.color}11)`,
                    border: `1px solid ${stat.color}33`,
                    display: "grid",
                    placeItems: "center",
                    margin: "0 auto 10px"
                  }}>
                    <Icon size={18} style={{ color: stat.color }} />
                  </div>
                  <div style={{ fontSize: "28px", fontWeight: "950", color: stat.color, lineHeight: 1.1 }}>
                    <AnimatedCounter target={stat.value.replace(/[^0-9]/g, "")} suffix={stat.value.includes("+") ? "+" : ""} />
                  </div>
                  <div style={{ fontSize: "12.5px", color: "var(--text-muted)", marginTop: "4px", fontWeight: "600" }}>
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* SDLC Timeline */}
        <motion.div variants={itemVariants} style={{ position: "relative" }}>
          {/* Vertical line */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              [isRtl ? "right" : "left"]: "27px",
              width: "3px",
              borderRadius: "999px",
              background: "linear-gradient(to bottom, var(--blue), var(--cyan), var(--green), #a855f7, var(--blue))",
              zIndex: 1,
              opacity: 0.6
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {phaseKeys.map((key, index) => {
              const Icon = phaseIcons[index];
              const color = phaseColors[index];
              const isGP2 = index >= 4;

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: isRtl ? 40 : -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "56px 1fr",
                    gap: "18px",
                    alignItems: "start",
                    position: "relative",
                    zIndex: 2
                  }}
                >
                  {/* Phase Number Circle */}
                  <div style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${color}, ${color}99)`,
                    display: "grid",
                    placeItems: "center",
                    color: "#fff",
                    boxShadow: `0 0 0 6px ${color}18, 0 8px 24px ${color}30`,
                    position: "relative",
                    zIndex: 3
                  }}>
                    <Icon size={22} />
                  </div>

                  {/* Phase Card */}
                  <motion.div
                    whileHover={{ y: -4, boxShadow: `0 20px 44px ${color}18` }}
                    style={{
                      background: "var(--bg-card)",
                      border: `1px solid ${color}25`,
                      borderRadius: "22px",
                      padding: "22px 24px",
                      boxShadow: "var(--shadow-card)",
                      transition: "var(--transition)",
                      textAlign: "start",
                      position: "relative",
                      overflow: "hidden"
                    }}
                  >
                    {/* Subtle shine effect */}
                    <div style={{
                      position: "absolute",
                      inset: "-1px",
                      background: `linear-gradient(120deg, transparent, ${color}08, transparent)`,
                      pointerEvents: "none"
                    }} />

                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px", flexWrap: "wrap" }}>
                      <span style={{
                        fontSize: "11px",
                        fontWeight: "800",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: color,
                        background: `${color}15`,
                        border: `1px solid ${color}30`,
                        padding: "4px 12px",
                        borderRadius: "999px",
                        whiteSpace: "nowrap"
                      }}>
                        {t(`buildPage.phases.${key}.tag`)}
                      </span>
                      {index === 4 && (
                        <span style={{
                          fontSize: "10px",
                          fontWeight: "700",
                          color: "#22c55e",
                          background: "rgba(34, 197, 94, 0.1)",
                          border: "1px solid rgba(34, 197, 94, 0.25)",
                          padding: "3px 10px",
                          borderRadius: "999px"
                        }}>
                          {isRtl ? "بدء التنفيذ ▸" : "▸ Implementation Starts"}
                        </span>
                      )}
                    </div>

                    <h4 style={{
                      fontSize: "19px",
                      fontWeight: "950",
                      margin: "0 0 8px 0",
                      color: "var(--text-main)",
                      position: "relative",
                      zIndex: 1
                    }}>
                      {t(`buildPage.phases.${key}.title`)}
                    </h4>

                    <p style={{
                      fontSize: "14.5px",
                      lineHeight: "1.75",
                      color: "var(--text-soft)",
                      margin: 0,
                      position: "relative",
                      zIndex: 1
                    }}>
                      {t(`buildPage.phases.${key}.text`)}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default BuildDetailsPage;
