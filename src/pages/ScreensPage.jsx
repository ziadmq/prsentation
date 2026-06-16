import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";
import { screens } from "../data/Data";

function ScreensPage({ pageAnimation }) {
  return (
    <motion.section key="screens" className="page screens-page" {...pageAnimation}>
      <div className="page-badge">
        <Smartphone size={18} />
        App Screens
      </div>

      <h1 className="main-title">Application Screens</h1>
      <p className="main-subtitle">
        These screens show the main user experience inside JoMap, from opening
        the app to discovering places and managing the user account.
      </p>

      <div className="creative-screens-wrapper">
        {screens.map((screen, index) => (
          <motion.div
            className={index % 2 === 0 ? "creative-screen-row" : "creative-screen-row reverse"}
            key={index}
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.12 }}
          >
            <motion.div
              className="mobile-mockup"
              whileHover={{ scale: 1.04, rotate: index % 2 === 0 ? 2 : -2 }}
            >
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <img src={screen.image} alt={screen.title} />
              </div>
            </motion.div>

            <div className="screen-description-card">
              <span>{screen.tag}</span>
              <h2>{screen.title}</h2>
              <p>{screen.text}</p>

              <div className="screen-mini-line">
                <div></div>
                <small>JoMap Mobile Experience</small>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default ScreensPage;