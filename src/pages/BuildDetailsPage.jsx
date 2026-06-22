import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { 
  Lightbulb, ClipboardList, PenTool, FileText,
  Server, Smartphone, TestTubeDiagonal,
  Monitor, Database, Globe, Layers, Users, Cpu,
  MapPin, Terminal, GitBranch, Calendar, Info,
  Workflow, Activity, ZoomIn
} from "lucide-react";

const phaseIcons = [Lightbulb, ClipboardList, PenTool, FileText, Server, Smartphone, TestTubeDiagonal];
const phaseColors = ["#1E88E5", "#26C6DA", "#a855f7", "#f59e0b", "#22c55e", "#EC407A", "#26A69A"];
const phaseKeys = ["phase1", "phase2", "phase3", "phase4", "phase5", "phase6", "phase7"];

const umlCategories = [
  {
    id: "class",
    labelEn: "Class Diagram",
    labelAr: "مخطط الفئات (Class)",
    items: [
      { id: "class", icon: Database, image: "/class_diagram.png", color: "#22c55e" }
    ]
  },
  {
    id: "sequence",
    labelEn: "Interaction Sequences",
    labelAr: "مخططات التتابع (Sequence)",
    items: [
      { id: "seq_search_location", icon: Workflow, image: "/seq_search_location.png", color: "#26C6DA" },
      { id: "seq_create_location", icon: Workflow, image: "/seq_create_location.png", color: "#1E88E5" },
      { id: "seq_submit_comment", icon: Workflow, image: "/seq_submit_comment.png", color: "#a855f7" },
      { id: "seq_post_interaction", icon: Workflow, image: "/seq_post_interaction.png", color: "#22c55e" },
      { id: "seq_register_activity", icon: Workflow, image: "/seq_register_activity.png", color: "#EC407A" }
    ]
  },
  {
    id: "state",
    labelEn: "State Lifecycles",
    labelAr: "مخططات الحالات (State)",
    items: [
      { id: "state_location_lifecycle", icon: Activity, image: "/state_location_lifecycle.png", color: "#1E88E5" },
      { id: "state_comment_lifecycle", icon: Activity, image: "/state_comment_lifecycle.png", color: "#26C6DA" },
      { id: "state_post_lifecycle", icon: Activity, image: "/state_post_lifecycle.png", color: "#a855f7" },
      { id: "state_activity_lifecycle", icon: Activity, image: "/state_activity_lifecycle.png", color: "#f59e0b" },
      { id: "state_registration_lifecycle", icon: Activity, image: "/state_registration_lifecycle.png", color: "#22c55e" }
    ]
  }
];

function AnimatedCounter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const numericTarget = parseInt(target);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
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
  const [activeTab, setActiveTab] = useState("timeline");

  // UML sub-states
  const [selectedCategory, setSelectedCategory] = useState("class");
  const [selectedDiagram, setSelectedDiagram] = useState("class");
  const [isZoomed, setIsZoomed] = useState(false);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    const cat = umlCategories.find(c => c.id === catId);
    if (cat && cat.items.length > 0) {
      setSelectedDiagram(cat.items[0].id);
    }
    setIsZoomed(false);
  };

  const currentCategory = umlCategories.find(c => c.id === selectedCategory) || umlCategories[0];
  const allDiagrams = umlCategories.flatMap(c => c.items);
  const activeUmlDiagram = allDiagrams.find(d => d.id === selectedDiagram) || allDiagrams[0];

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

  const stats = [
    { icon: Monitor, value: t("buildPage.stats.screens"), label: t("buildPage.stats.screensLabel"), color: "#1E88E5" },
    { icon: Globe, value: t("buildPage.stats.endpoints"), label: t("buildPage.stats.endpointsLabel"), color: "#26C6DA" },
    { icon: Database, value: t("buildPage.stats.entities"), label: t("buildPage.stats.entitiesLabel"), color: "#a855f7" },
    { icon: FileText, value: t("buildPage.stats.pages"), label: t("buildPage.stats.pagesLabel"), color: "#f59e0b" },
    { icon: Layers, value: t("buildPage.stats.integrations"), label: t("buildPage.stats.integrationsLabel"), color: "#22c55e" },
    { icon: Users, value: t("buildPage.stats.roles"), label: t("buildPage.stats.rolesLabel"), color: "#EC407A" },
  ];

  const softwareReqs = [
    { key: "os", icon: Monitor, color: "#1E88E5" },
    { key: "ide", icon: Terminal, color: "#26C6DA" },
    { key: "lang", icon: Globe, color: "#a855f7" },
    { key: "db", icon: Database, color: "#f59e0b" },
    { key: "apis", icon: Layers, color: "#22c55e" },
    { key: "vc", icon: GitBranch, color: "#EC407A" },
    { key: "design", icon: PenTool, color: "#AB47BC" },
    { key: "testing", icon: TestTubeDiagonal, color: "#26A69A" },
    { key: "pm", icon: ClipboardList, color: "#D4E157" },
    { key: "ai", icon: Cpu, color: "#26C6DA" }
  ];

  const hardwareReqs = [
    { key: "dev", icon: Monitor, color: "#1E88E5" },
    { key: "mobile", icon: Smartphone, color: "#26C6DA" },
    { key: "net", icon: Globe, color: "#a855f7" }
  ];

  const techStackItems = [
    { key: "frontend", icon: Smartphone, color: "#1E88E5" },
    { key: "backend", icon: Server, color: "#22c55e" },
    { key: "maps", icon: MapPin, color: "#f59e0b" },
    { key: "tools", icon: Terminal, color: "#a855f7" },
    { key: "design", icon: PenTool, color: "#EC407A" },
    { key: "vc", icon: GitBranch, color: "#26C6DA" },
    { key: "platform", icon: Globe, color: "#AB47BC" }
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
          gap: "24px",
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
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "var(--text-soft)", margin: 0 }}>
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
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
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

        {/* Tab Selection */}
        <motion.div variants={itemVariants} style={{ marginTop: "10px" }}>
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid var(--line)",
            borderRadius: "18px",
            padding: "6px",
            maxWidth: "800px",
            margin: "0 auto 24px",
            width: "100%"
          }}>
            {["timeline", "requirements", "techStack", "uml"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  position: "relative",
                  padding: "10px 16px",
                  borderRadius: "14px",
                  border: "none",
                  background: "transparent",
                  color: activeTab === tab ? "#fff" : "var(--text-soft)",
                  fontSize: "13.5px",
                  fontWeight: "700",
                  cursor: "pointer",
                  outline: "none",
                  flex: 1,
                  transition: "color 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px"
                }}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabPill"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(135deg, var(--cyan), var(--blue))",
                      borderRadius: "14px",
                      zIndex: 0
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span style={{ position: "relative", zIndex: 1 }}>
                  {t(`buildPage.tabs.${tab}`)}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content rendering */}
        <div style={{ minHeight: "350px", position: "relative", width: "100%" }}>
          <AnimatePresence mode="wait">
            {activeTab === "timeline" && (
              <motion.div
                key="timeline"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                style={{ position: "relative" }}
              >
                {/* Vertical line */}
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "100%" }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
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

                    return (
                      <div
                        key={key}
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
                          whileHover={{ y: -4, boxShadow: `0 12px 30px ${color}18` }}
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
                          <div style={{
                            position: "absolute",
                            inset: "-1px",
                            background: `linear-gradient(120deg, transparent, ${color}08, transparent)`,
                            pointerEvents: "none"
                          }} />

                          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px", flexWrap: "wrap" }}>
                            <span style={{
                              fontSize: "12px",
                              fontWeight: "800",
                              color: color,
                              background: `${color}15`,
                              border: `1px solid ${color}30`,
                              padding: "4px 14px",
                              borderRadius: "999px",
                              whiteSpace: "nowrap",
                              display: "flex",
                              alignItems: "center",
                              gap: "6px"
                            }}>
                              <Calendar size={12} />
                              {t(`buildPage.phases.${key}.tag`)}
                            </span>
                          </div>

                          <h4 style={{
                            fontSize: "18px",
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
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {activeTab === "requirements" && (
              <motion.div
                key="requirements"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "24px"
                }}
              >
                {/* Software Requirements */}
                <div style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--line)",
                  borderRadius: "24px",
                  padding: "24px",
                  boxShadow: "var(--shadow-card)"
                }}>
                  <h3 style={{
                    fontSize: "20px",
                    fontWeight: "950",
                    color: "var(--cyan)",
                    marginBottom: "18px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    textAlign: "start"
                  }}>
                    <Cpu size={20} />
                    {t("buildPage.requirements.softwareTitle")}
                  </h3>

                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {softwareReqs.map((req) => (
                      <div 
                        key={req.key}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "14px",
                          padding: "10px 14px",
                          background: "rgba(255, 255, 255, 0.02)",
                          border: "1px solid rgba(255, 255, 255, 0.04)",
                          borderRadius: "14px"
                        }}
                      >
                        <div style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "10px",
                          background: `${req.color}22`,
                          display: "grid",
                          placeItems: "center",
                          flexShrink: 0
                        }}>
                          <req.icon size={16} style={{ color: req.color }} />
                        </div>
                        <div style={{ textAlign: "start" }}>
                          <div style={{ fontSize: "13px", fontWeight: "700", color: "var(--text-muted)" }}>
                            {t(`buildPage.requirements.software.${req.key}.name`)}
                          </div>
                          <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#e2e8f0", marginTop: "2px" }}>
                            {t(`buildPage.requirements.software.${req.key}.desc`)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hardware Requirements */}
                <div style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--line)",
                  borderRadius: "24px",
                  padding: "24px",
                  boxShadow: "var(--shadow-card)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}>
                  <div>
                    <h3 style={{
                      fontSize: "20px",
                      fontWeight: "950",
                      color: "var(--green)",
                      marginBottom: "18px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      textAlign: "start"
                    }}>
                      <HardDrive size={20} />
                      {t("buildPage.requirements.hardwareTitle")}
                    </h3>

                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      {hardwareReqs.map((req) => (
                        <div 
                          key={req.key}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "14px",
                            padding: "12px 14px",
                            background: "rgba(255, 255, 255, 0.02)",
                            border: "1px solid rgba(255, 255, 255, 0.04)",
                            borderRadius: "14px"
                          }}
                        >
                          <div style={{
                            width: "36px",
                            height: "36px",
                            borderRadius: "10px",
                            background: `${req.color}22`,
                            display: "grid",
                            placeItems: "center",
                            flexShrink: 0
                          }}>
                            <req.icon size={16} style={{ color: req.color }} />
                          </div>
                          <div style={{ textAlign: "start" }}>
                            <div style={{ fontSize: "13px", fontWeight: "700", color: "var(--text-muted)" }}>
                              {t(`buildPage.requirements.hardware.${req.key}.name`)}
                            </div>
                            <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#e2e8f0", marginTop: "2px", lineHeight: "1.4" }}>
                              {t(`buildPage.requirements.hardware.${req.key}.desc`)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{
                    marginTop: "24px",
                    padding: "16px",
                    background: "rgba(34, 197, 94, 0.05)",
                    border: "1px solid rgba(34, 197, 94, 0.15)",
                    borderRadius: "16px",
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                    textAlign: "start"
                  }}>
                    <Info size={16} style={{ color: "var(--green)", flexShrink: 0, marginTop: "2px" }} />
                    <p style={{ fontSize: "13.5px", color: "var(--text-soft)", margin: 0, lineHeight: "1.6" }}>
                      {isRtl 
                        ? "تلبي هذه المواصفات متطلبات المحاكاة والتطوير دون التسبب في بطء أو تعليق بالنظام أثناء عمليات المحاكاة."
                        : "These requirements satisfy simulation and development needs without causing system lag or crash during testing runs."}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "techStack" && (
              <motion.div
                key="techStack"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "16px"
                }}
              >
                {techStackItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.key}
                      whileHover={{ y: -5, scale: 1.02 }}
                      style={{
                        background: "var(--bg-card)",
                        border: "1px solid var(--line)",
                        borderRadius: "20px",
                        padding: "20px",
                        textAlign: "start",
                        boxShadow: "var(--shadow-card)",
                        display: "flex",
                        gap: "16px",
                        alignItems: "flex-start"
                      }}
                    >
                      <div style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "12px",
                        background: `${item.color}15`,
                        border: `1px solid ${item.color}30`,
                        display: "grid",
                        placeItems: "center",
                        flexShrink: 0
                      }}>
                        <Icon size={20} style={{ color: item.color }} />
                      </div>
                      <div>
                        <h4 style={{
                          fontSize: "16px",
                          fontWeight: "900",
                          color: "#fff",
                          margin: "0 0 6px 0"
                        }}>
                          {t(`buildPage.techStack.${item.key}.title`)}
                        </h4>
                        <p style={{
                          fontSize: "14px",
                          color: "var(--text-soft)",
                          margin: 0,
                          lineHeight: "1.5",
                          fontWeight: "600"
                        }}>
                          {t(`buildPage.techStack.${item.key}.desc`)}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}

            {activeTab === "uml" && (
              <motion.div
                key="uml"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  width: "100%"
                }}
              >
                {/* UML Category Selection */}
                <div style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid var(--line)",
                  borderRadius: "16px",
                  padding: "5px",
                  maxWidth: "600px",
                  margin: "0 auto",
                  width: "100%"
                }}>
                  {umlCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      style={{
                        position: "relative",
                        padding: "8px 14px",
                        borderRadius: "12px",
                        border: "none",
                        background: "transparent",
                        color: selectedCategory === cat.id ? "#fff" : "var(--text-soft)",
                        fontSize: "13px",
                        fontWeight: "700",
                        cursor: "pointer",
                        outline: "none",
                        flex: 1,
                        transition: "color 0.3s ease",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      {selectedCategory === cat.id && (
                        <motion.div
                          layoutId="activeCategoryPill"
                          style={{
                            position: "absolute",
                            inset: 0,
                            background: "rgba(255, 255, 255, 0.08)",
                            border: "1px solid rgba(255, 255, 255, 0.12)",
                            borderRadius: "12px",
                            zIndex: 0
                          }}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span style={{ position: "relative", zIndex: 1 }}>
                        {isRtl ? cat.labelAr : cat.labelEn}
                      </span>
                    </button>
                  ))}
                </div>

                {/* UML Diagrams Grid */}
                {currentCategory.items.length > 1 && (
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                    gap: "8px"
                  }}>
                    {currentCategory.items.map((d) => {
                      const Icon = d.icon;
                      const isSelected = selectedDiagram === d.id;
                      return (
                        <motion.button
                          key={d.id}
                          onClick={() => {
                            setSelectedDiagram(d.id);
                            setIsZoomed(false);
                          }}
                          whileHover={{ y: -2, scale: 1.02 }}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "6px",
                            padding: "10px 6px",
                            borderRadius: "14px",
                            border: "1px solid",
                            borderColor: isSelected ? d.color : "var(--line)",
                            background: isSelected ? `${d.color}12` : "rgba(255, 255, 255, 0.01)",
                            color: isSelected ? "#fff" : "var(--text-soft)",
                            cursor: "pointer",
                            transition: "all 0.25s ease"
                          }}
                        >
                          <div style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "8px",
                            background: isSelected ? d.color : "rgba(255, 255, 255, 0.02)",
                            display: "grid",
                            placeItems: "center",
                            color: isSelected ? "#fff" : d.color
                          }}>
                            <Icon size={16} />
                          </div>
                          <span style={{ fontSize: "11px", fontWeight: "700", textAlign: "center", lineHeight: "1.25" }}>
                            {t(`umlPage.diagrams.${d.id}.title`)}
                          </span>
                        </motion.button>
                      );
                    })}
                  </div>
                )}

                {/* Diagram Image Box (Full Width for Large View) */}
                <div style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--line)",
                  borderRadius: "24px",
                  padding: "16px",
                  boxShadow: "var(--shadow-card)",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  overflow: "hidden",
                  width: "100%"
                }}>
                  <div style={{
                    position: "absolute",
                    top: "16px",
                    [isRtl ? "left" : "right"]: "16px",
                    zIndex: 10
                  }}>
                    <button
                      onClick={() => setIsZoomed(!isZoomed)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "8px 14px",
                        borderRadius: "12px",
                        border: "1px solid rgba(255,255,255,0.15)",
                        background: "rgba(0,0,0,0.6)",
                        color: "#fff",
                        cursor: "pointer",
                        fontSize: "12px",
                        fontWeight: "750",
                        backdropFilter: "blur(5px)",
                        transition: "all 0.2s ease"
                      }}
                    >
                      <ZoomIn size={14} />
                      {isZoomed 
                        ? (isRtl ? "تصغير الصورة" : "Fit View") 
                        : (isRtl ? "تكبير الصورة" : "Zoom View")}
                    </button>
                  </div>

                  <div style={{
                    width: "100%",
                    height: isZoomed ? "auto" : "550px",
                    maxHeight: isZoomed ? "none" : "550px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "auto",
                    borderRadius: "16px",
                    background: "rgba(255, 255, 255, 0.01)",
                    border: "1px solid rgba(255, 255, 255, 0.02)",
                    padding: "10px",
                    transition: "all 0.3s ease"
                  }}>
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeUmlDiagram.id}
                        src={activeUmlDiagram.image}
                        alt={t(`umlPage.diagrams.${activeUmlDiagram.id}.title`)}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        style={{
                          maxWidth: isZoomed ? "180%" : "100%",
                          maxHeight: isZoomed ? "none" : "100%",
                          width: isZoomed ? "auto" : "100%",
                          height: isZoomed ? "auto" : "100%",
                          objectFit: "contain",
                          borderRadius: "8px",
                          boxShadow: "0 8px 32px rgba(0,0,0,0.3)"
                        }}
                      />
                    </AnimatePresence>
                  </div>
                </div>

                {/* Diagram Explanation Box (Full Width below Image) */}
                <div style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--line)",
                  borderRadius: "24px",
                  padding: "24px",
                  boxShadow: "var(--shadow-card)",
                  textAlign: "start",
                  width: "100%"
                }}>
                  <div style={{
                    fontSize: "11px",
                    fontWeight: "800",
                    color: activeUmlDiagram.color,
                    background: `${activeUmlDiagram.color}15`,
                    border: `1px solid ${activeUmlDiagram.color}30`,
                    padding: "4px 12px",
                    borderRadius: "999px",
                    width: "fit-content",
                    marginBottom: "14px",
                    textTransform: "uppercase"
                  }}>
                    {isRtl ? "شرح المخطط الهندسي" : "Diagram Engineering Explanation"}
                  </div>

                  <h3 style={{
                    fontSize: "19px",
                    fontWeight: "950",
                    color: "var(--text-main)",
                    marginBottom: "12px",
                    lineHeight: 1.3
                  }}>
                    {t(`umlPage.diagrams.${activeUmlDiagram.id}.title`)}
                  </h3>

                  <p style={{
                    fontSize: "15px",
                    lineHeight: "1.8",
                    color: "var(--text-soft)",
                    margin: 0
                  }}>
                    {t(`umlPage.diagrams.${activeUmlDiagram.id}.explain`)}
                  </p>

                  <div style={{
                    marginTop: "20px",
                    padding: "14px",
                    background: "rgba(255, 255, 255, 0.015)",
                    border: "1px solid rgba(255, 255, 255, 0.03)",
                    borderRadius: "14px",
                    display: "flex",
                    gap: "8px",
                    alignItems: "flex-start"
                  }}>
                    <Info size={16} style={{ color: activeUmlDiagram.color, flexShrink: 0, marginTop: "2px" }} />
                    <p style={{ fontSize: "12.5px", color: "var(--text-muted)", margin: 0, lineHeight: "1.5" }}>
                      {isRtl 
                        ? "تم توفير هذا المخطط الفني مباشرة من وثيقة مشروع التخرج المعتمدة لـ JO MAP لضمان تطابق البيانات الفني للمنصة."
                        : "This technical diagram has been provided directly from the approved JO MAP graduation project documentation to ensure exact mapping with the software implementation."}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default BuildDetailsPage;
