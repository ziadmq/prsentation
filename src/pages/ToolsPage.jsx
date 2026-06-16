import { motion } from "framer-motion";
import { 
  Monitor, Layout, PenTool, Code2, Kanban, Database, Wrench
} from "lucide-react";

function ToolsPage({ pageAnimation }) {
  return (
    <motion.section key="tools" className="page tools-page" {...pageAnimation}>
      <div className="page-header">
        <h2 className="page-title">أدوات التطوير (Tools Used)</h2>
        <p className="page-subtitle">الأدوات التي تم استخدامها في بناء JoMap</p>
      </div>

      <div className="build-content">
        <div className="tools-section" style={{ marginTop: "40px" }}>
          <div className="tools-row" style={{ justifyContent: "center" }}>
            <div className="tool-chip"><Monitor className="tool-icon" /> Android Studio & IntelliJ</div>
            <div className="tool-chip"><Layout className="tool-icon" /> VS Code</div>
            <div className="tool-chip"><PenTool className="tool-icon" /> Figma (UI/UX)</div>
            <div className="tool-chip"><Code2 className="tool-icon" /> GitHub & Git</div>
            <div className="tool-chip"><Kanban className="tool-icon" /> Jira / Trello</div>
            <div className="tool-chip"><Database className="tool-icon" /> Postman & DBeaver</div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default ToolsPage;
