import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Building2 } from "lucide-react";
import { ownerFlowStepKeys } from "../data/Data";

function OwnerFlowPage({ pageAnimation }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  const stepStatuses = {
    "ownerFlow.registerBusiness": [
      { label: isRtl ? "بانتظار الموافقة" : "Pending", emoji: "⏳", color: "rgba(var(--color-secondary-rgb), 0.12)", border: "rgba(var(--color-secondary-rgb), 0.3)", text: "var(--color-secondary)" },
      { label: isRtl ? "مقبول" : "Approved", emoji: "✅", color: "rgba(34, 197, 94, 0.12)", border: "rgba(34, 197, 94, 0.3)", text: "var(--green)" },
      { label: isRtl ? "مرفوض" : "Rejected", emoji: "❌", color: "rgba(239, 68, 68, 0.12)", border: "rgba(239, 68, 68, 0.3)", text: "#ef4444" },
      { label: isRtl ? "منشور" : "Published", emoji: "🌐", color: "rgba(var(--color-primary-rgb), 0.12)", border: "rgba(var(--color-primary-rgb), 0.3)", text: "var(--color-primary)" },
      { label: isRtl ? "معطل" : "Deactivated", emoji: "🔒", color: "rgba(249, 115, 22, 0.12)", border: "rgba(249, 115, 22, 0.3)", text: "#f97316" },
      { label: isRtl ? "محذوف" : "Deleted", emoji: "🗑️", color: "rgba(156, 163, 175, 0.12)", border: "rgba(156, 163, 175, 0.3)", text: "#9ca3af" }
    ],
    "ownerFlow.addEvent": [
      { label: isRtl ? "بانتظار الموافقة" : "Pending", emoji: "⏳", color: "rgba(var(--color-secondary-rgb), 0.12)", border: "rgba(var(--color-secondary-rgb), 0.3)", text: "var(--color-secondary)" },
      { label: isRtl ? "مقبولة" : "Approved", emoji: "✅", color: "rgba(34, 197, 94, 0.12)", border: "rgba(34, 197, 94, 0.3)", text: "var(--green)" },
      { label: isRtl ? "مرفوضة" : "Rejected", emoji: "❌", color: "rgba(239, 68, 68, 0.12)", border: "rgba(239, 68, 68, 0.3)", text: "#ef4444" },
      { label: isRtl ? "ملغاة" : "Cancelled", emoji: "🚫", color: "rgba(156, 163, 175, 0.12)", border: "rgba(156, 163, 175, 0.3)", text: "#9ca3af" },
      { label: isRtl ? "مؤجلة" : "Postponed", emoji: "↩️", color: "rgba(249, 115, 22, 0.12)", border: "rgba(249, 115, 22, 0.3)", text: "#f97316" },
      { label: isRtl ? "مكتملة" : "Completed", emoji: "🏁", color: "rgba(var(--color-primary-rgb), 0.12)", border: "rgba(var(--color-primary-rgb), 0.3)", text: "var(--color-primary)" }
    ],
    "ownerFlow.manageSubscribers": [
      { label: isRtl ? "قيد الانتظار" : "Pending", emoji: "⏳", color: "rgba(var(--color-secondary-rgb), 0.12)", border: "rgba(var(--color-secondary-rgb), 0.3)", text: "var(--color-secondary)" },
      { label: isRtl ? "مقبولة" : "Approved", emoji: "✅", color: "rgba(34, 197, 94, 0.12)", border: "rgba(34, 197, 94, 0.3)", text: "var(--green)" },
      { label: isRtl ? "مرفوضة" : "Rejected", emoji: "❌", color: "rgba(239, 68, 68, 0.12)", border: "rgba(239, 68, 68, 0.3)", text: "#ef4444" },
      { label: isRtl ? "ملغى" : "Cancelled", emoji: "🚫", color: "rgba(156, 163, 175, 0.12)", border: "rgba(156, 163, 175, 0.3)", text: "#9ca3af" },
      { label: isRtl ? "منسحب" : "Withdrawn", emoji: "↩️", color: "rgba(99, 102, 241, 0.12)", border: "rgba(99, 102, 241, 0.3)", text: "#6366f1" }
    ],
    "ownerFlow.createOffer": [
      { label: isRtl ? "نشط" : "Active", emoji: "🟢", color: "rgba(34, 197, 94, 0.12)", border: "rgba(34, 197, 94, 0.3)", text: "var(--green)" },
      { label: isRtl ? "مجدول" : "Scheduled", emoji: "📅", color: "rgba(var(--color-primary-rgb), 0.12)", border: "rgba(var(--color-primary-rgb), 0.3)", text: "var(--color-primary)" },
      { label: isRtl ? "مكتمل" : "Completed", emoji: "🏁", color: "rgba(139, 92, 246, 0.12)", border: "rgba(139, 92, 246, 0.3)", text: "#8b5cf6" },
      { label: isRtl ? "ملغى" : "Cancelled", emoji: "🟥", color: "rgba(239, 68, 68, 0.12)", border: "rgba(239, 68, 68, 0.3)", text: "#ef4444" },
      { label: isRtl ? "محذوف" : "Deleted", emoji: "🗑️", color: "rgba(156, 163, 175, 0.12)", border: "rgba(156, 163, 175, 0.3)", text: "#9ca3af" }
    ]
  };

  return (
    <motion.section key="ownerFlow" className="page roadmap-page" {...pageAnimation}>
      <div className="page-badge">
        <Building2 size={18} />
        {t("ownerFlowPage.badge")}
      </div>

      <h1 className="main-title">{t("ownerFlowPage.title")}</h1>
      <p className="main-subtitle">{t("ownerFlowPage.subtitle")}</p>

      <div className="roadmap-container">
        <motion.div
          className="roadmap-line"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />

        {ownerFlowStepKeys.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              className={index % 2 === 0 ? "roadmap-step start" : "roadmap-step end"}
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? (isRtl ? -90 : 90) : (isRtl ? 90 : -90) }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.13, duration: 0.55 }}
            >
              <motion.div className="roadmap-dot">
                {index + 1}
              </motion.div>

              <motion.div
                className="roadmap-card"
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  rotate: index % 2 === 0 ? -1 : 1,
                }}
              >
                <div className="roadmap-card-glow"></div>

                <div className="roadmap-icon">
                  <Icon size={28} />
                </div>

                <span>{t(`${step.key}.tag`)}</span>
                <h3>{t(`${step.key}.title`)}</h3>
                <p>{t(`${step.key}.text`)}</p>

                {stepStatuses[step.key] && (
                  <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
                    <div style={{ fontSize: "0.85rem", opacity: 0.8, fontWeight: "600", textAlign: isRtl ? "right" : "left", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "4px" }}>
                      {isRtl ? "حالات النظام:" : "System Statuses:"}
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", justifyContent: "flex-start", direction: isRtl ? "rtl" : "ltr" }}>
                      {stepStatuses[step.key].map((status, sIndex) => (
                        <motion.div
                          key={sIndex}
                          whileHover={{ scale: 1.05 }}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            padding: "4px 10px",
                            borderRadius: "6px",
                            backgroundColor: status.color,
                            border: `1px solid ${status.border}`,
                            color: status.text,
                            fontSize: "0.78rem",
                            fontWeight: 600,
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
                          }}
                        >
                          <span style={{ fontSize: "0.9rem" }}>{status.emoji}</span>
                          <span>{status.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}

export default OwnerFlowPage;
