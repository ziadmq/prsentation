import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  Braces,
  CheckCircle2,
  Code2,
  ExternalLink,
  FileCode2,
  GitBranch,
  Layers3,
  MessageSquareText,
  Server,
  Smartphone,
} from "lucide-react";

// Count-up helper component
function AnimatedCounter({ target, duration = 1500 }) {
  const [count, setCount] = useState(0);
  const numericTarget = parseInt(target.replace(/[^0-9]/g, "")) || 0;
  const suffix = target.replace(/[0-9]/g, "");

  useEffect(() => {
    if (numericTarget === 0) {
      setCount(0);
      return;
    }
    let start = 0;
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
  }, [numericTarget, duration]);

  return <span>{count}{suffix}</span>;
}

function ProjectMetrics({ pageAnimation }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  const totals = [
    { labelKey: "metricsPage.completedTasks", value: "225", icon: CheckCircle2, color: "#22c55e" },
    { labelKey: "metricsPage.codeComments", value: "450", icon: MessageSquareText, color: "#26C6DA" },
    { labelKey: "metricsPage.codeLines", value: "50K", icon: Code2, color: "#a855f7" },
    { labelKey: "metricsPage.projectFiles", value: "186", icon: FileCode2, color: "#f59e0b" },
  ];

  const repositories = [
    {
      name: "Android Frontend",
      layer: "Kotlin Mobile Application",
      icon: Smartphone,
      repoUrl: "https://github.com/ziadmq/JoMap",
      completion: 88,
      color: "#1E88E5",
      stats: [
        { labelKey: "metricsPage.tasks", value: "120" },
        { labelKey: "metricsPage.comments", value: "250" },
        { label: "Kotlin Lines", value: "40K" },
        { labelKey: "metricsPage.screens", value: "32" },
      ],
    },
    {
      name: "Backend API",
      layer: "Java Spring Boot Services",
      icon: Server,
      repoUrl: "https://github.com/ghalebshhab/GraduationProjectv1",
      completion: 92,
      color: "#22c55e",
      stats: [
        { labelKey: "metricsPage.tasks", value: "105" },
        { labelKey: "metricsPage.comments", value: "200" },
        { label: "Java Lines", value: "12K" },
        { label: "APIs", value: "150" },
      ],
    },
  ];

  const workFlow = [
    t("metricsPage.workflow.planning"),
    "UI Design",
    "Android",
    "Backend",
    "Database",
    "Testing",
    t("metricsPage.workflow.delivery"),
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <motion.section key="metrics" className="page metrics-page" {...pageAnimation}>
      {/* Header section identical to other pages */}
      <div className="page-header">
        <div className="page-badge">
          <BarChart3 size={16} />
          {t("metricsPage.badge")}
        </div>
        <h1 className="main-title">{t("metricsPage.title")}</h1>
        <p className="page-subtitle" style={{ maxWidth: "820px", margin: "0 auto 20px", fontSize: "16px", color: "var(--text-soft)" }}>
          {t("metricsPage.subtitle")}
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 10px"
        }}
      >
        {/* Totals Grid */}
        <motion.div
          variants={containerVariants}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "16px",
            width: "100%"
          }}
        >
          {totals.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.03 }}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--line)",
                  borderRadius: "20px",
                  padding: "24px 16px",
                  textAlign: "center",
                  boxShadow: "var(--shadow-card)",
                  cursor: "default"
                }}
                key={item.labelKey}
              >
                <div style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: `linear-gradient(135deg, ${item.color}22, ${item.color}11)`,
                  border: `1px solid ${item.color}33`,
                  display: "grid",
                  placeItems: "center",
                  margin: "0 auto 12px"
                }}>
                  <Icon size={20} style={{ color: item.color }} />
                </div>
                <div style={{ fontSize: "32px", fontWeight: "950", color: item.color, lineHeight: 1.1 }}>
                  <AnimatedCounter target={item.value} />
                </div>
                <div style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "6px", fontWeight: "600" }}>
                  {t(item.labelKey)}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Repositories Showcase Grid */}
        <motion.div
          variants={containerVariants}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))",
            gap: "24px",
            width: "100%"
          }}
        >
          {repositories.map((repo, index) => {
            const Icon = repo.icon;
            return (
              <motion.article
                variants={itemVariants}
                whileHover={{ y: -4 }}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--line)",
                  borderRadius: "24px",
                  padding: "26px",
                  boxShadow: "var(--shadow-card)",
                  textAlign: "start",
                  position: "relative",
                  overflow: "hidden"
                }}
                key={repo.name}
              >
                {/* Repo Card Header */}
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                  <div style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "14px",
                    background: `linear-gradient(135deg, ${repo.color}22, ${repo.color}11)`,
                    border: `1px solid ${repo.color}33`,
                    display: "grid",
                    placeItems: "center"
                  }}>
                    <Icon size={24} style={{ color: repo.color }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "20px", fontWeight: "950", color: "#fff", margin: 0 }}>{repo.name}</h3>
                    <p style={{ fontSize: "13px", color: "var(--text-muted)", margin: "2px 0 0" }}>{repo.layer}</p>
                  </div>
                  <span style={{
                    marginLeft: isRtl ? "0" : "auto",
                    marginRight: isRtl ? "auto" : "0",
                    fontSize: "24px",
                    fontWeight: "950",
                    color: "rgba(255,255,255,0.05)"
                  }}>0{index + 1}</span>
                </div>

                {/* Inner stats boxes */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "10px",
                  marginBottom: "24px"
                }}>
                  {repo.stats.map((stat) => (
                    <div
                      key={stat.labelKey || stat.label}
                      style={{
                        background: "rgba(255,255,255,0.015)",
                        border: "1px solid rgba(255,255,255,0.03)",
                        borderRadius: "14px",
                        padding: "12px 8px",
                        textAlign: "center"
                      }}
                    >
                      <div style={{ fontSize: "18px", fontWeight: "950", color: "#fff" }}>
                        <AnimatedCounter target={stat.value} />
                      </div>
                      <div style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "4px", fontWeight: "600" }}>
                        {stat.labelKey ? t(stat.labelKey) : stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Progress bar info */}
                <div style={{ marginBottom: "22px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "13px", fontWeight: "750" }}>
                    <span style={{ color: "var(--text-soft)" }}>{t("metricsPage.completionRate")}</span>
                    <span style={{ color: repo.color }}>{repo.completion}%</span>
                  </div>
                  <div style={{ height: "8px", background: "rgba(255,255,255,0.06)", borderRadius: "999px", overflow: "hidden" }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${repo.completion}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      style={{
                        height: "100%",
                        background: `linear-gradient(90deg, ${repo.color}, ${repo.color}aa)`,
                        borderRadius: "999px",
                        boxShadow: `0 0 12px ${repo.color}55`
                      }}
                    />
                  </div>
                </div>

                {/* Link button */}
                <a
                  href={repo.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "12px",
                    borderRadius: "14px",
                    background: `linear-gradient(135deg, ${repo.color}15, ${repo.color}08)`,
                    border: `1px solid ${repo.color}33`,
                    color: "#fff",
                    fontSize: "13.5px",
                    fontWeight: "750",
                    textDecoration: "none",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `linear-gradient(135deg, ${repo.color}25, ${repo.color}15)`;
                    e.currentTarget.style.boxShadow = `0 4px 12px ${repo.color}22`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = `linear-gradient(135deg, ${repo.color}15, ${repo.color}08)`;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <GitBranch size={16} />
                  {t("metricsPage.openRepo")}
                  <ExternalLink size={14} />
                </a>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Repository Links Panel */}
        <motion.div
          variants={itemVariants}
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--line)",
            borderRadius: "24px",
            padding: "24px",
            boxShadow: "var(--shadow-card)",
            width: "100%"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px", textAlign: "start" }}>
            <div style={{
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              background: "rgba(38, 198, 218, 0.1)",
              border: "1px solid rgba(38, 198, 218, 0.2)",
              display: "grid",
              placeItems: "center",
              color: "var(--cyan)"
            }}>
              <GitBranch size={20} />
            </div>
            <div>
              <h2 style={{ fontSize: "18px", fontWeight: "950", color: "#fff", margin: 0 }}>
                {t("metricsPage.repoLinksTitle")}
              </h2>
              <p style={{ fontSize: "13px", color: "var(--text-muted)", margin: "2px 0 0" }}>
                {t("metricsPage.repoLinksSubtitle")}
              </p>
            </div>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "12px"
          }}>
            {repositories.map((repo) => (
              <a
                href={repo.repoUrl}
                target="_blank"
                rel="noreferrer"
                key={repo.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px 20px",
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid var(--line)",
                  color: "#fff",
                  fontWeight: "750",
                  fontSize: "14px",
                  textDecoration: "none",
                  transition: "all 0.25s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `rgba(38, 198, 218, 0.08)`;
                  e.currentTarget.style.borderColor = `rgba(38, 198, 218, 0.3)`;
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                  e.currentTarget.style.borderColor = "var(--line)";
                  e.currentTarget.style.transform = "none";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <GitBranch size={16} style={{ color: repo.color }} />
                  <span>{repo.name}</span>
                </div>
                <ExternalLink size={14} style={{ color: "var(--text-muted)" }} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Development Journey Timeline */}
        <motion.div
          variants={itemVariants}
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--line)",
            borderRadius: "24px",
            padding: "24px",
            boxShadow: "var(--shadow-card)",
            width: "100%",
            marginBottom: "20px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "24px", textAlign: "start" }}>
            <div style={{
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              background: "rgba(168, 85, 247, 0.1)",
              border: "1px solid rgba(168, 85, 247, 0.2)",
              display: "grid",
              placeItems: "center",
              color: "#a855f7"
            }}>
              <Layers3 size={20} />
            </div>
            <div>
              <h2 style={{ fontSize: "18px", fontWeight: "950", color: "#fff", margin: 0 }}>
                {t("metricsPage.journeyTitle")}
              </h2>
              <p style={{ fontSize: "13px", color: "var(--text-muted)", margin: "2px 0 0" }}>
                {t("metricsPage.journeySubtitle")}
              </p>
            </div>
          </div>

          {/* Stepped Progress timeline */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "14px",
            padding: "10px 0",
            position: "relative",
            marginBottom: "26px"
          }}>
            {workFlow.map((step, index) => (
              <div
                key={step}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                  flex: "1 1 120px",
                  textAlign: "center",
                  position: "relative"
                }}
              >
                <div style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--cyan), var(--blue))",
                  display: "grid",
                  placeItems: "center",
                  color: "#fff",
                  boxShadow: "0 4px 10px rgba(30, 136, 229, 0.25)",
                  zIndex: 2
                }}>
                  <span style={{ fontSize: "12px", fontWeight: "900" }}>{index + 1}</span>
                </div>
                <span style={{ fontSize: "13px", fontWeight: "700", color: "var(--text-soft)" }}>{step}</span>
              </div>
            ))}
          </div>

          {/* Impact Callout */}
          <div style={{
            padding: "20px",
            background: "rgba(34, 197, 94, 0.05)",
            border: "1px solid rgba(34, 197, 94, 0.15)",
            borderRadius: "18px",
            display: "flex",
            gap: "14px",
            alignItems: "center",
            textAlign: "start"
          }}>
            <Activity size={22} style={{ color: "var(--green)", flexShrink: 0 }} />
            <p style={{ fontSize: "14px", color: "var(--text-soft)", margin: 0, lineHeight: "1.6", fontWeight: "600" }}>
              {t("metricsPage.impactText")}
            </p>
            <Braces size={22} style={{ color: "var(--green)", flexShrink: 0, marginLeft: isRtl ? "0" : "auto", marginRight: isRtl ? "auto" : "0" }} />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default ProjectMetrics;