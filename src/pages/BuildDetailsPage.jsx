import { motion } from "framer-motion";
import { 
  Smartphone, Server, Database, Layout, 
  Clock, GitBranch, CheckSquare, Activity,
  Wrench, Monitor, PenTool, Code2, Kanban,
  AlertTriangle, Lightbulb, CheckCircle2
} from "lucide-react";

function BuildDetailsPage({ pageAnimation }) {
  return (
    <motion.section key="build" className="page build-page" {...pageAnimation}>
      <div className="page-header">
        <h2 className="page-title">تفاصيل البناء والمراحل</h2>
        <p className="page-subtitle">كيف تم بناء تطبيق JoMap خطوة بخطوة</p>
      </div>

      <div className="build-content">
        
        {/* Statistics Section */}
        <div className="stats-section">
          <h3 className="section-title-small">إحصائيات المشروع (GitHub & Jira)</h3>
          <div className="stats-grid">
            <div className="stat-card">
              <Clock className="stat-icon text-blue" />
              <div className="stat-info">
                <h4>المدة الزمنية</h4>
                <strong>+4 أشهر</strong>
                <p>من التطوير المستمر</p>
              </div>
            </div>
            <div className="stat-card">
              <Activity className="stat-icon text-purple" />
              <div className="stat-info">
                <h4>حجم المشروع</h4>
                <strong>ضخم (Large)</strong>
                <p>نظام مزدوج (مستخدمين + ملاك)</p>
              </div>
            </div>
            <div className="stat-card">
              <CheckSquare className="stat-icon text-green" />
              <div className="stat-info">
                <h4>مهام Jira</h4>
                <strong>+150 مهمة</strong>
                <p>مقسمة بين تصميم، وتطوير، واختبار</p>
              </div>
            </div>
            <div className="stat-card">
              <GitBranch className="stat-icon text-orange" />
              <div className="stat-info">
                <h4>نشاط GitHub</h4>
                <strong>+300 Commit</strong>
                <p>تحديثات وإصلاحات مستمرة</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="tech-details-section">
          <h3 className="section-title-small">التفاصيل التقنية (Tech Stack)</h3>
          <div className="tech-grid">
            <div className="tech-box">
              <Smartphone className="tech-box-icon text-blue" />
              <h4>تطبيق الموبايل (Frontend)</h4>
              <p>تم بناء التطبيق باستخدام <strong>Kotlin</strong> و <strong>Jetpack Compose</strong>، مع الالتزام بأحدث معايير <strong>Material Design 3</strong> لتوفير تجربة مستخدم عصرية وسلسة.</p>
            </div>
            <div className="tech-box">
              <Server className="tech-box-icon text-green" />
              <h4>الخادم (Backend)</h4>
              <p>بُنيت الواجهة الخلفية باستخدام <strong>Spring Boot (Java)</strong> لضمان الأداء العالي، ومعالجة الطلبات بسرعة، وبناء <strong>RESTful APIs</strong> آمنة.</p>
            </div>
            <div className="tech-box">
              <Database className="tech-box-icon text-purple" />
              <h4>قواعد البيانات (Database)</h4>
              <p>تعتمد البيانات على <strong>PostgreSQL</strong> عبر منصة Neon DB، مع استخدام <strong>Firebase Storage</strong> لتخزين ملفات الوسائط والصور بكفاءة عالية.</p>
            </div>
            <div className="tech-box">
              <Layout className="tech-box-icon text-orange" />
              <h4>العرض التقديمي (Web)</h4>
              <p>بُني هذا الموقع التعريفي باستخدام <strong>React JS</strong> و <strong>Vite</strong>، مع حركات تفاعلية مذهلة بفضل مكتبة <strong>Framer Motion</strong>.</p>
            </div>
          </div>
        </div>

        {/* Development Phases Section */}
        <div className="phases-section">
          <h3 className="section-title-small">مراحل بناء المشروع (Development Phases)</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>التخطيط والتحليل (Planning & Analysis)</h4>
                <p>تحديد المشكلة التي يحلها JoMap، دراسة السوق الأردني، وجمع المتطلبات للمستخدمين وأصحاب الأعمال.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>تصميم واجهة المستخدم (UI/UX Design)</h4>
                <p>تصميم الشاشات وتجربة المستخدم (User Flow) للتطبيق والموقع باستخدام أدوات التصميم الحديثة لضمان السهولة والجمالية.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>تطوير الواجهة الخلفية (Backend Development)</h4>
                <p>بناء قاعدة البيانات، إعداد خوادم Spring Boot، وبرمجة الواجهات البرمجية (APIs) لربط البيانات بالواجهة الأمامية.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>تطوير تطبيق الهاتف (Mobile App Development)</h4>
                <p>تطوير التطبيق الفعلي باستخدام Kotlin، وربط الخرائط (Google Maps)، وتفعيل نظام الإشعارات والذكاء الاصطناعي.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>الاختبار والدمج (Testing & Integration)</h4>
                <p>إجراء اختبارات شاملة للنظام للتحقق من الأداء، خلوه من الأخطاء البرمجية (Bugs)، والتأكد من تجاوب التطبيق بفاعلية.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </motion.section>
  );
}

export default BuildDetailsPage;
