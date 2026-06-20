import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Smartphone, Map, Users, Bell, Tag, BrainCircuit, Search, Code, Server, Database, Sparkles, Briefcase, Flame, Calendar, TrendingUp, Bot, Monitor, Layout, PenTool, Code2, Kanban, AlertTriangle, Lightbulb, MapPin, Star, Camera } from "lucide-react";

function IntroPage({ pageAnimation }) {
  const { t } = useTranslation();

  const userFeatureKeys = [
    { icon: Map, key: "exploreLocations" },
    { icon: MapPin, key: "discoverEvents" },
    { icon: Tag, key: "latestOffers" },
    { icon: Star, key: "ratings" },
    { icon: Camera, key: "moments" },
    { icon: Users, key: "community" },
    { icon: Sparkles, key: "featured" },
    { icon: Bot, key: "nashmiAI" },
    { icon: Briefcase, key: "businessSupport" },
    { icon: Database, key: "landmarks" },
  ];

  const ownerFeatureKeys = [
    { icon: Briefcase, key: "businessEnv", business: true },
    { icon: Flame, key: "dynamicOffers", business: true },
    { icon: Calendar, key: "eventManagement", business: true },
    { icon: TrendingUp, key: "communityGrowth", business: true },
    { icon: Bot, key: "aiSupport", business: true },
  ];

  return (
    <motion.section key="intro" className="page intro-page" {...pageAnimation}>
      <div className="full-width-hero">
        <h1 className="project-title">{t("introPage.title")}</h1>
        <div className="project-description">
          <p style={{ marginBottom: "15px" }} dangerouslySetInnerHTML={{ __html: t("introPage.p1") }} />
          <p style={{ marginBottom: "15px" }}>{t("introPage.p2")}</p>
          <p>{t("introPage.p3")}</p>
        </div>
      </div>

      <div className="extended-info-container">
        <div className="dual-users-intro">
          <h2 className="section-title text-center">{t("introPage.dualTitle")}</h2>
          <p className="dual-users-text" dangerouslySetInnerHTML={{ __html: t("introPage.dualText") }} />
        </div>

        <h2 className="section-title">{t("introPage.userFeaturesTitle")}</h2>
        <div className="modern-features-grid">
          {userFeatureKeys.map((item) => {
            const Icon = item.icon;
            return (
              <div className="modern-feature-card" key={item.key}>
                <div className="feature-icon-box"><Icon /></div>
                <div className="feature-text">
                  <h3>{t(`introPage.userFeatures.${item.key}.title`)}</h3>
                  <p>{t(`introPage.userFeatures.${item.key}.text`)}</p>
                </div>
              </div>
            );
          })}
        </div>

        <h2 className="section-title">{t("introPage.ownerFeaturesTitle")}</h2>
        <div className="modern-features-grid">
          {ownerFeatureKeys.map((item) => {
            const Icon = item.icon;
            return (
              <div className="modern-feature-card" key={item.key}>
                <div className={`feature-icon-box${item.business ? " business" : ""}`}><Icon /></div>
                <div className="feature-text">
                  <h3>{t(`introPage.ownerFeatures.${item.key}.title`)}</h3>
                  <p>{t(`introPage.ownerFeatures.${item.key}.text`)}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </motion.section>
  );
}

export default IntroPage;