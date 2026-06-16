import {
  Users,
  QrCode,
  Home,
  Star,
  Image,
  Code2,
  Mail,
  Route,
  MapPinned,
  Navigation,
  Building2,
  ShieldCheck,
  MessageCircle,
  Smartphone,
  LogIn,
  Search,
  Map,
  MapPin,
  FileText,
  Heart,
  PhoneCall,
  CheckCircle2,
  Server,
  Database,
  MonitorSmartphone,
  Handshake,
} from "lucide-react";

export const supervisor = {
  name: "Mohammad Zarour",
  role: "Project Supervisor",
  image: "/team/Dr.jpg",
};

export const teamMembers = [
  {
    name: "Ghaleb Shhab",
    role: "Backend Developer",
    image: "/team/Me.JPEG",
    icon: Server,
    linkedin: "#",
    description:
      "Responsible for building backend services, handling API logic, authentication flow, and connecting the application with the database.",
    skills: ["Spring Boot", "REST API", "Authentication", "Backend Logic"],
  },
  {
    name: "Mousaab Makahleh",
    role: "Database Administrator",
    image: "/team/Mous.jpg",
    icon: Database,
    linkedin: "https://www.linkedin.com/in/mousaab-makahleh-480a04340",
    description:
      "Responsible for database design, organizing application data, managing relationships, and supporting backend integration.",
    skills: ["Neon DB", "PostgreSQL", "Firebase", "Data Modeling"],
  },
  {
    name: "Eyad Abu Fares",
    role: "Frontend Developer",
    image: "/team/Eyad.jpg",
    icon: MonitorSmartphone,
    linkedin: "#",
    description:
      "Responsible for building user interface screens, improving page structure, and creating a smooth visual experience for users.",
    skills: ["React", "UI Design", "Components", "Responsive Design"],
  },
  {
    name: "Abd-Alqader Froukh",
    role: "Team Support",
    image: "/team/Abd.jpg",
    icon: Handshake,
    linkedin: "#",
    description:
      "Supports the team in project coordination, content preparation, testing support, and improving the final presentation quality.",
    skills: ["Teamwork", "Testing Support", "Documentation", "Coordination"],
  },
  {
    name: "Zyad Qafisheh",
    role: "Frontend Developer",
    image: "/team/Zoz.jpg",
    icon: Code2,
    linkedin: "#",
    description:
      "Works on frontend implementation, page styling, animations, and making the application interface more creative and professional.",
    skills: ["React", "CSS", "Animations", "Frontend Styling"],
  },
];

export const menuItems = [
  { id: "team", label: "Team", icon: Users },
  { id: "qr", label: "Attendance QR", icon: QrCode },
  { id: "intro", label: "Project Intro", icon: Home },
  { id: "roadmap", label: "User Flow", icon: Route },
  { id: "features", label: "Features", icon: Star },
  { id: "screens", label: "Screens", icon: Image },
  { id: "tech", label: "Technology", icon: Code2 },
  { id: "email", label: "Email Service", icon: Mail },
];

export const features = [
  {
    icon: MapPinned,
    title: "Interactive Jordan Map",
    text: "Users can explore Jordan governorates and discover tourism places, restaurants, hotels, and markets.",
  },
  {
    icon: Navigation,
    title: "Nearby Places",
    text: "The app helps users find nearby places based on their current location.",
  },
  {
    icon: Star,
    title: "Reviews & Ratings",
    text: "Users can rate places, write reviews, and share their experiences.",
  },
  {
    icon: Building2,
    title: "Owner Dashboard",
    text: "Owners can add locations, upload pictures, and update information.",
  },
  {
    icon: ShieldCheck,
    title: "Admin Management",
    text: "Admins approve locations, manage users, and moderate reports.",
  },
  {
    icon: MessageCircle,
    title: "Direct Communication",
    text: "Users can contact owners and ask questions directly.",
  },
];

export const screens = [
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

export const userFlowSteps = [
  {
    icon: Smartphone,
    title: "Open JoMap",
    text: "The user opens the mobile application and starts the exploration journey.",
    tag: "Start",
  },
  {
    icon: LogIn,
    title: "Login / Sign Up",
    text: "The user creates an account or logs in to access personalized features.",
    tag: "Account",
  },
  {
    icon: Map,
    title: "Explore Jordan Map",
    text: "The user browses Jordan governorates using the interactive map.",
    tag: "Map",
  },
  {
    icon: Search,
    title: "Search Places",
    text: "The user can search for tourism places, restaurants, hotels, or markets.",
    tag: "Discover",
  },
  {
    icon: MapPin,
    title: "Select Location",
    text: "The user clicks on a location marker or card to open its details.",
    tag: "Location",
  },
  {
    icon: FileText,
    title: "View Details",
    text: "The app displays images, description, opening hours, rating, and location info.",
    tag: "Details",
  },
  {
    icon: Heart,
    title: "Save / Review",
    text: "The user can add the place to favorites and share a review or rating.",
    tag: "Interaction",
  },
  {
    icon: PhoneCall,
    title: "Contact Owner",
    text: "The user can communicate with the place owner for questions or services.",
    tag: "Communication",
  },
  {
    icon: CheckCircle2,
    title: "Complete Experience",
    text: "The user finishes the journey with a smarter and easier way to discover Jordan.",
    tag: "Done",
  },
];
