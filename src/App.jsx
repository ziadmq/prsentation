import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./App.css";

import Sidebar from "./components/Sidbar";

import TeamPage from "./pages/TeamPage";
import QRPage from "./pages/QrPage";
import IntroPage from "./pages/IntroPage";
import BuildDetailsPage from "./pages/BuildDetailsPage";
import RoadmapPage from "./pages/RoadmapPage";
import ScreensPage from "./pages/ScreensPage";
import TechPage from "./pages/TechPage";
import EmailPage from "./pages/EmailPage";
import ProjectMetrices from "./pages/ProjectMatrices";
import OwnerFlowPage from "./pages/OwnerFlowPage";
import AdminFlowPage from "./pages/AdminFlowPage";
import IntegrationPage from "./pages/IntegrationPage";
import FutureWorkPage from "./pages/FutureWorkPage";

function App() {
  const [activePage, setActivePage] = useState("qr");
  const [menuOpen, setMenuOpen] = useState(true);
  const { i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", i18n.language);
  }, [i18n.language]);

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

      case "ownerFlow":
        return <OwnerFlowPage pageAnimation={pageAnimation} />;

      case "adminFlow":
        return <AdminFlowPage pageAnimation={pageAnimation} />;

      case "integration":
        return <IntegrationPage pageAnimation={pageAnimation} />;

      case "future":
        return <FutureWorkPage pageAnimation={pageAnimation} />;

      case "screens":
        return <ScreensPage pageAnimation={pageAnimation} />;

      case "tech":
        return <TechPage pageAnimation={pageAnimation} />;

      case "email":
        return <EmailPage pageAnimation={pageAnimation} />;

      case "metrics":
          return <ProjectMetrices pageAnimation={pageAnimation} />;

      default:
        return <IntroPage pageAnimation={pageAnimation} />;
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