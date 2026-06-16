import { motion } from "framer-motion";

function TechPage({ pageAnimation }) {
  return (
    <motion.section key="tech" className="page tech-page" {...pageAnimation}>
      <div className="page-badge">هيكلية النظام</div>
      <h1 className="main-title">التقنيات المستخدمة</h1>

      <div className="tech-box">
        <div className="tech-column">
          <h2>الواجهة الأمامية</h2>
          <p>
            React JS is used to build the user interface with fast navigation,
            reusable components, and a modern interactive design.
          </p>
          <span>Kotlin</span>
          <span>Framer Motion</span>
          <span>Lucide Icons</span>
        </div>

        <div className="connection-line"></div>

        <div className="tech-column">
          <h2>الواجهة الخلفية</h2>
          <p>
            يوفر Spring Boot واجهات برمجة التطبيقات REST، المصادقة، منطق العمل، الاتصال بقاعدة البيانات، وخدمة إرسال البريد الإلكتروني.
          </p>
          <span>Spring Boot</span>
          <span>REST API</span>
          <span>Email Service</span>
        </div>

        <div className="connection-line"></div>

        <div className="tech-column">
          <h2>قاعدة البيانات والتخزين</h2>
          <p>
            يخزن النظام بيانات المستخدمين، الأماكن، التقييمات، المفضلة، البلاغات، وبيانات مواقع المالكين.
          </p>
          <span>Neon Database</span>
          <span>Firebase Storage</span>
          <span>MySql</span>
        </div>
      </div>
    </motion.section>
  );
}

export default TechPage;