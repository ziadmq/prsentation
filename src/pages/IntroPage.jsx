import { motion } from "framer-motion";
import { Smartphone, Map, Users, Bell, Tag, BrainCircuit, Search, Code, Server, Database, Sparkles, Briefcase, Flame, Calendar, TrendingUp, Bot, Monitor, Layout, PenTool, Code2, Kanban, AlertTriangle, Lightbulb, MapPin, Star, Camera } from "lucide-react";

function IntroPage({ pageAnimation }) {
  return (
    <motion.section key="intro" className="page intro-page" {...pageAnimation}>
      <div className="full-width-hero">
        <h1 className="project-title">JOMAP</h1>
        <div className="project-description">
          <p style={{ marginBottom: "15px" }}>
            <strong>JOMAP</strong> هو تطبيق أردني ذكي يجمع بين الخرائط التفاعلية ومنصات التواصل الاجتماعي في مكان واحد، بحيث يتيح للمستخدمين استكشاف الأماكن والمواقع والأنشطة المحيطة بهم بطريقة سهلة وممتعة، مع إمكانية مشاركة تجاربهم والتفاعل مع الآخرين.
          </p>
          <p style={{ marginBottom: "15px" }}>
            يهدف التطبيق إلى تشجيع الأردنيين على اكتشاف مختلف مناطق المملكة وتوثيق الأماكن السياحية والترفيهية والخدمية، مما يساهم في إنشاء دليل رقمي شامل للأماكن داخل الأردن يعتمد على محتوى وتجارب المستخدمين.
          </p>
          <p>
            كما يدعم التطبيق أصحاب الأعمال والمشاريع المحلية من خلال توفير ميزات خاصة تساعدهم على الترويج لأعمالهم والوصول إلى عدد أكبر من العملاء، مما يعزز النشاط الاقتصادي المحلي ويخلق منصة تربط بين المستخدمين وأصحاب الأعمال بطريقة مبتكرة.
          </p>
        </div>
      </div>

      <div className="extended-info-container">
        <div className="dual-users-intro">
          <h2 className="section-title text-center">تطبيق واحد.. وتجربتان مختلفتان</h2>
          <p className="dual-users-text">
            تم تصميم JoMap ليكون منصة متكاملة تخدم فئتين أساسيتين من المستخدمين في وقت واحد: <strong>المستخدم العادي (User)</strong> وصاحب العمل <strong>(Owner)</strong>. فهو يقدم واجهات وأدوات مخصصة لتلبية احتياجات كل فئة بدقة عالية.
          </p>
        </div>

        <h2 className="section-title">أبرز ميزات تطبيق JoMap (للمستخدم العادي)</h2>
        <div className="modern-features-grid">
          <div className="modern-feature-card">
            <div className="feature-icon-box"><Map /></div>
            <div className="feature-text">
              <h3>استكشاف المواقع</h3>
              <p>استكشاف جميع المواقع والأماكن في مختلف محافظات الأردن بسهولة.</p>
            </div>
          </div>
          <div className="modern-feature-card">
            <div className="feature-icon-box"><MapPin /></div>
            <div className="feature-text">
              <h3>اكتشاف الفعاليات</h3>
              <p>اكتشاف أنشطة وفعاليات جديدة قريبة من موقع المستخدم.</p>
            </div>
          </div>
          <div className="modern-feature-card">
            <div className="feature-icon-box"><Tag /></div>
            <div className="feature-text">
              <h3>أحدث العروض</h3>
              <p>متابعة أحدث العروض والخصومات والفعاليات المحلية.</p>
            </div>
          </div>
          <div className="modern-feature-card">
            <div className="feature-icon-box"><Star /></div>
            <div className="feature-text">
              <h3>التقييمات والآراء</h3>
              <p>مشاركة التقييمات والآراء حول الأماكن التي تمت زيارتها لمساعدة الآخرين.</p>
            </div>
          </div>
          <div className="modern-feature-card">
            <div className="feature-icon-box"><Camera /></div>
            <div className="feature-text">
              <h3>توثيق اللحظات</h3>
              <p>توثيق أجمل اللحظات والتجارب ومشاركتها مع المجتمع.</p>
            </div>
          </div>
          <div className="modern-feature-card">
            <div className="feature-icon-box"><Users /></div>
            <div className="feature-text">
              <h3>التفاعل والمجتمع</h3>
              <p>إنشاء منشورات وقصص (Stories) والتفاعل مع الأصدقاء والمستخدمين.</p>
            </div>
          </div>
          <div className="modern-feature-card">
            <div className="feature-icon-box"><Sparkles /></div>
            <div className="feature-text">
              <h3>الأماكن المميزة</h3>
              <p>استعراض الأنشطة والأماكن المميزة في جميع أنحاء المملكة.</p>
            </div>
          </div>
          <div className="modern-feature-card">
            <div className="feature-icon-box"><Bot /></div>
            <div className="feature-text">
              <h3>المساعد الذكي "نشمي AI"</h3>
              <p>الاستفادة من المساعد الذكي "نشمي AI" الذي يقترح أماكن جديدة ومميزة لاكتشافها بشكل يومي.</p>
            </div>
          </div>
          <div className="modern-feature-card">
            <div className="feature-icon-box"><Briefcase /></div>
            <div className="feature-text">
              <h3>دعم أصحاب الأعمال</h3>
              <p>دعم أصحاب الأعمال من خلال توفير صفحة مخصصة للترويج لأعمالهم والوصول إلى عملاء جدد.</p>
            </div>
          </div>
          <div className="modern-feature-card">
            <div className="feature-icon-box"><Database /></div>
            <div className="feature-text">
              <h3>توثيق المعالم الأردنية</h3>
              <p>المساهمة في توثيق المعالم والأماكن الأردنية وإنشاء قاعدة بيانات مجتمعية تعكس جمال الأردن وتنوعه.</p>
            </div>
          </div>
        </div>


        <h2 className="section-title">كيف يدعم JoMap أصحاب الأعمال (Owner)؟</h2>
        <div className="modern-features-grid">
          <div className="modern-feature-card">
            <div className="feature-icon-box business"><Briefcase /></div>
            <div className="feature-text">
              <h3>بيئة مخصصة للأعمال</h3>
              <p>شاشة إشعارات مستقلة تماماً لأصحاب الأعمال لعدم التشتيت، مع توثيق الحسابات لمنح المستخدمين ثقة بأن المكان موثوق.</p>
            </div>
          </div>
          <div className="modern-feature-card">
            <div className="feature-icon-box business"><Flame /></div>
            <div className="feature-text">
              <h3>عروض ديناميكية ولحظية</h3>
              <p>إنشاء عروض باستهداف جغرافي دقيق تظهر فوراً للمستخدمين القريبين، مع تصميم جذاب لجذب العملاء بشكل مباشر.</p>
            </div>
          </div>
          <div className="modern-feature-card">
            <div className="feature-icon-box business"><Calendar /></div>
            <div className="feature-text">
              <h3>إدارة الأنشطة والفعاليات</h3>
              <p>تنظيم وترويج الأنشطة وتثبيتها جغرافياً على الخريطة التفاعلية، مما يشجع التفاعل العضوي ومشاركة المستخدمين للفعاليات.</p>
            </div>
          </div>
          <div className="modern-feature-card">
            <div className="feature-icon-box business"><TrendingUp /></div>
            <div className="feature-text">
              <h3>النمو عبر المجتمع</h3>
              <p>تحويل كل زائر إلى مؤثر عبر منشوراته الخاصة في موقع العمل، وقياس الشعبية عبر نظام "المفضلة" لتحليل تفضيلات السوق.</p>
            </div>
          </div>
          <div className="modern-feature-card">
            <div className="feature-icon-box business"><Bot /></div>
            <div className="feature-text">
              <h3>ذكاء اصطناعي لدعم الأعمال</h3>
              <p>تقديم توصيات للمستخدمين لزيارة أعمالك بناءً على سلوكياتهم، وتوفير رؤى مستقبلية تعتمد على البيانات لقياس نجاح حملاتك.</p>
            </div>
          </div>
        </div>


      </div>
    </motion.section>
  );
}

export default IntroPage;