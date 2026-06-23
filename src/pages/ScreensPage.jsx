import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Smartphone, X, ChevronLeft, ChevronRight, Layers, Eye, Layers3 } from "lucide-react";
import { screenCategories } from "../data/Data";

function ScreensPage({ pageAnimation }) {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState(0);
  const [lightbox, setLightbox] = useState({ open: false, catIdx: 0, scrIdx: 0 });

  const currentScreens = screenCategories[activeCategory].screens;

  const openLightbox = (catIdx, scrIdx) => {
    setLightbox({ open: true, catIdx, scrIdx });
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, open: false });
  };

  const navigateLightbox = (dir) => {
    const screens = screenCategories[lightbox.catIdx].screens;
    const newIdx = (lightbox.scrIdx + dir + screens.length) % screens.length;
    setLightbox({ ...lightbox, scrIdx: newIdx });
  };

  const totalScreensCount = screenCategories.reduce((acc, cat) => acc + cat.screens.length, 0);
  const totalCategoriesCount = screenCategories.length;

  return (
    <motion.section key="screens" className="page screens-page screens-showcase-page" {...pageAnimation}>
      <div className="screens-orb screens-orb-one"></div>
      <div className="screens-orb screens-orb-two"></div>

      <div className="screens-hero-block">
        <div className="page-badge screens-badge">
          <Smartphone size={18} />
          {t("screensPage.badge")}
        </div>

        <h1 className="main-title screens-title">{t("screensPage.title")}</h1>
        <p className="main-subtitle screens-subtitle">{t("screensPage.subtitle")}</p>

        <div className="screens-hero-pills">
          <span>
            <Layers3 size={16} />
            {totalScreensCount} {t("screensPage.totalScreens", "Screens")}
          </span>
          <span>
            <Layers size={16} />
            {totalCategoriesCount} {t("screensPage.totalCategories", "Categories")}
          </span>
          <span>
            <Smartphone size={16} />
            Clean Mobile UI
          </span>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="screens-category-tabs">
        {screenCategories.map((cat, idx) => (
          <motion.button
            key={idx}
            className={`screens-tab ${activeCategory === idx ? "active" : ""}`}
            onClick={() => setActiveCategory(idx)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Layers size={16} />
            {t(cat.categoryKey)}
          </motion.button>
        ))}
      </div>

      {/* Screens Gallery */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          className="screens-gallery"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
        >
          {currentScreens.map((screen, index) => (
            <motion.div
              className="screen-showcase-card"
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
            >
              {/* Phone Mockup */}
              <motion.div
                className="showcase-phone"
                whileHover={{ y: -12, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
                onClick={() => openLightbox(activeCategory, index)}
              >
                <div className="showcase-phone-bezel">
                  <div className="showcase-phone-notch"></div>
                  <div className="showcase-phone-screen">
                    <img src={screen.image} alt={t(`${screen.key}.title`)} />
                  </div>
                  <div className="showcase-phone-home-bar"></div>
                </div>
                <div className="showcase-phone-glow"></div>
              </motion.div>

              {/* Screen Info */}
              <div className="screen-info">
                <span className="screen-tag">{t(`${screen.key}.tag`)}</span>
                <h3 className="screen-title">{t(`${screen.key}.title`)}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightbox.open && (
          <motion.div
            className="screen-lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="screen-lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={closeLightbox}>
                <X size={22} />
              </button>

              <button
                className="lightbox-nav lightbox-prev"
                onClick={() => navigateLightbox(-1)}
              >
                <ChevronLeft size={28} />
              </button>

              <div className="lightbox-phone">
                <div className="lightbox-phone-bezel">
                  <div className="lightbox-phone-notch"></div>
                  <div className="lightbox-phone-screen">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={lightbox.scrIdx}
                        src={screenCategories[lightbox.catIdx].screens[lightbox.scrIdx].image}
                        alt="screen"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.25 }}
                      />
                    </AnimatePresence>
                  </div>
                  <div className="lightbox-home-bar"></div>
                </div>
              </div>

              <button
                className="lightbox-nav lightbox-next"
                onClick={() => navigateLightbox(1)}
              >
                <ChevronRight size={28} />
              </button>

              <div className="lightbox-info">
                <h3>{t(`${screenCategories[lightbox.catIdx].screens[lightbox.scrIdx].key}.title`)}</h3>
                <p>{t(`${screenCategories[lightbox.catIdx].screens[lightbox.scrIdx].key}.text`)}</p>
                <div className="lightbox-dots">
                  {screenCategories[lightbox.catIdx].screens.map((_, i) => (
                    <button
                      key={i}
                      className={`lightbox-dot ${i === lightbox.scrIdx ? "active" : ""}`}
                      onClick={() => setLightbox({ ...lightbox, scrIdx: i })}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

export default ScreensPage;
