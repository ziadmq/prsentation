import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";

function IntroPage({ pageAnimation }) {
  return (
    <motion.section key="intro" className="page intro-page" {...pageAnimation}>
      <div className="hero-layout">
        <div>
          <div className="page-badge">Project Name</div>
          <h1 className="project-title">JoMap</h1>
          <h2 className="project-slogan">Discover Jordan in a Smarter Way</h2>
          <p className="project-description">
            JoMap is a mobile application that helps users explore Jordan’s
            governorates, tourist attractions, restaurants, hotels, markets,
            and local places through an interactive and modern platform.
          </p>

          <div className="intro-stats">
            <div>
              <strong>3</strong>
              <span>Main Actors</span>
            </div>
            <div>
              <strong>12+</strong>
              <span>Core Features</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Jordan Focused</span>
            </div>
          </div>
        </div>

        <motion.div
          className="phone-preview"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Smartphone size={95} />
          <h3>Mobile Application</h3>
          <p>React JS + Spring Boot</p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default IntroPage;