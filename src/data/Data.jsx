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
  Hammer,
  Wrench,
  Lightbulb,
} from "lucide-react";
import { BarChart3 } from "lucide-react";

export const supervisor = {
  nameKey: "supervisor.name",
  roleKey: "supervisor.role",
  image: "/team/Dr.jpg",
};

export const teamMembers = [
  {
    nameKey: "teamMembers.ghaleb.name",
    roleKey: "teamMembers.ghaleb.role",
    image: "/team/Me.JPEG",
    icon: Server,
    linkedin: "#",
    descriptionKey: "teamMembers.ghaleb.description",
    skills: ["Spring Boot", "REST API", "Authentication", "Backend Logic"],
  },
  {
    nameKey: "teamMembers.musaab.name",
    roleKey: "teamMembers.musaab.role",
    image: "/team/Mous.jpg",
    icon: Database,
    linkedin: "https://www.linkedin.com/in/mousaab-makahleh-480a04340",
    descriptionKey: "teamMembers.musaab.description",
    skills: ["Neon DB", "PostgreSQL", "Firebase", "Data Modeling"],
  },
  {
    nameKey: "teamMembers.eyad.name",
    roleKey: "teamMembers.eyad.role",
    image: "/team/Eyad.jpg",
    icon: MonitorSmartphone,
    linkedin: "#",
    descriptionKey: "teamMembers.eyad.description",
    skills: ["React", "UI Design", "Components", "Responsive Design"],
  },
  {
    nameKey: "teamMembers.abd.name",
    roleKey: "teamMembers.abd.role",
    image: "/team/Abd.jpg",
    icon: Handshake,
    linkedin: "#",
    descriptionKey: "teamMembers.abd.description",
    skills: ["Spring Boot", "Testing Support", "REST API", "Coordination" , "Kotlin"],
  },
  {
    nameKey: "teamMembers.ziad.name",
    roleKey: "teamMembers.ziad.role",
    image: "/team/Zoz.jpg",
    icon: Code2,
    linkedin: "#",
    descriptionKey: "teamMembers.ziad.description",
    skills: ["React", "CSS", "Animations", "Frontend Styling"],
  },
];

export const menuItems = [
  { id: "intro", labelKey: "menu.intro", icon: Home },
  { id: "screens", labelKey: "menu.screens", icon: Image },
  { id: "build", labelKey: "menu.build", icon: Hammer },
  { id: "tools", labelKey: "menu.tools", icon: Wrench },
  { id: "roadmap", labelKey: "menu.roadmap", icon: Route },
  { id: "metrics", labelKey: "menu.metrics", icon: BarChart3 },
  { id: "team", labelKey: "menu.team", icon: Users },
];

export const featureKeys = [
  { icon: MapPinned, key: "features.interactiveMap" },
  { icon: Navigation, key: "features.nearbyPlaces" },
  { icon: Star, key: "features.reviews" },
  { icon: Building2, key: "features.ownerDashboard" },
  { icon: ShieldCheck, key: "features.systemAdmin" },
  { icon: MessageCircle, key: "features.directComm" },
];

export const screenKeys = [
  { key: "screens.home", image: "/screens/home.png" },
  { key: "screens.map", image: "/screens/map.png" },
  { key: "screens.details", image: "/screens/details.png" },
  { key: "screens.profile", image: "/screens/profile.png" },
];

export const userFlowStepKeys = [
  { icon: Smartphone, key: "userFlow.openApp" },
  { icon: LogIn, key: "userFlow.login" },
  { icon: Map, key: "userFlow.explore" },
  { icon: Search, key: "userFlow.search" },
  { icon: MapPin, key: "userFlow.selectLocation" },
  { icon: FileText, key: "userFlow.viewDetails" },
  { icon: Heart, key: "userFlow.saveRate" },
  { icon: PhoneCall, key: "userFlow.contactOwner" },
  { icon: CheckCircle2, key: "userFlow.complete" },
];
