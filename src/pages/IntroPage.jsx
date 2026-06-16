import { motion } from "framer-motion";
import { Smartphone, Map, Users, Bell, Tag, BrainCircuit, Search, Code, Server, Database, Sparkles, Briefcase, Flame, Calendar, TrendingUp, Bot, Monitor, Layout, PenTool, Code2, Kanban, AlertTriangle, Lightbulb } from "lucide-react";

function IntroPage({ pageAnimation }) {
  return (
    <motion.section key="intro" className="page intro-page" {...pageAnimation}>
      <div className="hero-layout">
        <div>
          <div className="page-badge">اسم المشروع</div>
          <h1 className="project-title">JoMap</h1>
          <h2 className="project-slogan">اكتشف الأردن بطريقة أذكى</h2>
          <p className="project-description">
            تطبيق <strong>JoMap</strong> هو منصة اجتماعية تفاعلية وتطبيق خرائط متكامل، يجمع بين استكشاف الأماكن والمواقع، وبين ميزات التواصل الاجتماعي الحديثة. يهدف التطبيق إلى ربط المستخدمين بالأماكن والأنشطة من حولهم (خاصة في المحافظات)، مع إتاحة الفرصة للتفاعل مع الأصدقاء ومشاركة التجارب.
          </p>

          <div className="intro-stats">
            <div>
              <strong>3</strong>
              <span>جهات رئيسية</span>
            </div>
            <div>
              <strong>+12</strong>
              <span>ميزة أساسية</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>مُركز على الأردن</span>
            </div>
          </div>
        </div>

        <motion.div
          className="phone-preview"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Smartphone size={95} />
          <h3>تطبيق الموبايل</h3>
          <p>React JS + Spring Boot</p>
        </motion.div>
      </div>

      <div className="extended-info-container">
        <div className="dual-users-intro">
          <h2 className="section-title text-center">تطبيق واحد.. وتجربتان مختلفتان</h2>
          <p className="dual-users-text">
            تم تصميم JoMap ليكون منصة متكاملة تخدم فئتين أساسيتين من المستخدمين في وقت واحد. فهو يقدم واجهات وأدوات مخصصة لتلبية احتياجات كل فئة بدقة عالية، مما يجعله أكثر من مجرد خريطة تفاعلية!
          </p>
        </div>

        <h2 className="section-title">كيف يخدم JoMap المستخدم العادي (User)؟</h2>
        <div className="feature-cards-grid">
          <div className="info-card">
            <Map className="info-icon" />
            <h3>الخرائط والمواقع</h3>
            <p>دمج كامل مع خرائط جوجل لتصفح الأماكن بسلاسة وتقسيمها بناءً على المحافظات والمناطق.</p>
          </div>
          <div className="info-card">
            <Users className="info-icon" />
            <h3>المجتمع والتواصل</h3>
            <p>إضافة منشورات، قصص (Stories)، تفاعلات، نظام طلبات الصداقة، والمفضلة لربط المستخدمين معاً.</p>
          </div>
          <div className="info-card">
            <Bell className="info-icon" />
            <h3>نظام إشعارات مزدوج</h3>
            <p>إشعارات حية ومفصلة للمستخدمين، ونظام مخصص لأصحاب الأعمال لمتابعة التحديثات والتقييمات.</p>
          </div>
          <div className="info-card">
            <Tag className="info-icon" />
            <h3>العروض والأنشطة</h3>
            <p>قسم مخصص لعرض التخفيضات الحصرية والفعاليات المتاحة في المنطقة للمشاركة فيها.</p>
          </div>
          <div className="info-card">
            <BrainCircuit className="info-icon" />
            <h3>الذكاء الاصطناعي (AI)</h3>
            <p>تقديم توصيات مخصصة للأماكن، تحسين نتائج البحث، والتفاعل الذكي لتعزيز تجربة المستخدم.</p>
          </div>
          <div className="info-card">
            <Search className="info-icon" />
            <h3>البحث المتقدم</h3>
            <p>نظام بحث متكامل وسريع للعثور على الأصدقاء، الأماكن، العروض، والأنشطة بسهولة تامة.</p>
          </div>
        </div>


        <h2 className="section-title">كيف يدعم JoMap أصحاب الأعمال (Owner)؟</h2>
        <div className="feature-cards-grid business-cards-grid">
          <div className="info-card business-card">
            <Briefcase className="info-icon business-icon" />
            <h3>بيئة مخصصة للأعمال</h3>
            <p>شاشة إشعارات مستقلة تماماً لأصحاب الأعمال لعدم التشتيت، مع توثيق الحسابات لمنح المستخدمين ثقة بأن المكان موثوق.</p>
          </div>
          <div className="info-card business-card">
            <Flame className="info-icon business-icon" />
            <h3>عروض ديناميكية ولحظية</h3>
            <p>إنشاء عروض باستهداف جغرافي دقيق تظهر فوراً للمستخدمين القريبين، مع تصميم جذاب لجذب العملاء بشكل مباشر.</p>
          </div>
          <div className="info-card business-card">
            <Calendar className="info-icon business-icon" />
            <h3>إدارة الأنشطة والفعاليات</h3>
            <p>تنظيم وترويج الأنشطة وتثبيتها جغرافياً على الخريطة التفاعلية، مما يشجع التفاعل العضوي ومشاركة المستخدمين للفعاليات.</p>
          </div>
          <div className="info-card business-card">
            <TrendingUp className="info-icon business-icon" />
            <h3>النمو عبر المجتمع</h3>
            <p>تحويل كل زائر إلى مؤثر عبر منشوراته الخاصة في موقع العمل، وقياس الشعبية عبر نظام "المفضلة" لتحليل تفضيلات السوق.</p>
          </div>
          <div className="info-card business-card">
            <Bot className="info-icon business-icon" />
            <h3>ذكاء اصطناعي لدعم الأعمال</h3>
            <p>تقديم توصيات للمستخدمين لزيارة أعمالك بناءً على سلوكياتهم، وتوفير رؤى مستقبلية تعتمد على البيانات لقياس نجاح حملاتك.</p>
          </div>
        </div>
        <div className="dual-users-intro" style={{ marginTop: "60px", marginBottom: "30px", textAlign: "right" }}>
          <h2 className="section-title text-center" style={{ textAlign: "right" }}>نظرة على بناء التطبيق (Build Details & Phases)</h2>
          <p className="dual-users-text" style={{ textAlign: "right" }}>
            لم يكن بناء <strong>JoMap</strong> مجرد عملية برمجية، بل رحلة هندسية متكاملة شملت التخطيط، تصميم واجهة المستخدم (UI/UX)، تطوير الخوادم وقواعد البيانات، بناء تطبيقات الموبايل، والاختبار الشامل.
            <br/><br/>
            لمعرفة التفاصيل الدقيقة حول المراحل التي مر بها المشروع وكيفية حل المشكلات التقنية المعقدة، قمنا بتخصيص صفحة كاملة لذلك في قسم <strong>"تفاصيل البناء"</strong>.
          </p>
        </div>

        <div className="dual-users-intro" style={{ marginBottom: "0", textAlign: "right" }}>
          <h2 className="section-title text-center" style={{ textAlign: "right" }}>الأدوات والتقنيات المستخدمة (Tools & Tech Stack)</h2>
          <p className="dual-users-text" style={{ textAlign: "right", marginBottom: "25px" }}>
            اعتمدنا في تطوير <strong>JoMap</strong> على أحدث وأفضل التقنيات لضمان الأداء السريع، الأمان العالي، وتجربة المستخدم السلسة:
          </p>
          <div className="tools-row" style={{ justifyContent: "center", marginTop: "20px" }}>
            <div className="tool-chip"><Monitor className="tool-icon" /> Android Studio & IntelliJ</div>
            <div className="tool-chip"><Layout className="tool-icon" /> VS Code</div>
            <div className="tool-chip"><PenTool className="tool-icon" /> Figma (UI/UX)</div>
            <div className="tool-chip"><Code2 className="tool-icon" /> GitHub & Git</div>
            <div className="tool-chip"><Kanban className="tool-icon" /> Jira / Trello</div>
            <div className="tool-chip"><Database className="tool-icon" /> Postman & DBeaver</div>
          </div>
        </div>

        <div className="solutions-section" style={{ marginTop: "60px", marginBottom: "40px" }}>
          <h2 className="section-title text-center" style={{ textAlign: "right", borderBottom: "none" }}>المشاكل المعقدة والحلول التقنية (Technical Solutions)</h2>
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

      </div>
    </motion.section>
  );
}

export default IntroPage;