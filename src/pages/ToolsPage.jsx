import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { 
  Smartphone, Server, Database, Sparkles, Activity, PenTool, GitBranch, Layout, ChevronDown
} from "lucide-react";

function ToolsPage({ pageAnimation }) {
  const { t, i18n } = useTranslation();
  const [expandedTool, setExpandedTool] = useState(null);
  
  const isRtl = i18n.language === "ar";

  const toolDetails = {
    "Kotlin": {
      en: "Used for building the native Android mobile application frontend, ensuring smooth user experiences and high performance.",
      ar: "تُستخدم لبناء الواجهة الأمامية لتطبيق أندرويد الأصيل (Native)، مما يضمن تجربة مستخدم سلسة وأداءً عالياً."
    },
    "Spring Boot": {
      en: "Used to build the core backend framework, manage secure RESTful APIs, authentication endpoints, and business logic.",
      ar: "يُستخدم لبناء الإطار الأساسي للواجهات الخلفية (Backend)، وإدارة واجهات برمجة التطبيقات (RESTful APIs) الآمنة، ونقاط المصادقة، ومنطق العمل."
    },
    "RESTful API": {
      en: "Architectural style used to establish seamless, secure communication and data exchange between the Android app and the backend server.",
      ar: "النمط المعماري المستخدم لتأسيس اتصال سلس وآمن وتبادل البيانات بين تطبيق الأندرويد وخادم الواجهة الخلفية."
    },
    "Gemini API": {
      en: "Integrated to provide advanced AI-driven smart capabilities, automated content generation, or intelligent solutions within JoMap.",
      ar: "مدمج لتقديم قدرات ذكية متقدمة مدعومة بالذكاء الاصطناعي، أو توليد محتوى تلقائي، أو حلول ذكية داخل تطبيق JoMap."
    },
    "Neon": {
      en: "Relational database hosted serverless on Neon to securely store, model, and manage core application and user data.",
      ar: "قاعدة البيانات العلاقاتية المستضافة سحابياً على منصة Neon لتخزين ونمذجة وإدارة بيانات التطبيق والمستخدمين بشكل آمن."
    },
    "PostgreSQL": {
      en: "Relational database hosted serverless on Neon to securely store, model, and manage core application and user data.",
      ar: "قاعدة البيانات العلاقاتية المستضافة سحابياً على منصة Neon لتخزين ونمذجة وإدارة بيانات التطبيق والمستخدمين بشكل آمن."
    },
    "Firebase": {
      en: "Utilized for real-time cloud features, instant notifications, and cross-platform infrastructure support.",
      ar: "تُستخدم للميزات السحابية في الوقت الفعلي (Real-time)، والإشعارات الفورية، ودعم البنية التحتية للتطبيق."
    },
    "Postman": {
      en: "Used for rigorous API testing, endpoint validation, and debugging backend services during development.",
      ar: "يُستخدم لاختبار واجهات برمجة التطبيقات بدقة، والتحقق من صحة نقاط الاتصال (Endpoints)، وتصحيح أخطاء خدمات الواجهة الخلفية."
    },
    "Figma": {
      en: "Used for high-fidelity UI/UX design, wireframing, and mapping out user journeys prior to development.",
      ar: "يُستخدم لتصميم واجهات وتجربة المستخدم (UI/UX) عالية الدقة، وبناء المخططات الهيكلية (Wireframes)، ورسم رحلة المستخدم قبل التطوير."
    },
    "GitHub": {
      en: "Used for distributed version control, secure code hosting, and team collaboration.",
      ar: "يُستخدم للتحكم في النسخ البرمجية الموزعة، واستضافة الكود بشكل آمن، والتعاون بين أعضاء الفريق."
    },
    "Git": {
      en: "Used for distributed version control, secure code hosting, and team collaboration.",
      ar: "يُستخدم للتحكم في النسخ البرمجية الموزعة، واستضافة الكود بشكل آمن، والتعاون بين أعضاء الفريق."
    },
    "Jira": {
      en: "Utilized for agile project management, task tracking, and coordinating development sprints.",
      ar: "يُستخدم لإدارة المشروع بطريقة أجايل (Agile)، وتتبع المهام، وتنسيق مراحل التطوير (Sprints)."
    },
    "Android Studio & IntelliJ": {
      en: "Primary Integrated Development Environments (IDEs) used for code editing, compiling, and building the ecosystem.",
      ar: "بيئات التطوير المتكاملة الأساسية (IDEs) المستخدمة لكتابة الأكواد، وبرمجتها، وبناء النظام البيئي للمشروع."
    },
    "VS Code": {
      en: "Primary Integrated Development Environments (IDEs) used for code editing, compiling, and building the ecosystem.",
      ar: "بيئات التطوير المتكاملة الأساسية (IDEs) المستخدمة لكتابة الأكواد، وبرمجتها، وبناء النظام البيئي للمشروع."
    }
  };

  const toolGroups = [
    { category: "Mobile Development", icon: Smartphone, items: ["Kotlin", "Android Studio & IntelliJ"] },
    { category: "Backend & Frameworks", icon: Server, items: ["Spring Boot", "RESTful API"] },
    { category: "Databases & Cloud", icon: Database, items: ["Neon", "PostgreSQL", "Firebase"] },
    { category: "AI & External Services", icon: Sparkles, items: ["Gemini API"] },
    { category: "API Testing", icon: Activity, items: ["Postman"] },
    { category: "Design (UI/UX)", icon: PenTool, items: ["Figma"] },
    { category: "Version Control & Issue Tracking", icon: GitBranch, items: ["GitHub", "Git", "Jira"] },
    { category: "General Editors", icon: Layout, items: ["VS Code"] },
  ];

  return (
    <motion.section key="tools" className="page tools-page" {...pageAnimation}>
      <div className="page-header">
        <h2 className="page-title">{t("toolsPage.title")}</h2>
        <p className="page-subtitle">{t("toolsPage.subtitle")}</p>
      </div>

      <div className="build-content">
        <div className="phases-section">
          <div className="timeline">
            {toolGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <div className="timeline-item" key={index}>
                  <div className="timeline-icon">
                    <Icon size={22} />
                  </div>
                  <div className="timeline-content">
                    <h4 style={{ marginBottom: "16px", color: "var(--cyan)", borderBottom: "1px solid var(--line)", paddingBottom: "12px", textAlign: "start" }}>
                      {group.category}
                    </h4>
                    
                    <motion.div layout style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "flex-start" }}>
                      {group.items.map((item, idx) => {
                        const isExpanded = expandedTool === item;

                        return (
                          <motion.div 
                            layout
                            key={idx} 
                            onClick={() => setExpandedTool(isExpanded ? null : item)}
                            whileHover={!isExpanded ? { scale: 1.02 } : {}}
                            style={{ 
                              cursor: "pointer",
                              padding: isExpanded ? "16px" : "10px 16px", 
                              background: isExpanded 
                                ? "linear-gradient(135deg, rgba(var(--color-surface-variant-rgb), 0.9), rgba(var(--color-background-rgb), 0.95))"
                                : "linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.15), rgba(var(--color-secondary-rgb), 0.05))", 
                              border: "1px solid",
                              borderColor: isExpanded ? "rgba(var(--color-secondary-rgb), 0.4)" : "rgba(var(--color-primary-rgb), 0.2)",
                              borderRadius: "16px", 
                              color: "#e2e8f0",
                              transition: "border-color 0.3s ease, background 0.3s ease",
                              width: isExpanded ? "100%" : "auto",
                              flexShrink: 0,
                              boxShadow: isExpanded ? "0 10px 25px rgba(0, 0, 0, 0.2) inset, 0 4px 15px rgba(var(--color-secondary-rgb), 0.1)" : "none"
                            }}
                          >
                            <motion.div layout style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
                              <span style={{ fontSize: isExpanded ? "16px" : "14px", fontWeight: isExpanded ? "800" : "600", color: isExpanded ? "var(--cyan)" : "#e2e8f0" }}>
                                {item}
                              </span>
                              
                              <motion.div
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                style={{ display: "flex", color: isExpanded ? "var(--cyan)" : "var(--text-muted)" }}
                              >
                                <ChevronDown size={16} />
                              </motion.div>
                            </motion.div>

                            <AnimatePresence>
                              {isExpanded && toolDetails[item] && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                  animate={{ height: "auto", opacity: 1, marginTop: "12px" }}
                                  exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                  transition={{ duration: 0.35, ease: "easeInOut" }}
                                  style={{ overflow: "hidden" }}
                                >
                                  <div style={{
                                    padding: "14px",
                                    background: "rgba(255, 255, 255, 0.02)",
                                    borderRadius: "12px",
                                    border: "1px solid rgba(255, 255, 255, 0.03)",
                                  }}>
                                    <p style={{ 
                                      color: "var(--text-soft)", 
                                      fontSize: "15px", 
                                      lineHeight: "1.7", 
                                      margin: 0,
                                      textAlign: "start"
                                    }}>
                                      {toolDetails[item][isRtl ? 'ar' : 'en']}
                                    </p>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        );
                      })}
                    </motion.div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default ToolsPage;
