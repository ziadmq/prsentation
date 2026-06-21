import { MapPinned, Menu, X, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { menuItems } from "../data/Data";

function Sidbar({ activePage, setActivePage, menuOpen, setMenuOpen }) {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
  };

  return (
    <aside className={menuOpen ? "sidebar open" : "sidebar closed"}>
      <div className="sidebar-header">
        <div className="brand">
          <MapPinned />
          {menuOpen && <span>{t("sidebar.brand")}</span>}
        </div>

        <div className="sidebar-actions">
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <div className="menu-list">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              className={activePage === item.id ? "menu-item active" : "menu-item"}
              onClick={() => setActivePage(item.id)}
            >
              <Icon size={22} />
              {menuOpen && <span>{t(item.labelKey)}</span>}
            </button>
          );
        })}
      </div>

      <div className="sidebar-footer">
        <button className="language-toggle-btn" onClick={toggleLanguage} title={i18n.language === "ar" ? "Switch to English" : "تغيير إلى العربية"}>
          <Globe size={20} />
          {menuOpen && <span>{i18n.language === "ar" ? "English" : "العربية"}</span>}
        </button>
      </div>
    </aside>
  );
}

export default Sidbar;

