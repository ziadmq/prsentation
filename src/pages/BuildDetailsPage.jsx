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
