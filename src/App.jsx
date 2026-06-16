import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import "./App.css";

import Sidebar from "./components/Sidbar";

import TeamPage from "./pages/TeamPage";
import QRPage from "./pages/QrPage";
import IntroPage from "./pages/IntroPage";
import BuildDetailsPage from "./pages/BuildDetailsPage";
import RoadmapPage from "./pages/RoadmapPage";
import FeaturesPage from "./pages/FeaturesPage";
import ScreensPage from "./pages/ScreensPage";
import TechPage from "./pages/TechPage";
import EmailPage from "./pages/EmailPage";
import ProjectMetrices from "./pages/ProjectMatrices";
function App() {
  const [activePage, setActivePage] = useState("intro");
  const [menuOpen, setMenuOpen] = useState(true);

  const pageAnimation = {
    initial: { opacity: 0, y: 40, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -30, scale: 0.98 },
    transition: { duration: 0.45 },
  };

  const renderPage = () => {
    switch (activePage) {
      case "team":
        return <TeamPage pageAnimation={pageAnimation} />;

      case "qr":
        return <QRPage pageAnimation={pageAnimation} />;

      case "intro":
        return <IntroPage pageAnimation={pageAnimation} />;

      case "build":
        return <BuildDetailsPage pageAnimation={pageAnimation} />;

      case "roadmap":
        return <RoadmapPage pageAnimation={pageAnimation} />;

      case "features":
        return <FeaturesPage pageAnimation={pageAnimation} />;

      case "screens":
        return <ScreensPage pageAnimation={pageAnimation} />;

      case "tech":
        return <TechPage pageAnimation={pageAnimation} />;

      case "email":
        return <EmailPage pageAnimation={pageAnimation} />;

      case "metrics":
          return <ProjectMetrices pageAnimation={pageAnimation} />;

      default:
        return <TeamPage pageAnimation={pageAnimation} />;
    }
  };

  return (
    <div className="presentation">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main className={menuOpen ? "content with-sidebar" : "content small-sidebar"}>
        <AnimatePresence mode="wait">{renderPage()}</AnimatePresence>
      </main>
    </div>
  );
}

export default App;