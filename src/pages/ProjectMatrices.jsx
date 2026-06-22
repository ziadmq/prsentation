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
      {/* Decorative background orbits */}
      <div className="metrics-orbit orbit-one"></div>
      <div className="metrics-orbit orbit-two"></div>

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
        <div className="metrics-total-grid">
          {totals.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="metrics-total-card"
                style={{ "--delay": `${index * 0.1}s`, cursor: "default" }}
                key={item.labelKey}
              >
                <div className="metrics-total-icon" style={{
                  background: `linear-gradient(135deg, ${item.color}, ${item.color}bb)`,
                  boxShadow: `0 8px 20px ${item.color}33`,
                  margin: "0 auto 12px",
                  color: "#fff"
                }}>
                  <Icon size={20} />
                </div>
                <h3>
                  <AnimatedCounter target={item.value} />
                </h3>
                <p>{t(item.labelKey)}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Repositories Showcase Grid */}
        <div className="repo-showcase-grid">
          {repositories.map((repo, index) => {
            const Icon = repo.icon;
            return (
              <motion.article
                variants={itemVariants}
                className="repo-showcase-card"
                style={{ "--delay": `${index * 0.15}s` }}
                key={repo.name}
              >
                {/* Glowing light effect behind content */}
                <div className="repo-card-glow" style={{
                  background: `radial-gradient(circle, ${repo.color}25 0%, transparent 70%)`
                }} />

                {/* Repo Card Header */}
                <div className="repo-card-head">
                  <div className="repo-icon-box" style={{
                    background: `linear-gradient(135deg, ${repo.color}, ${repo.color}bb)`,
                    boxShadow: `0 8px 20px ${repo.color}33`,
                    color: "#fff"
                  }}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <h2>{repo.name}</h2>
                    <p>{repo.layer}</p>
                  </div>
                  <span className="repo-number" style={{
                    marginLeft: isRtl ? "0" : "auto",
                    marginRight: isRtl ? "auto" : "0",
                    fontSize: "28px",
                    fontWeight: "950",
                    color: "rgba(255,255,255,0.06)",
                    userSelect: "none"
                  }}>0{index + 1}</span>
                </div>

                {/* Inner stats boxes */}
                <div className="repo-stats-grid">
                  {repo.stats.map((stat) => (
                    <div
                      key={stat.labelKey || stat.label}
                      className="repo-stat-box"
                    >
                      <strong>
                        <AnimatedCounter target={stat.value} />
                      </strong>
                      <span>
                        {stat.labelKey ? t(stat.labelKey) : stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Progress bar info */}
                <div className="repo-progress-area">
                  <div className="repo-progress-info">
                    <span>{t("metricsPage.completionRate")}</span>
                    <span style={{ color: repo.color }}>{repo.completion}%</span>
                  </div>
                  <div className="repo-progress-track">
                    <motion.div
                      className="repo-progress-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${repo.completion}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      style={{
                        background: `linear-gradient(90deg, ${repo.color}, ${repo.color}aa)`,
                        boxShadow: `0 0 16px ${repo.color}55`,
                        width: `${repo.completion}%`
                      }}
                    />
                  </div>
                </div>

                {/* Link button */}
                <a
                  href={repo.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="repo-link-btn"
                >
                  <GitBranch size={16} />
                  {t("metricsPage.openRepo")}
                  <ExternalLink size={14} />
                </a>
              </motion.article>
            );
          })}
        </div>

        {/* Repository Links Panel */}
        <motion.div
          variants={itemVariants}
          className="repo-access-panel"
        >
          <div className="repo-access-title">
            <div className="repo-icon-box" style={{
              background: "rgba(38, 198, 218, 0.1)",
              border: "1px solid rgba(38, 198, 218, 0.2)",
              color: "var(--cyan)",
              boxShadow: "none"
            }}>
              <GitBranch size={22} />
            </div>
            <div>
              <h2>{t("metricsPage.repoLinksTitle")}</h2>
              <p style={{ margin: "2px 0 0" }}>{t("metricsPage.repoLinksSubtitle")}</p>
            </div>
          </div>

          <div className="repo-link-list">
            {repositories.map((repo) => (
              <a
                href={repo.repoUrl}
                target="_blank"
                rel="noreferrer"
                key={repo.name}
                className="repo-mini-link"
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <GitBranch size={16} style={{ color: repo.color }} />
                  <span>{repo.name}</span>
                </div>
                <ExternalLink size={14} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Development Journey Timeline */}
        <motion.div
          variants={itemVariants}
          className="metrics-bottom-panel"
        >
          <div className="metrics-bottom-title">
            <div className="repo-icon-box" style={{
              background: "rgba(168, 85, 247, 0.1)",
              border: "1px solid rgba(168, 85, 247, 0.2)",
              color: "#a855f7",
              boxShadow: "none"
            }}>
              <Layers3 size={22} />
            </div>
            <div>
              <h2>{t("metricsPage.journeyTitle")}</h2>
              <p style={{ margin: "2px 0 0" }}>{t("metricsPage.journeySubtitle")}</p>
            </div>
          </div>

          {/* Stepped Progress timeline */}
          <div className="journey-line">
            {workFlow.map((step, index) => (
              <div
                key={step}
                className="journey-step"
                style={{ "--delay": `${index * 0.08}s` }}
              >
                <div className="repo-icon-box journey-dot" style={{
                  background: "linear-gradient(135deg, var(--cyan), var(--blue))",
                  color: "#fff",
                  boxShadow: "0 4px 10px rgba(30, 136, 229, 0.25)"
                }}>
                  <span style={{ fontSize: "13px", fontWeight: "900" }}>{index + 1}</span>
                </div>
                <span>{step}</span>
              </div>
            ))}
          </div>

          {/* Impact Callout */}
          <div className="impact-card">
            <Activity size={22} style={{ color: "var(--green)", flexShrink: 0 }} />
            <p style={{ margin: 0 }}>
              {t("metricsPage.impactText")}
            </p>
            <Braces size={22} style={{ color: "var(--green)", flexShrink: 0 }} />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default ProjectMetrics;