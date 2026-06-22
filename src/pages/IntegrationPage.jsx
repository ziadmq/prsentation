import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { 
  Building2, 
  ShieldCheck, 
  Users, 
  GitMerge,
  ArrowRight,
  ArrowDown,
  Calendar,
  Smartphone,
  MapPin,
  Tag,
  CheckCircle2, 
  XCircle, 
  HelpCircle,
  Undo2,
  Trash2,
  Lock,
  Globe
} from "lucide-react";

function IntegrationPage({ pageAnimation }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  // Flow step definition for the unified end-to-end pipeline
  const pipeline = [
    {
      stage: isRtl ? "المرحلة الأولى: دورة حياة وتوثيق المنشأة" : "Stage 1: Location Lifecycle",
      color: "var(--color-secondary)",
      steps: [
        {
          num: "1",
          role: "owner",
          roleLabel: isRtl ? "Owner" : "Owner",
          action: isRtl ? "إنشاء وتقديم منشأة جديدة" : "Create & Submit Location",
          desc: isRtl 
            ? "يبدأ الـ Owner بتعبئة كامل تفاصيل منشأته الجغرافية وتحديد إحداثياتها بدقة على الخريطة ويرسلها للمراجعة."
            : "Owner fills location details and sets coordinates on the map.",
          status: { label: isRtl ? "بانتظار الموافقة" : "Pending", color: "#f59e0b", emoji: "⏳" }
        },
        {
          num: "2",
          role: "admin",
          roleLabel: isRtl ? "Admin" : "Admin",
          action: isRtl ? "التدقيق واعتماد المنشأة" : "Verify & Approve",
          desc: isRtl 
            ? "يقوم الـ Admin بفحص الوثائق والتراخيص: إما بالقبول (معتمدة) لتمكين الـ Owner من نشرها، أو الرفض مع كتابة السبب ليرسل له إشعار فوري."
            : "Admin reviews license. Approves to let Owner publish, or Rejects with feedback.",
          status: { label: isRtl ? "مقبول / مرفوض" : "Approved / Rejected", color: "#8b5cf6", emoji: "⚖️" }
        },
        {
          num: "3",
          role: "owner",
          roleLabel: isRtl ? "Owner" : "Owner",
          action: isRtl ? "النشر على الخريطة العامة" : "Publish to Map",
          desc: isRtl 
            ? "بعد الموافقة، يضغط الـ Owner على زر 'نشر' لتنتقل المنشأة وتظهر مباشرة على الخريطة التفاعلية لكافة المستخدمين."
            : "Once approved, Owner clicks 'Publish' to make the location go live on the public map.",
          status: { label: isRtl ? "منشور" : "Published", color: "#22c55e", emoji: "🌐" }
        }
      ]
    },
    {
      stage: isRtl ? "المرحلة الثانية: دورة حياة وتوثيق النشاطات" : "Stage 2: Events & Activities Lifecycle",
      color: "var(--color-primary)",
      steps: [
        {
          num: "4",
          role: "owner",
          roleLabel: isRtl ? "Owner" : "Owner",
          action: isRtl ? "إنشاء نشاط أو فعالية جديدة" : "Create New Event",
          desc: isRtl 
            ? "يقوم الـ Owner بتنظيم نشاط أو مبادرة تطوعية ويرفعها للنظام موضحاً تفاصيلها ومقاعدها وسعرها."
            : "Owner creates a new activity with date, capacity, price, and descriptive banners.",
          status: { label: isRtl ? "بانتظار الموافقة" : "Pending", color: "#f59e0b", emoji: "⏳" }
        },
        {
          num: "5",
          role: "admin",
          roleLabel: isRtl ? "Admin" : "Admin",
          action: isRtl ? "مراجعة واعتماد النشاط والفعالية" : "Review & Publish Event",
          desc: isRtl 
            ? "يقوم الـ Admin بمراجعة النشاط والفعالية للتأكد من مطابقتها للمعايير: إما بالقبول لتظهر فوراً للمسخدمين، أو بالرفض، وفي حال الرفض لا يمكن تعديل الفعالية نفسها بل يجب على الـ Owner إنشاء نشاط أو فعالية جديدة بالكامل."
            : "Admin checks compliance. Approves to show to users, or Rejects. If rejected, Owner must create a new event.",
          status: { label: isRtl ? "مقبول / مرفوض" : "Approved / Rejected", color: "#8b5cf6", emoji: "⚖️" }
        }
      ]
    },
    {
      stage: isRtl ? "المرحلة الثالثة: تفاعل المستخدم وتسجيل الحجز" : "Stage 3: Booking & User Interaction",
      color: "var(--green)",
      steps: [
        {
          num: "6",
          role: "user",
          roleLabel: isRtl ? "المستخدم المستكشف" : "Explorer",
          action: isRtl ? "طلب حجز تذكرة حضور" : "Request Booking Ticket",
          desc: isRtl 
            ? "يستكشف المستخدم الفعالية ويضغط على حجز مقعد، فيقوم التطبيق بإنشاء طلب حجز تذكرة جديد قيد المراجعة."
            : "User discovers the event, clicks book seat, creating a new pending reservation ticket.",
          status: { label: isRtl ? "قيد الانتظار" : "Pending", color: "#f59e0b", emoji: "⏳" }
        },
        {
          num: "7",
          role: "owner",
          roleLabel: isRtl ? "Owner" : "Owner",
          action: isRtl ? "معالجة طلبات الحجز" : "Process User Ticket",
          desc: isRtl 
            ? "يصل الطلب للوحة تحكم الـ Owner ويقوم إما بالقبول (لتأكيد الحجز ومقعد المستخدم) أو الرفض (في حال اكتمال العدد أو عدم مطابقة الشروط)."
            : "Owner receives the ticket and either Approves (secures seat) or Rejects (due to capacity or mismatch).",
          status: { label: isRtl ? "مقبولة / مرفوضة" : "Approved / Rejected", color: "#8b5cf6", emoji: "⚖️" }
        },
        {
          num: "8",
          role: "system",
          roleLabel: isRtl ? "دورة الحالات اللاحقة" : "Ticket State Transitions",
          action: isRtl ? "حالات إلغاء الحجز والانسحاب" : "Cancellation & Withdrawal",
          desc: isRtl 
            ? "بعد الحجز، يمكن للـ Owner إلغاء الحجز لأسباب تنظيمية (ملغى)، أو يمكن للمستخدم الانسحاب بنفسه لإخلاء المقعد (منسحب)."
            : "Later, Owner can cancel the reservation due to organization updates (Cancelled) or User can withdraw (Withdrawn) to free up the seat.",
          status: { label: isRtl ? "ملغى / منسحب" : "Cancelled / Withdrawn", color: "#9ca3af", emoji: "↩️" }
        }
      ]
    }
  ];

  return (
    <motion.section key="integration" className="page integration-page" {...pageAnimation}>
      <div className="page-badge">
        <GitMerge size={18} />
        {isRtl ? "تكامل الأدوار والتفاعل (Integration)" : "Role Integration"}
      </div>

      <h1 className="main-title">{isRtl ? "تكامل الأدوار ودورة حياة العمليات" : "Role Integration & Workflows"}</h1>
      <p className="main-subtitle" style={{ marginBottom: "40px" }}>
        {isRtl 
          ? "مخطط تدفقي تفاعلي موحد يوضح دورة حياة العمليات كاملة بالتفصيل من لحظة تسجيل المنشأة لغاية الحجز والتفاعل."
          : "A single unified flowchart detailing the end-to-end lifecycle from location onboard to booking activities."}
      </p>

      {/* Main Flow Container */}
      <div style={{ display: "flex", flexDirection: "column", gap: "40px", width: "100%", maxWidth: "850px", margin: "0 auto", textAlign: "right" }}>
        
        {pipeline.map((stageBlock, stageIdx) => (
          <div 
            key={stageIdx}
            style={{ 
              borderRadius: "18px", 
              border: `1px solid rgba(255, 255, 255, 0.08)`, 
              background: "rgba(22, 23, 29, 0.4)",
              backdropFilter: "blur(6px)",
              padding: "24px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              position: "relative"
            }}
          >
            {/* Stage Title */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px", borderBottom: "1px solid rgba(255, 255, 255, 0.08)", paddingBottom: "12px" }}>
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: stageBlock.color }} />
              <h2 style={{ fontSize: "1.15rem", fontWeight: "bold", color: stageBlock.color, margin: 0 }}>
                {stageBlock.stage}
              </h2>
            </div>

            {/* Steps Vertical Timeline inside this Stage */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", position: "relative" }}>
              
              {stageBlock.steps.map((step, stepIdx) => (
                <div key={stepIdx} style={{ display: "flex", gap: "16px", alignItems: "flex-start", position: "relative" }}>
                  
                  {/* Step Connector Line */}
                  {stepIdx < stageBlock.steps.length - 1 && (
                    <div style={{ 
                      position: "absolute", 
                      top: "36px", 
                      bottom: "-24px", 
                      right: isRtl ? "18px" : "auto", 
                      left: isRtl ? "auto" : "18px", 
                      width: "2px", 
                      background: `linear-gradient(to bottom, ${stageBlock.color}, rgba(255,255,255,0.05))`,
                      zIndex: 0 
                    }} />
                  )}

                  {/* Step Circle Counter */}
                  <div style={{ 
                    width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "var(--color-surface)", 
                    border: `2px solid ${stageBlock.color}`, display: "flex", alignItems: "center", justifyContent: "center", 
                    color: stageBlock.color, fontWeight: "bold", zIndex: 1, flexShrink: 0, fontSize: "0.95rem"
                  }}>
                    {step.num}
                  </div>

                  {/* Step content card */}
                  <div 
                    className="roadmap-card" 
                    style={{ 
                      flex: 1, margin: 0, padding: "16px 20px", borderLeft: isRtl ? "none" : `3px solid ${stageBlock.color}`, 
                      borderRight: isRtl ? `3px solid ${stageBlock.color}` : "none",
                      background: "rgba(255, 255, 255, 0.02)", transition: "all 0.25s ease"
                    }}
                  >
                    {/* Header: Role & Status badge */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px", marginBottom: "8px" }}>
                      <span style={{ 
                        fontSize: "0.75rem", fontWeight: "700", padding: "3px 8px", borderRadius: "4px",
                        backgroundColor: step.role === "owner" ? "rgba(38, 198, 218, 0.1)" : step.role === "admin" ? "rgba(30, 136, 229, 0.1)" : "rgba(34, 197, 94, 0.1)",
                        color: step.role === "owner" ? "var(--color-secondary)" : step.role === "admin" ? "var(--color-primary)" : "var(--green)",
                        border: `1px solid ${step.role === "owner" ? "rgba(38, 198, 218, 0.2)" : step.role === "admin" ? "rgba(30, 136, 229, 0.2)" : "rgba(34, 197, 94, 0.2)"}`
                      }}>
                        {step.roleLabel}
                      </span>

                      {step.status && (
                        <div style={{ 
                          display: "flex", alignItems: "center", gap: "4px", padding: "3px 8px", borderRadius: "6px",
                          backgroundColor: `${step.status.color}15`, border: `1px solid ${step.status.color}35`, color: step.status.color,
                          fontSize: "0.72rem", fontWeight: "bold"
                        }}>
                          <span>{step.status.emoji}</span>
                          <span>{step.status.label}</span>
                        </div>
                      )}
                    </div>

                    {/* Step Title & Action */}
                    <h3 style={{ fontSize: "0.95rem", fontWeight: "bold", margin: "0 0 6px 0", color: "var(--text-main)" }}>
                      {step.action}
                    </h3>

                    {/* Step Description */}
                    <p style={{ fontSize: "0.82rem", color: "var(--text-soft)", lineHeight: "1.5", margin: 0 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Connecting stage-to-stage Arrow */}
            {stageIdx < pipeline.length - 1 && (
              <div style={{ display: "flex", justifyContent: "center", margin: "16px 0 -16px 0" }}>
                <ArrowDown size={22} style={{ color: "rgba(255,255,255,0.2)" }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default IntegrationPage;
