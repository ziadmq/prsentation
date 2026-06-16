import { motion } from "framer-motion";
import { Smartphone, Map, Users, Bell, Tag, BrainCircuit, Search, Code, Server, Database, Sparkles, Briefcase, Flame, Calendar, TrendingUp, Bot } from "lucide-react";

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


        <h2 className="section-title">كيف يدعم JoMap أصحاب الأعمال؟</h2>
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


      </div>
    </motion.section>
  );
}

export default IntroPage;