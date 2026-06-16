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

        {/* Tools Section */}
        <div className="tools-section">
          <h3 className="section-title-small">أدوات التطوير (Tools Used)</h3>
          <div className="tools-row">
            <div className="tool-chip"><Monitor className="tool-icon" /> Android Studio & IntelliJ</div>
            <div className="tool-chip"><Layout className="tool-icon" /> VS Code</div>
            <div className="tool-chip"><PenTool className="tool-icon" /> Figma (UI/UX)</div>
            <div className="tool-chip"><Code2 className="tool-icon" /> GitHub & Git</div>
            <div className="tool-chip"><Kanban className="tool-icon" /> Jira / Trello</div>
            <div className="tool-chip"><Database className="tool-icon" /> Postman & DBeaver</div>
          </div>
        </div>

        {/* Technical Solutions Section */}
        <div className="solutions-section">
          <h3 className="section-title-small">المشاكل المعقدة والحلول التقنية (Technical Solutions)</h3>
          <div className="solutions-list">
            
            <div className="solution-card">
              <div className="problem-area">
                <div className="area-header problem-header">
                  <AlertTriangle className="area-icon" />
                  <h4>المشكلة: تزاحم الإشعارات بين نوعي المستخدمين</h4>
                </div>
                <p>كيف يمكن تقديم إشعارات تواصل اجتماعي للمستخدم العادي وإشعارات أعمال (تقييمات، عروض) للمالك دون تداخل أو إزعاج؟</p>
              </div>
              <div className="solution-area">
                <div className="area-header">
                  <Lightbulb className="area-icon text-yellow" />
                  <h4>الحل: نظام إشعارات مزدوج (Dual Notification System)</h4>
                </div>
                <p>بناء شاشات وقواعد بيانات منفصلة تماماً (OwnerNotificationScreen). يتم توجيه الإشعار بناءً على دور المستخدم (Role) وربط كل إشعار برابط عميق (Deep Link) يأخذ المستخدم للإجراء المطلوب فوراً.</p>
              </div>
            </div>

            <div className="solution-card">
              <div className="problem-area">
                <div className="area-header problem-header">
                  <AlertTriangle className="area-icon" />
                  <h4>المشكلة: أداء الخريطة مع كثرة المواقع والعروض</h4>
                </div>
                <p>تحميل آلاف النقاط (Markers) على الخريطة دفعة واحدة يسبب بطء شديد في واجهة الهاتف (Lag) واستهلاك للبطارية.</p>
              </div>
              <div className="solution-area">
                <div className="area-header">
                  <Lightbulb className="area-icon text-yellow" />
                  <h4>الحل: التجميع الجغرافي (Clustering) والتحديث اللحظي</h4>
                </div>
                <p>استخدام تقنية Marker Clustering لتجميع المواقع القريبة في أيقونة واحدة قابلة للتمدد عند التكبير (Zoom)، مع جلب البيانات بناءً على إحداثيات الشاشة الحالية فقط (Bounding Box) من خلال Spring Boot.</p>
              </div>
            </div>

            <div className="solution-card">
              <div className="problem-area">
                <div className="area-header problem-header">
                  <AlertTriangle className="area-icon" />
                  <h4>المشكلة: سرعة جلب صور الأماكن والمستخدمين</h4>
                </div>
                <p>تحميل الصور عالية الدقة لمئات الأماكن والمراجعات يستهلك باقة الإنترنت للمستخدم ويزيد من وقت الانتظار.</p>
              </div>
              <div className="solution-area">
                <div className="area-header">
                  <Lightbulb className="area-icon text-yellow" />
                  <h4>الحل: التخزين السحابي المُحسن (Firebase Storage & Caching)</h4>
                </div>
                <p>استخدام Firebase Storage لرفع الصور، مع الاعتماد على مكتبات التخزين المؤقت (Caching) في Jetpack Compose مثل (Coil) لضمان تحميل الصورة مرة واحدة فقط وحفظها محلياً، مع ضغط الصور قبل الرفع من الواجهة الخلفية.</p>
              </div>
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
