import { motion } from "framer-motion";
import { Send } from "lucide-react";

function EmailPage({ pageAnimation }) {
  return (
    <motion.section key="email" className="page email-page" {...pageAnimation}>
      <div className="email-layout">
        <div className="email-info">
          <div className="page-badge">خدمة الجمهور المباشرة</div>
          <h1 className="main-title">أرسل رسالة إلى فريق JoMap</h1>
          <p className="main-subtitle">
            أثناء العرض التقديمي، يمكن للحضور إرسال الأسئلة، الاقتراحات، أو الملاحظات مباشرة إلى فريقنا.
          </p>
        </div>

        <form className="email-form">
          <input type="text" placeholder="اسمك" />
          <input type="email" placeholder="بريدك الإلكتروني" />
          <textarea placeholder="اكتب رسالتك أو سؤالك..." />

          <button type="button">
            <Send size={18} />
            إرسال الرسالة
          </button>
        </form>
      </div>
    </motion.section>
  );
}

export default EmailPage;