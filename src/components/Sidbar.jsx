import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { menuItems } from "../data/Data";
import jomapLogo from "../assets/jomap_logo.jpg";

function Sidbar({ activePage, setActivePage, menuOpen, setMenuOpen }) {
  const { t, i18n } = useTranslation();

  const [scanCount, setScanCount] = useState(() => {
    const saved = localStorage.getItem("jomap_scan_count");
    return saved ? parseInt(saved, 10) : 0; // Start at 0
  });

  useEffect(() => {
    localStorage.setItem("jomap_scan_count", scanCount);
  }, [scanCount]);

  useEffect(() => {
    // Simulate real-time scans incrementing slowly for realism
    const interval = setInterval(() => {
      setScanCount((prev) => {
        if (prev < 18) {
          const increment = Math.random() > 0.4 ? 1 : 0;
          return prev + increment;
        }
        return prev;
      });
    }, 45000);

    return () => clearInterval(interval);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
  };

  const handleMenuItemClick = (pageId) => {
    setActivePage(pageId);
    setMenuOpen(false);
  };

  const renderMenuGroup = (ids) => (
    <div className="sidebar-section-group">
      {menuItems
        .filter((item) => ids.includes(item.id))
        .map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              type="button"
              className={activePage === item.id ? "menu-item active" : "menu-item"}
              onClick={() => handleMenuItemClick(item.id)}
              aria-label={t(item.labelKey)}
              title={!menuOpen ? t(item.labelKey) : undefined}
            >
              <Icon size={22} />
              {menuOpen && <span>{t(item.labelKey)}</span>}
            </button>
          );
        })}
    </div>
  );

  return (
    <aside className={menuOpen ? "sidebar open" : "sidebar closed"}>
      <div className="sidebar-header">
        <div className="brand">
          <img
            src={jomapLogo}
            alt="JOMAP Logo"
            style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
          />
          {menuOpen && <span>{t("sidebar.brand")}</span>}
        </div>

        <div className="sidebar-actions">
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <div className="menu-list">
        <div className="sidebar-section-header" style={{ marginTop: "8px" }}>
          {menuOpen ? t("sidebar.sections.overview") : <span className="section-divider-line" />}
        </div>
        {renderMenuGroup(["qr", "intro", "screens"])}

        <div className="sidebar-section-header">
          {menuOpen ? t("sidebar.sections.roles") : <span className="section-divider-line" />}
        </div>
        {renderMenuGroup(["roadmap", "ownerFlow", "adminFlow", "integration"])}

        <div className="sidebar-section-header">
          {menuOpen ? t("sidebar.sections.dev") : <span className="section-divider-line" />}
        </div>
        {renderMenuGroup(["build", "tools", "metrics"])}

        <div className="sidebar-section-header">
          {menuOpen ? t("sidebar.sections.conclusion") : <span className="section-divider-line" />}
        </div>
        {renderMenuGroup(["future", "team"])}
      </div>

      <div className="sidebar-footer">
        <div className="scan-counter-container">
          <div className="scan-counter-badge" title={t("sidebar.scanCountTooltip")}>
            <span className="scan-pulse-dot"></span>
            {menuOpen ? (
              <span>
                {t("sidebar.scanCountLabel")}: <strong>{scanCount}</strong>
              </span>
            ) : (
              <strong>{scanCount}</strong>
            )}
          </div>
        </div>

        <button
          className="language-toggle-btn"
          type="button"
          onClick={toggleLanguage}
          title={i18n.language === "ar" ? "Switch to English" : "تغيير إلى العربية"}
        >
          <Globe size={20} />
          {menuOpen && <span>{i18n.language === "ar" ? "English" : "العربية"}</span>}
        </button>
      </div>
    </aside>
  );
}

export default Sidbar;
