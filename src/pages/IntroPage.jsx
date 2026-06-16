import { motion } from "framer-motion";
import { Smartphone, Map, Users, Bell, Tag, BrainCircuit, Search, Code, Server, Database, Sparkles } from "lucide-react";

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
        <h2 className="section-title">الميزات الرئيسية للتطبيق</h2>
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

        <h2 className="section-title">البنية التقنية</h2>
        <div className="tech-cards-row">
          <div className="tech-card">
            <Smartphone className="tech-icon" />
            <div className="tech-text">
              <h4>الواجهة الأمامية (Frontend)</h4>
              <p>أندرويد (Kotlin, Jetpack Compose) بتصميم Material Design 3 المتجاوب.</p>
            </div>
          </div>
          <div className="tech-card">
            <Server className="tech-icon" />
            <div className="tech-text">
              <h4>الخادم (Backend)</h4>
              <p>نظام خلفي قوي وموثوق مبني باستخدام Spring Boot لضمان سرعة الاستجابة.</p>
            </div>
          </div>
          <div className="tech-card">
            <Database className="tech-icon" />
            <div className="tech-text">
              <h4>قواعد البيانات وتخزين الوسائط</h4>
              <p>استخدام Firebase Storage لرفع الصور بكفاءة عالية، مع قاعدة بيانات قوية.</p>
            </div>
          </div>
        </div>

        <div className="summary-highlight">
          <Sparkles className="highlight-icon" />
          <p>
            <strong>باختصار:</strong> JoMap ليس مجرد تطبيق خرائط كلاسيكي، بل هو شبكة اجتماعية جغرافية تدمج بين حيوية منصات التواصل الاجتماعي وفائدة تطبيقات استكشاف الأماكن والعروض!
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default IntroPage;