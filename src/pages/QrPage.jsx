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
            Audience Attendance
          </div>

          <h1 className="main-title">Scan The QR Code</h1>
          <p className="main-subtitle">
            Before starting our presentation, attendees can scan this QR code
            to register attendance and send feedback or questions to the JoMap team.
          </p>

          <div className="qr-points">
            <span>Attendance</span>
            <span>Questions</span>
            <span>Feedback</span>
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

          <h3>Hover To Enlarge</h3>
          <p>Move the mouse over the QR code to scan it easily</p>
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
                <span>JoMap Attendance QR</span>
              </div>

              <div className="big-qr-box">
                <img src="/qrCode/Qr-withLogo.png" alt="Big Attendance QR Code" />
                <div className="big-scan-line"></div>
              </div>

              <p>Scan this QR code using your phone camera</p>

              <button onClick={() => setQrOpen(false)}>Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

export default QRPage;