import { motion } from "framer-motion";
import { features } from "../data/Data";

function FeaturesPage({ pageAnimation }) {
  return (
    <motion.section key="features" className="page features-page" {...pageAnimation}>
      <div className="page-badge">مميزات التطبيق</div>
      <h1 className="main-title">ماذا يقدم JoMap؟</h1>

      <div className="features-grid">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              className="feature-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
            >
              <div className="feature-icon">
                <Icon size={30} />
              </div>

              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}

export default FeaturesPage;