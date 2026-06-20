import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { QrCode, ScanLine } from "lucide-react";

function QRPage({ pageAnimation }) {
  const [qrOpen, setQrOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <motion.section key="qr" className="page qr-page" {...pageAnimation}>
      <div className="qr-layout">
        <motion.div
          className="qr-text"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="page-badge">
            <ScanLine size={18} />
            {t("qrPage.badge")}
          </div>

          <h1 className="main-title">{t("qrPage.title")}</h1>
          <p className="main-subtitle">{t("qrPage.subtitle")}</p>

          <div className="qr-points">
            <span>{t("qrPage.attendance")}</span>
            <span>{t("qrPage.questions")}</span>
            <span>{t("qrPage.notes")}</span>
          </div>
        </motion.div>

        <motion.div
          className="qr-card animated-qr-card"
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7 }}
          onMouseEnter={() => setQrOpen(true)}
          onClick={() => setQrOpen(true)}
        >
          <div className="qr-glow"></div>

          <div className="qr-image-box">
            <img src="/qrCode/Qr-withLogo.png" alt="Attendance QR Code" />
            <div className="scan-line"></div>
          </div>

          <h3>{t("qrPage.hoverToZoom")}</h3>
          <p>{t("qrPage.hoverInstruction")}</p>
        </motion.div>
      </div>

      <AnimatePresence>
        {qrOpen && (
          <motion.div
            className="qr-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setQrOpen(false)}
          >
            <motion.div
              className="qr-modal-card"
              initial={{ scale: 0.4, rotate: -8 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.4, rotate: 8 }}
              transition={{ type: "spring", stiffness: 170, damping: 18 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="qr-modal-title">
                <QrCode />
                <span>{t("qrPage.modalTitle")}</span>
              </div>

              <div className="big-qr-box">
                <img src="/qrCode/Qr-withLogo.png" alt="Big Attendance QR Code" />
                <div className="big-scan-line"></div>
              </div>

              <p>{t("qrPage.scanInstruction")}</p>

              <button onClick={() => setQrOpen(false)}>{t("qrPage.close")}</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

export default QRPage;