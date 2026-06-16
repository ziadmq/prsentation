import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QrCode, ScanLine } from "lucide-react";

function QRPage({ pageAnimation }) {
  const [qrOpen, setQrOpen] = useState(false);

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
            حضور الجمهور
          </div>

          <h1 className="main-title">امسح رمز QR</h1>
          <p className="main-subtitle">
            قبل بدء عرضنا التقديمي، يمكن للحضور مسح رمز QR هذا لتسجيل الحضور وإرسال الملاحظات أو الأسئلة إلى فريق JoMap.
          </p>

          <div className="qr-points">
            <span>الحضور</span>
            <span>الأسئلة</span>
            <span>الملاحظات</span>
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

          <h3>مرر الماوس للتكبير</h3>
          <p>حرك الماوس فوق رمز QR لمسحه بسهولة</p>
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
                <span>رمز QR لحضور JoMap</span>
              </div>

              <div className="big-qr-box">
                <img src="/qrCode/Qr-withLogo.png" alt="Big Attendance QR Code" />
                <div className="big-scan-line"></div>
              </div>

              <p>امسح رمز QR هذا باستخدام كاميرا هاتفك</p>

              <button onClick={() => setQrOpen(false)}>إغلاق</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

export default QRPage;