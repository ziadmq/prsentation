import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  QrCode,
  MapPinned,
  Smartphone,
  Star,
  MessageCircle,
  ShieldCheck,
  Building2,
  Navigation,
  Mail,
  Menu,
  X,
  Home,
  Image,
  Code2,
  Send,
  Crown,
  Sparkles,
  ScanLine,
  LogIn,
  Search,
  Map,
  MapPin,
  FileText,
  Heart,
  PhoneCall,
  CheckCircle2,
  Route,
} from "lucide-react";
import "./App.css";

const supervisor = {
  name: "Mohammad Zarour",
  role: "Project Supervisor",
  image: "/team/Dr.jpg",
};

const teamMembers = [
  {
    name: "Ghaleb Shhab",
    role: "Full Stack Developer",
    image: "/team/Me.JPEG",
  },
  {
    name: "Eyad AbuFares",
    role: "Backend Developer",
    image: "/team/Eyad.jpg",
  },
  {
    name: "Zyad Qafisheh",
    role: "Frontend Developer",
    image: "/team/Zoz.jpg",
  },
  {
    name: "Mousaab Makahleh",
    role: "UI/UX Designer",
    image: "/team/Mous.jpg",
  },
  {
    name: "Apd Alqader Froukh",
    role: "Documentation & Testing",
    image: "/team/Abd.jpg",
  },
];

const menuItems = [
  { id: "team", label: "Team", icon: <Users /> },
  { id: "qr", label: "Attendance QR", icon: <QrCode /> },
  { id: "intro", label: "Project Intro", icon: <Home /> },
  { id: "roadmap", label: "User Flow", icon: <Route /> },
  { id: "features", label: "Features", icon: <Star /> },
  { id: "screens", label: "Screens", icon: <Image /> },
  { id: "tech", label: "Technology", icon: <Code2 /> },
  { id: "email", label: "Email Service", icon: <Mail /> },
];

const features = [
  {
    icon: <MapPinned />,
    title: "Interactive Jordan Map",
    text: "Users can explore Jordan governorates and discover tourism places, restaurants, hotels, and markets.",
  },
  {
    icon: <Navigation />,
    title: "Nearby Places",
    text: "The app helps users find nearby places based on their current location.",
  },
  {
    icon: <Star />,
    title: "Reviews & Ratings",
    text: "Users can rate places, write reviews, and share their experiences.",
  },
  {
    icon: <Building2 />,
    title: "Owner Dashboard",
    text: "Owners can add locations, upload pictures, and update information.",
  },
  {
    icon: <ShieldCheck />,
    title: "Admin Management",
    text: "Admins approve locations, manage users, and moderate reports.",
  },
  {
    icon: <MessageCircle />,
    title: "Direct Communication",
    text: "Users can contact owners and ask questions directly.",
  },
];

const screens = [
  {
    title: "Home Screen",
    image: "/screens/home.png",
    tag: "Start Point",
    text: "The main screen that welcomes users and gives quick access to important features.",
  },
  {
    title: "Interactive Map",
    image: "/screens/map.png",
    tag: "Map Experience",
    text: "Users can explore Jordan by using an interactive map with location markers.",
  },
  {
    title: "Location Details",
    image: "/screens/details.png",
    tag: "Place Info",
    text: "Shows images, description, ratings, reviews, and contact options for each place.",
  },
  {
    title: "Profile Screen",
    image: "/screens/profile.png",
    tag: "User Account",
    text: "Users can manage profile data, favorites, reviews, and personal settings.",
  },
];

const userFlowSteps = [
  {
    icon: <Smartphone />,
    title: "Open JoMap",
    text: "The user opens the mobile application and starts the exploration journey.",
    tag: "Start",
  },
  {
    icon: <LogIn />,
    title: "Login / Sign Up",
    text: "The user creates an account or logs in to access personalized features.",
    tag: "Account",
  },
  {
    icon: <Map />,
    title: "Explore Jordan Map",
    text: "The user browses Jordan governorates using the interactive map.",
    tag: "Map",
  },
  {
    icon: <Search />,
    title: "Search Places",
    text: "The user can search for tourism places, restaurants, hotels, or markets.",
    tag: "Discover",
  },
  {
    icon: <MapPin />,
    title: "Select Location",
    text: "The user clicks on a location marker or card to open its details.",
    tag: "Location",
  },
  {
    icon: <FileText />,
    title: "View Details",
    text: "The app displays images, description, opening hours, rating, and location info.",
    tag: "Details",
  },
  {
    icon: <Heart />,
    title: "Save / Review",
    text: "The user can add the place to favorites and share a review or rating.",
    tag: "Interaction",
  },
  {
    icon: <PhoneCall />,
    title: "Contact Owner",
    text: "The user can communicate with the place owner for questions or services.",
    tag: "Communication",
  },
  {
    icon: <CheckCircle2 />,
    title: "Complete Experience",
    text: "The user finishes the journey with a smarter and easier way to discover Jordan.",
    tag: "Done",
  },
];

function App() {
  const [activePage, setActivePage] = useState("team");
  const [menuOpen, setMenuOpen] = useState(true);
  const [qrOpen, setQrOpen] = useState(false);

  const pageAnimation = {
    initial: { opacity: 0, y: 40, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -30, scale: 0.98 },
    transition: { duration: 0.45 },
  };

  return (
    <div className="presentation">
      <aside className={menuOpen ? "sidebar open" : "sidebar closed"}>
        <div className="sidebar-header">
          <div className="brand">
            <MapPinned />
            {menuOpen && <span>JoMap</span>}
          </div>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <div className="menu-list">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={activePage === item.id ? "menu-item active" : "menu-item"}
              onClick={() => setActivePage(item.id)}
            >
              {item.icon}
              {menuOpen && <span>{item.label}</span>}
            </button>
          ))}
        </div>
      </aside>

      <main className={menuOpen ? "content with-sidebar" : "content small-sidebar"}>
        <AnimatePresence mode="wait">
          {activePage === "team" && (
            <motion.section key="team" className="page team-page" {...pageAnimation}>
              <div className="page-badge">
                <Sparkles size={18} />
                Graduation Project Team
              </div>

              <h1 className="main-title">Meet The People Behind JoMap</h1>
              <p className="main-subtitle">
                A creative team working together to build a smart tourism and location
                discovery experience for Jordan.
              </p>

              <motion.div
                className="supervisor-section"
                initial={{ opacity: 0, y: 45 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="supervisor-glow"></div>

                <div className="supervisor-image-wrap">
                  <img src={supervisor.image} alt={supervisor.name} />
                  <div className="crown-icon">
                    <Crown />
                  </div>
                </div>

                <div className="supervisor-info">
                  <span>Academic Supervisor</span>
                  <h2>{supervisor.name}</h2>
                  <p>
                    Guiding and supporting the JoMap team through project planning,
                    development, documentation, and final presentation.
                  </p>
                </div>
              </motion.div>

              <div className="team-section-title">
                <span></span>
                <h2>Development Team</h2>
                <span></span>
              </div>

              <div className="creative-team-grid">
                {teamMembers.map((member, index) => (
                  <motion.div
                    className="creative-member-card"
                    key={index}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.12 }}
                    whileHover={{ y: -12, scale: 1.03 }}
                  >
                    <div className="member-number">0{index + 1}</div>

                    <div className="member-image-ring">
                      <img src={member.image} alt={member.name} />
                    </div>

                    <div className="member-hover-info">
                      <h3>{member.name}</h3>
                      <p>{member.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {activePage === "qr" && (
            <motion.section key="qr" className="page qr-page" {...pageAnimation}>
              <div className="qr-layout">
                <motion.div
                  className="qr-text"
                  initial={{ opacity: 0, x: -80 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="page-badge">
                    <ScanLine size={18} />
                    Audience Attendance
                  </div>

                  <h1 className="main-title">Scan The QR Code</h1>
                  <p className="main-subtitle">
                    Before starting our presentation, attendees can scan this QR code
                    to register attendance and send feedback or questions to the JoMap team.
                  </p>

                  <div className="qr-points">
                    <span>Attendance</span>
                    <span>Questions</span>
                    <span>Feedback</span>
                  </div>
                </motion.div>

                <motion.div
                  className="qr-card animated-qr-card"
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.7 }}
                  onMouseEnter={() => setQrOpen(true)}
                  onClick={() => setQrOpen(true)}
                >
                  <div className="qr-glow"></div>

                  <div className="qr-image-box">
                    <img src="/qrCode/Qr-withLogo.png" alt="Attendance QR Code" />
                    <div className="scan-line"></div>
                  </div>

                  <h3>Hover To Enlarge</h3>
                  <p>Move the mouse over the QR code to scan it easily</p>
                </motion.div>
              </div>

              <AnimatePresence>
                {qrOpen && (
                  <motion.div
                    className="qr-modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setQrOpen(false)}
                  >
                    <motion.div
                      className="qr-modal-card"
                      initial={{ scale: 0.4, rotate: -8 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0.4, rotate: 8 }}
                      transition={{ type: "spring", stiffness: 170, damping: 18 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="qr-modal-title">
                        <QrCode />
                        <span>JoMap Attendance QR</span>
                      </div>

                      <div className="big-qr-box">
                        <img src="/qrCode/Qr-withLogo.png" alt="Big Attendance QR Code" />
                        <div className="big-scan-line"></div>
                      </div>

                      <p>Scan this QR code using your phone camera</p>

                      <button onClick={() => setQrOpen(false)}>Close</button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.section>
          )}

          {activePage === "intro" && (
            <motion.section key="intro" className="page intro-page" {...pageAnimation}>
              <div className="hero-layout">
                <div>
                  <div className="page-badge">Project Name</div>
                  <h1 className="project-title">JoMap</h1>
                  <h2 className="project-slogan">Discover Jordan in a Smarter Way</h2>
                  <p className="project-description">
                    JoMap is a mobile application that helps users explore Jordan’s
                    governorates, tourist attractions, restaurants, hotels, markets,
                    and local places through an interactive and modern platform.
                  </p>

                  <div className="intro-stats">
                    <div>
                      <strong>3</strong>
                      <span>Main Actors</span>
                    </div>
                    <div>
                      <strong>12+</strong>
                      <span>Core Features</span>
                    </div>
                    <div>
                      <strong>100%</strong>
                      <span>Jordan Focused</span>
                    </div>
                  </div>
                </div>

                <motion.div
                  className="phone-preview"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Smartphone size={95} />
                  <h3>Mobile Application</h3>
                  <p>React JS + Spring Boot</p>
                </motion.div>
              </div>
            </motion.section>
          )}

          {activePage === "roadmap" && (
            <motion.section key="roadmap" className="page roadmap-page" {...pageAnimation}>
              <div className="page-badge">
                <Route size={18} />
                User Journey
              </div>

              <h1 className="main-title">JoMap Application Flow</h1>
              <p className="main-subtitle">
                This roadmap explains how users move inside JoMap from opening the app
                until discovering places, saving favorites, writing reviews, and contacting owners.
              </p>

              <div className="roadmap-container">
                <motion.div
                  className="roadmap-line"
                  initial={{ height: 0 }}
                  animate={{ height: "100%" }}
                  transition={{ duration: 1.6, ease: "easeInOut" }}
                />

                {userFlowSteps.map((step, index) => (
                  <motion.div
                    className={index % 2 === 0 ? "roadmap-step left" : "roadmap-step right"}
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -90 : 90 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.13, duration: 0.55 }}
                  >
                    <motion.div
                      className="roadmap-dot"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: index * 0.13 + 0.2,
                        type: "spring",
                        stiffness: 180,
                      }}
                    >
                      {index + 1}
                    </motion.div>

                    <motion.div
                      className="roadmap-card"
                      whileHover={{
                        y: -10,
                        scale: 1.03,
                        rotate: index % 2 === 0 ? -1 : 1,
                      }}
                    >
                      <div className="roadmap-card-glow"></div>

                      <div className="roadmap-icon">{step.icon}</div>

                      <span>{step.tag}</span>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {activePage === "features" && (
            <motion.section key="features" className="page features-page" {...pageAnimation}>
              <div className="page-badge">Application Features</div>
              <h1 className="main-title">What Can JoMap Do?</h1>

              <div className="features-grid">
                {features.map((feature, index) => (
                  <motion.div
                    className="feature-card"
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -12 }}
                  >
                    <div className="feature-icon">{feature.icon}</div>
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {activePage === "screens" && (
            <motion.section key="screens" className="page screens-page" {...pageAnimation}>
              <div className="page-badge">
                <Smartphone size={18} />
                App Screens
              </div>

              <h1 className="main-title">Application Screens</h1>
              <p className="main-subtitle">
                These screens show the main user experience inside JoMap, from opening
                the app to discovering places and managing the user account.
              </p>

              <div className="creative-screens-wrapper">
                {screens.map((screen, index) => (
                  <motion.div
                    className={index % 2 === 0 ? "creative-screen-row" : "creative-screen-row reverse"}
                    key={index}
                    initial={{ opacity: 0, y: 70 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.12 }}
                  >
                    <motion.div
                      className="mobile-mockup"
                      whileHover={{ scale: 1.04, rotate: index % 2 === 0 ? 2 : -2 }}
                    >
                      <div className="phone-notch"></div>
                      <div className="phone-screen">
                        <img src={screen.image} alt={screen.title} />
                      </div>
                    </motion.div>

                    <div className="screen-description-card">
                      <span>{screen.tag}</span>
                      <h2>{screen.title}</h2>
                      <p>{screen.text}</p>

                      <div className="screen-mini-line">
                        <div></div>
                        <small>JoMap Mobile Experience</small>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {activePage === "tech" && (
            <motion.section key="tech" className="page tech-page" {...pageAnimation}>
              <div className="page-badge">System Architecture</div>
              <h1 className="main-title">Technology Stack</h1>

              <div className="tech-box">
                <div className="tech-column">
                  <h2>Frontend</h2>
                  <p>
                    React JS is used to build the user interface with fast navigation,
                    reusable components, and a modern interactive design.
                  </p>
                  <span>React JS</span>
                  <span>Framer Motion</span>
                  <span>Lucide Icons</span>
                </div>

                <div className="connection-line"></div>

                <div className="tech-column">
                  <h2>Backend</h2>
                  <p>
                    Spring Boot provides REST APIs, authentication, business logic,
                    database connection, and email sending service.
                  </p>
                  <span>Spring Boot</span>
                  <span>REST API</span>
                  <span>Email Service</span>
                </div>

                <div className="connection-line"></div>

                <div className="tech-column">
                  <h2>Database & Storage</h2>
                  <p>
                    The system stores users, places, reviews, favorites, reports,
                    and owner location data.
                  </p>
                  <span>Neon Database</span>
                  <span>Firebase Storage</span>
                  <span>PostgreSQL</span>
                </div>
              </div>
            </motion.section>
          )}

          {activePage === "email" && (
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
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;