import { motion } from "framer-motion";
import { Route } from "lucide-react";
import { userFlowSteps } from "../data/Data";

function RoadmapPage({ pageAnimation }) {
  return (
    <motion.section key="roadmap" className="page roadmap-page" {...pageAnimation}>
      <div className="page-badge">
        <Route size={18} />
        User Journey
      </div>

      <h1 className="main-title">JoMap Application Flow</h1>
      <p className="main-subtitle">
        This roadmap explains how users move inside JoMap from opening the app
        until discovering places, saving favorites, writing reviews, and contacting owners.
      </p>

      <div className="roadmap-container">
        <motion.div
          className="roadmap-line"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />

        {userFlowSteps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              className={index % 2 === 0 ? "roadmap-step left" : "roadmap-step right"}
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -90 : 90 }}
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

                <span>{step.tag}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}

export default RoadmapPage;