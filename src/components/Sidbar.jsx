import { MapPinned, Menu, X } from "lucide-react";
import { menuItems } from "../data/Data";

function Sidbar({ activePage, setActivePage, menuOpen, setMenuOpen }) {
  return (
    <aside className={menuOpen ? "sidebar open" : "sidebar closed"}>
      <div className="sidebar-header">
        <div className="brand">
          <MapPinned />
          {menuOpen && <span>JoMap</span>}
        </div>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
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
              {menuOpen && <span>{item.label}</span>}
            </button>
          );
        })}
      </div>
    </aside>
  );
}

export default Sidbar;