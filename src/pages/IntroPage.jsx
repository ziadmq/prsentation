import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";

function IntroPage({ pageAnimation }) {
  return (
    <motion.section key="intro" className="page intro-page" {...pageAnimation}>
      <div className="hero-layout">
        <div>
          <div className="page-badge">اسم المشروع</div>
          <h1 className="project-title">JoMap</h1>
          <h2 className="project-slogan">اكتشف الأردن بطريقة أذكى</h2>
          <div className="project-description-scrollable">
            <p>
              تطبيق <strong>JoMap</strong> هو منصة اجتماعية تفاعلية وتطبيق خرائط متكامل، يجمع بين استكشاف الأماكن والمواقع، وبين ميزات التواصل الاجتماعي الحديثة. يهدف التطبيق إلى ربط المستخدمين بالأماكن والأنشطة من حولهم (خاصة في المحافظات)، مع إتاحة الفرصة للتفاعل مع الأصدقاء ومشاركة التجارب.
            </p>

            <div className="info-section">
              <h3>الميزات الرئيسية للتطبيق (Core Features)</h3>
              <ul>
                <li><strong>الخرائط والمواقع:</strong> دمج كامل مع خرائط جوجل لتصفح الأماكن، وتقسيمها بناءً على المحافظات.</li>
                <li><strong>المجتمع والتواصل:</strong> إضافة منشورات، قصص (Stories)، تفاعلات، نظام طلبات الصداقة، والمفضلة.</li>
                <li><strong>نظام الإشعارات المزدوج:</strong> إشعارات حية ومفصلة للمستخدمين، ونظام مخصص لأصحاب الأعمال.</li>
                <li><strong>العروض والأنشطة:</strong> متابعة العروض الحصرية والفعاليات في المنطقة.</li>
                <li><strong>الذكاء الاصطناعي (AI):</strong> تقديم توصيات مخصصة وتحسين نتائج البحث والتفاعل.</li>
                <li><strong>البحث المتقدم:</strong> العثور على الأصدقاء، الأماكن، والعروض بسهولة.</li>
              </ul>
            </div>

            <div className="info-section">
              <h3>البنية التقنية (Tech Stack)</h3>
              <ul>
                <li><strong>الواجهة الأمامية (Frontend):</strong> أندرويد (Kotlin, Jetpack Compose) بتصميم Material Design 3.</li>
                <li><strong>الخادم وقواعد البيانات (Backend):</strong> نظام قوي مبني باستخدام Spring Boot.</li>
                <li><strong>تخزين الوسائط:</strong> استخدام Firebase Storage لرفع وتخزين الصور بكفاءة.</li>
              </ul>
            </div>

            <p className="summary-text">
              <strong>باختصار:</strong> JoMap ليس مجرد تطبيق خرائط كلاسيكي، بل هو شبكة اجتماعية جغرافية تدمج بين حيوية منصات التواصل الاجتماعي وفائدة تطبيقات استكشاف الأماكن والعروض!
            </p>
          </div>

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
    </motion.section>
  );
}

export default IntroPage;