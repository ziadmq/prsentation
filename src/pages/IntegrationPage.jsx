import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { 
  Building2, 
  ShieldCheck, 
  Users, 
  GitMerge, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2, 
  XCircle, 
  AlertCircle,
  Calendar,
  Smartphone,
  MapPin,
  Tag
} from "lucide-react";

function IntegrationPage({ pageAnimation }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
  const [activeTab, setActiveTab] = useState("location"); // "location" or "event"

  // Animation variants
  const tabContentVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.3 } }
  };

  const flows = {
    location: {
      title: isRtl ? "دورة حياة وتوثيق المنشأة" : "Location Documentation Lifecycle",
      steps: [
        {
          role: "owner",
          roleLabel: isRtl ? "صاحب العمل" : "Business Owner",
          icon: Building2,
          color: "#26C6DA",
          title: isRtl ? "1. تقديم طلب التسجيل" : "1. Submit Registration",
          desc: isRtl 
            ? "يقوم صاحب العمل بإنشاء حساب وإضافة كامل بيانات المنشأة وموقعها الجغرافي." 
            : "The owner creates an account, fills in the location details and map coordinates.",
          status: { label: isRtl ? "قيد الانتظار (PENDING)" : "Pending Review", emoji: "⏳", type: "pending" }
        },
        {
          role: "admin",
          roleLabel: isRtl ? "المشرف (Admin)" : "System Admin",
          icon: ShieldCheck,
          color: "#1E88E5",
          title: isRtl ? "2. التدقيق والمراجعة" : "2. Audit & Review",
          desc: isRtl 
            ? "يقوم المشرف بفحص التراخيص والوثائق المرفقة لضمان مصداقية البيانات." 
            : "The admin verifies documentation and licenses for safety and trust.",
          isDecision: true
        },
        {
          role: "result-approved",
          roleLabel: isRtl ? "القبول والنشر" : "Approved & Published",
          icon: CheckCircle2,
          color: "#22c55e",
          title: isRtl ? "3أ. قبول الطلب (APPROVED)" : "3a. Accept Request",
          desc: isRtl 
            ? "تُنشر المنشأة فوراً على خريطة المستخدمين، وتُفعّل لوحة التحكم للمالك ليعلن عن عروضه." 
            : "Location is immediately visible on users' maps, and the owner dashboard is activated."
        },
        {
          role: "result-rejected",
          roleLabel: isRtl ? "الرفض وإعادة المحاولة" : "Rejected & Review",
          icon: XCircle,
          color: "#ef4444",
          title: isRtl ? "3ب. رفض الطلب (REJECTED)" : "3b. Reject Request",
          desc: isRtl 
            ? "يتم إرجاع الطلب للمالك مع توضيح سبب الرفض عبر الإشعارات ليتسنى له التعديل وإعادة التقديم." 
            : "The request goes back to the owner with notes explaining the reason, for modification."
        }
      ]
    },
    event: {
      title: isRtl ? "تفاعل الفعاليات والتذاكر" : "Event & Booking Lifecycle",
      steps: [
        {
          role: "owner",
          roleLabel: isRtl ? "صاحب العمل" : "Business Owner",
          icon: Calendar,
          color: "#26C6DA",
          title: isRtl ? "1. إنشاء الفعالية" : "1. Create Event",
          desc: isRtl 
            ? "يطلق صاحب العمل فعالية جديدة (موعد، مكان، ميزانية، مقاعد متوفرة) وتظهر لجميع المستخدمين." 
            : "The owner creates a new event specifying date, capacity, and price.",
        },
        {
          role: "user",
          roleLabel: isRtl ? "المستخدم المستكشف" : "Regular User",
          icon: Users,
          color: "#A78BFA",
          title: isRtl ? "2. طلب التسجيل (الحجز)" : "2. Request Booking",
          desc: isRtl 
            ? "يقوم المستخدم بالضغط على زر حجز مقعد، فيقوم النظام بإنشاء طلب حجز قيد الانتظار." 
            : "The user clicks book seat, and the system creates a pending ticket.",
          status: { label: isRtl ? "قيد الانتظار (PENDING)" : "Pending Approval", emoji: "⏳", type: "pending" }
        },
        {
          role: "owner-review",
          roleLabel: isRtl ? "صاحب العمل" : "Business Owner",
          icon: Building2,
          color: "#26C6DA",
          title: isRtl ? "3. معالجة الطلبات" : "3. Process Requests",
          desc: isRtl 
            ? "يقوم منظم الفعالية إما بقبول الطلب أو رفضه حسب الطاقة الاستيعابية والبيانات." 
            : "The organizer approves or rejects requests based on capacity limits.",
          isDecision: true
        },
        {
          role: "state-flow",
          roleLabel: isRtl ? "الحالات بعد المراجعة" : "Post-Review Outcomes",
          icon: Smartphone,
          color: "#E0E0E0",
          title: isRtl ? "4. حالات الحجز وتغييرها" : "4. Ticket States & Transitions",
          states: [
            { label: isRtl ? "مقبول (APPROVED)" : "Approved", emoji: "✅", color: "rgba(34, 197, 94, 0.12)", border: "rgba(34, 197, 94, 0.3)", text: "var(--green)", desc: isRtl ? "تم تأكيد الحجز بنجاح" : "Booking confirmed" },
            { label: isRtl ? "مرفوض (REJECTED)" : "Rejected", emoji: "❌", color: "rgba(239, 68, 68, 0.12)", border: "rgba(239, 68, 68, 0.3)", text: "#ef4444", desc: isRtl ? "تم رفض الطلب لعدم توفر شواغر" : "No seats left" },
            { label: isRtl ? "ملغى (CANCELLED)" : "Cancelled", emoji: "🚫", color: "rgba(156, 163, 175, 0.12)", border: "rgba(156, 163, 175, 0.3)", text: "#9ca3af", desc: isRtl ? "أُلغي من قبل المنظم بعد قبوله" : "Cancelled by organizer" },
            { label: isRtl ? "منسحب (WITHDRAWN)" : "Withdrawn", emoji: "↩️", color: "rgba(99, 102, 241, 0.12)", border: "rgba(99, 102, 241, 0.3)", text: "#6366f1", desc: isRtl ? "انسحب المستخدم لإخلاء المقعد" : "User cancelled reservation" }
          ]
        }
      ]
    }
  };

  return (
    <motion.section key="integration" className="page integration-page" {...pageAnimation}>
      <div className="page-badge">
        <GitMerge size={18} />
        {t("menu.integration")}
      </div>

      <h1 className="main-title">{isRtl ? "تكامل الأدوار وتدفق العمليات" : "Role Integration & Workflows"}</h1>
      <p className="main-subtitle">
        {isRtl 
          ? "توضيح لكيفية تفاعل المستخدم وصاحب المنشأة والمشرف (Admin) ودورة حياة الطلبات والبيانات بين الأدوار الثلاثة."
          : "Illustrating how the Explorer, Business Owner, and System Admin interact to run the platform's core workflows."}
      </p>

      {/* Navigation Tabs */}
      <div className="tech-tabs" style={{ marginBottom: "32px", display: "flex", justifyContent: "center", gap: "12px" }}>
        <button
          className={activeTab === "location" ? "tech-tab active" : "tech-tab"}
          onClick={() => setActiveTab("location")}
        >
          <Building2 size={16} />
          {isRtl ? "دورة حياة المنشأة" : "Location Flow"}
        </button>
        <button
          className={activeTab === "event" ? "tech-tab active" : "tech-tab"}
          onClick={() => setActiveTab("event")}
        >
          <Calendar size={16} />
          {isRtl ? "دورة حياة الفعاليات" : "Event Flow"}
        </button>
      </div>

      {/* Tab Contents */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={tabContentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="integration-container"
          style={{ width: "100%", maxWidth: "900px", margin: "0 auto", textAlign: "right" }}
        >
          <h2 style={{ color: "var(--color-secondary)", marginBottom: "24px", textAlign: "center" }}>
            {flows[activeTab].title}
          </h2>

          {activeTab === "location" ? (
            /* Location Documentation flow visualization */
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", position: "relative", paddingRight: isRtl ? "24px" : "0", paddingLeft: isRtl ? "0" : "24px" }}>
              <div 
                style={{ 
                  position: "absolute", 
                  top: "30px", 
                  bottom: "30px", 
                  right: isRtl ? "40px" : "auto", 
                  left: isRtl ? "auto" : "40px", 
                  width: "2px", 
                  background: "linear-gradient(to bottom, var(--color-secondary), var(--color-primary), rgba(255,255,255,0.1))",
                  zIndex: 0 
                }} 
              />

              {/* Step 1: Owner Submission */}
              <div style={{ display: "flex", gap: "16px", zIndex: 1, alignItems: "flex-start" }}>
                <div style={{ 
                  width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "var(--color-surface)", 
                  border: "2px solid #26C6DA", display: "flex", alignItems: "center", justifyContent: "center", color: "#26C6DA", flexShrink: 0
                }}>
                  <Building2 size={18} />
                </div>
                <div className="roadmap-card" style={{ flex: 1, margin: 0 }}>
                  <span style={{ color: "#26C6DA" }}>{isRtl ? "صاحب العمل" : "Business Owner"}</span>
                  <h3 style={{ margin: "8px 0" }}>{flows.location.steps[0].title}</h3>
                  <p style={{ opacity: 0.85 }}>{flows.location.steps[0].desc}</p>
                  <div style={{ display: "flex", gap: "6px", marginTop: "12px" }}>
                    <div style={{
                      display: "flex", alignItems: "center", gap: "6px", padding: "4px 10px", borderRadius: "6px",
                      backgroundColor: "rgba(38, 198, 218, 0.12)", border: "1px solid rgba(38, 198, 218, 0.3)", color: "var(--color-secondary)", fontSize: "0.78rem", fontWeight: 600
                    }}>
                      <span>⏳</span>
                      <span>{flows.location.steps[0].status.label}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Admin Audit */}
              <div style={{ display: "flex", gap: "16px", zIndex: 1, alignItems: "flex-start" }}>
                <div style={{ 
                  width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "var(--color-surface)", 
                  border: "2px solid #1E88E5", display: "flex", alignItems: "center", justifyContent: "center", color: "#1E88E5", flexShrink: 0
                }}>
                  <ShieldCheck size={18} />
                </div>
                <div className="roadmap-card" style={{ flex: 1, margin: 0, borderLeft: "4px solid #1E88E5" }}>
                  <span style={{ color: "#1E88E5" }}>{isRtl ? "المشرف (Admin)" : "System Admin"}</span>
                  <h3 style={{ margin: "8px 0" }}>{flows.location.steps[1].title}</h3>
                  <p style={{ opacity: 0.85 }}>{flows.location.steps[1].desc}</p>
                </div>
              </div>

              {/* Step 3: Decisions */}
              <div style={{ display: "flex", gap: "24px", width: "100%", zIndex: 1, marginTop: "8px" }}>
                <div style={{ width: "36px", flexShrink: 0 }} />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", width: "100%" }}>
                  {/* Approved Branch */}
                  <div className="roadmap-card" style={{ margin: 0, borderTop: "4px solid #22c55e", backgroundColor: "rgba(34, 197, 94, 0.05)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--green)" }}>
                      <CheckCircle2 size={20} />
                      <h4 style={{ margin: 0 }}>{isRtl ? "في حالة القبول" : "If Approved"}</h4>
                    </div>
                    <h5 style={{ margin: "8px 0", color: "var(--text-main)" }}>{flows.location.steps[2].title}</h5>
                    <p style={{ fontSize: "0.85rem", opacity: 0.85 }}>{flows.location.steps[2].desc}</p>
                  </div>

                  {/* Rejected Branch */}
                  <div className="roadmap-card" style={{ margin: 0, borderTop: "4px solid #ef4444", backgroundColor: "rgba(239, 68, 68, 0.05)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#ef4444" }}>
                      <XCircle size={20} />
                      <h4 style={{ margin: 0 }}>{isRtl ? "في حالة الرفض" : "If Rejected"}</h4>
                    </div>
                    <h5 style={{ margin: "8px 0", color: "var(--text-main)" }}>{flows.location.steps[3].title}</h5>
                    <p style={{ fontSize: "0.85rem", opacity: 0.85 }}>{flows.location.steps[3].desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Events lifecycle visual flow */
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", position: "relative", paddingRight: isRtl ? "24px" : "0", paddingLeft: isRtl ? "0" : "24px" }}>
              <div 
                style={{ 
                  position: "absolute", 
                  top: "30px", 
                  bottom: "30px", 
                  right: isRtl ? "40px" : "auto", 
                  left: isRtl ? "auto" : "40px", 
                  width: "2px", 
                  background: "linear-gradient(to bottom, var(--color-secondary), var(--color-primary), rgba(255,255,255,0.1))",
                  zIndex: 0 
                }} 
              />

              {/* Step 1: Owner Creates Event */}
              <div style={{ display: "flex", gap: "16px", zIndex: 1, alignItems: "flex-start" }}>
                <div style={{ 
                  width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "var(--color-surface)", 
                  border: "2px solid #26C6DA", display: "flex", alignItems: "center", justifyContent: "center", color: "#26C6DA", flexShrink: 0
                }}>
                  <Calendar size={18} />
                </div>
                <div className="roadmap-card" style={{ flex: 1, margin: 0 }}>
                  <span style={{ color: "#26C6DA" }}>{isRtl ? "صاحب العمل" : "Business Owner"}</span>
                  <h3 style={{ margin: "8px 0" }}>{flows.event.steps[0].title}</h3>
                  <p style={{ opacity: 0.85 }}>{flows.event.steps[0].desc}</p>
                </div>
              </div>

              {/* Step 2: User Registers */}
              <div style={{ display: "flex", gap: "16px", zIndex: 1, alignItems: "flex-start" }}>
                <div style={{ 
                  width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "var(--color-surface)", 
                  border: "2px solid #A78BFA", display: "flex", alignItems: "center", justifyContent: "center", color: "#A78BFA", flexShrink: 0
                }}>
                  <Users size={18} />
                </div>
                <div className="roadmap-card" style={{ flex: 1, margin: 0 }}>
                  <span style={{ color: "#A78BFA" }}>{isRtl ? "المستخدم المستكشف" : "Explorer"}</span>
                  <h3 style={{ margin: "8px 0" }}>{flows.event.steps[1].title}</h3>
                  <p style={{ opacity: 0.85 }}>{flows.event.steps[1].desc}</p>
                  <div style={{ display: "flex", gap: "6px", marginTop: "12px" }}>
                    <div style={{
                      display: "flex", alignItems: "center", gap: "6px", padding: "4px 10px", borderRadius: "6px",
                      backgroundColor: "rgba(38, 198, 218, 0.12)", border: "1px solid rgba(38, 198, 218, 0.3)", color: "var(--color-secondary)", fontSize: "0.78rem", fontWeight: 600
                    }}>
                      <span>⏳</span>
                      <span>{flows.event.steps[1].status.label}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Owner processes bookings */}
              <div style={{ display: "flex", gap: "16px", zIndex: 1, alignItems: "flex-start" }}>
                <div style={{ 
                  width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "var(--color-surface)", 
                  border: "2px solid #1E88E5", display: "flex", alignItems: "center", justifyContent: "center", color: "#1E88E5", flexShrink: 0
                }}>
                  <Building2 size={18} />
                </div>
                <div className="roadmap-card" style={{ flex: 1, margin: 0, borderLeft: "4px solid #1E88E5" }}>
                  <span style={{ color: "#1E88E5" }}>{isRtl ? "صاحب العمل" : "Business Owner"}</span>
                  <h3 style={{ margin: "8px 0" }}>{flows.event.steps[2].title}</h3>
                  <p style={{ opacity: 0.85 }}>{flows.event.steps[2].desc}</p>
                </div>
              </div>

              {/* Step 4: Ticket States outcomes */}
              <div style={{ display: "flex", gap: "16px", zIndex: 1, alignItems: "flex-start" }}>
                <div style={{ 
                  width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "var(--color-surface)", 
                  border: "2px solid #E0E0E0", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", flexShrink: 0
                }}>
                  <Smartphone size={18} />
                </div>
                <div className="roadmap-card" style={{ flex: 1, margin: 0 }}>
                  <span>{isRtl ? "قواعد البيانات والتذاكر" : "Database & Ticket System"}</span>
                  <h3 style={{ margin: "8px 0" }}>{flows.event.steps[3].title}</h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "16px" }}>
                    {flows.event.steps[3].states.map((st, stIdx) => (
                      <div 
                        key={stIdx} 
                        style={{ 
                          padding: "10px", borderRadius: "8px", backgroundColor: st.color, border: `1px solid ${st.border}`, 
                          display: "flex", flexDirection: "column", gap: "4px", color: st.text 
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", fontWeight: "bold", fontSize: "0.85rem" }}>
                          <span>{st.emoji}</span>
                          <span>{st.label}</span>
                        </div>
                        <span style={{ fontSize: "0.74rem", opacity: 0.8, color: "var(--text-soft)" }}>{st.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
}

export default IntegrationPage;
