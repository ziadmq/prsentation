import { motion } from "framer-motion";
import { Send } from "lucide-react";

function EmailPage({ pageAnimation }) {
  return (
    <motion.section key="email" className="page email-page" {...pageAnimation}>
      <div className="email-layout">
        <div className="email-info">
          <div className="page-badge">Live Audience Service</div>
          <h1 className="main-title">Send A Message To JoMap Team</h1>
          <p className="main-subtitle">
            During the presentation, attendees can send questions,
            suggestions, or feedback directly to our team.
          </p>
        </div>

        <form className="email-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Write your message or question..." />

          <button type="button">
            <Send size={18} />
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
}

export default EmailPage;