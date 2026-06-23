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
  Lock,
  PlusCircle,
  Calendar,
  TrendingUp,
  Eye,
  ShieldAlert,
  BadgePlus,
  Settings,
  Check,
  BarChart3,
  Compass,
  Tag,
  Bell,
  GitMerge,
  Workflow,
} from "lucide-react";

export const supervisor = {
  nameKey: "supervisor.name",
  roleKey: "supervisor.role",
  image: "/team/Dr.jpg",
};

export const teamMembers = [
  {
    nameKey: "teamMembers.ghaleb.name",
    roleKey: "teamMembers.ghaleb.role",
    image: "/team/Me.jpg",
    icon: Server,
    linkedin: "#",
    descriptionKey: "teamMembers.ghaleb.description",
    skills: ["Spring Boot", "REST API", "Authentication", "Backend Logic"],
  },
  {
    nameKey: "teamMembers.musaab.name",
    roleKey: "teamMembers.musaab.role",
    image: "/team/Mousaab Makahleh.jpg",
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
    image: "/team/Abdalqader.jpg",
    icon: Handshake,
    linkedin: "#",
    descriptionKey: "teamMembers.abd.description",
    skills: ["Spring Boot", "Testing Support", "REST API", "Coordination" , "Kotlin"],
  },
  {
    nameKey: "teamMembers.ziad.name",
    roleKey: "teamMembers.ziad.role",
    image: "/team/Ziad Qafisheh.jpg",
    icon: Code2,
    linkedin: "#",
    descriptionKey: "teamMembers.ziad.description",
    skills: ["React", "CSS", "Animations", "Frontend Styling"],
  },
];

export const menuItems = [
  { id: "qr", labelKey: "menu.qr", icon: QrCode },
  { id: "intro", labelKey: "menu.intro", icon: Home },
  { id: "screens", labelKey: "menu.screens", icon: Image },
  { id: "roadmap", labelKey: "menu.roadmap", icon: Route },
  { id: "ownerFlow", labelKey: "menu.ownerFlow", icon: Building2 },
  { id: "adminFlow", labelKey: "menu.adminFlow", icon: ShieldCheck },
  { id: "integration", labelKey: "menu.integration", icon: GitMerge },
  { id: "build", labelKey: "menu.build", icon: Hammer },
  { id: "metrics", labelKey: "menu.metrics", icon: BarChart3 },
  { id: "future", labelKey: "menu.future", icon: Compass },
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

export const screenCategories = [
  {
    categoryKey: "screens.categories.auth",
    screens: [
      { key: "screens.splash", image: "/auth screen/photo_2026-06-23_07-22-23.jpg" },
      { key: "screens.login", image: "/auth screen/photo_2026-06-23_07-22-27.jpg" },
      { key: "screens.registerTop", image: "/auth screen/photo_2026-06-23_07-22-24.jpg" },
      { key: "screens.registerBottom", image: "/auth screen/photo_2026-06-23_07-22-29.jpg" },
      { key: "screens.forgotPassword", image: "/auth screen/photo_2026-06-23_07-22-31.jpg" },
      { key: "screens.verifyOtp", image: "/auth screen/photo_2026-06-23_07-22-26.jpg" },
    ],
  },
  {
    categoryKey: "screens.categories.search",
    screens: [
      { key: "screens.searchLocations", image: "/search/photo_2026-06-23_07-29-22.jpg" },
      { key: "screens.searchOrganizations", image: "/search/photo_2026-06-23_07-29-20.jpg" },
      { key: "screens.searchUsers", image: "/search/photo_2026-06-23_07-29-18.jpg" },
      { key: "screens.searchActivities", image: "/search/photo_2026-06-23_07-29-15.jpg" },
      { key: "screens.searchActivities2", image: "/search/photo_2026-06-23_07-29-17.jpg" },
      { key: "screens.searchOffers", image: "/search/photo_2026-06-23_07-29-14.jpg" },
    ],
  },
  {
    categoryKey: "screens.categories.settings",
    screens: [
      { key: "screens.userProfile", image: "/SEETINGS AND PROFILE/photo_2026-06-23_07-26-01.jpg" },
      { key: "screens.settingsExplore", image: "/SEETINGS AND PROFILE/photo_2026-06-23_07-25-59.jpg" },
      { key: "screens.settingsSocial", image: "/SEETINGS AND PROFILE/photo_2026-06-23_07-25-58.jpg" },
      { key: "screens.settingsSupport", image: "/SEETINGS AND PROFILE/photo_2026-06-23_07-25-57.jpg" },
    ],
  },
  {
    categoryKey: "screens.categories.community",
    screens: [
      { key: "screens.homeFeed", image: "/community/photo_2026-06-23_07-34-26.jpg" },
      { key: "screens.savedPosts", image: "/community/photo_2026-06-23_07-34-22.jpg" },
      { key: "screens.savedLocations", image: "/community/photo_2026-06-23_07-34-23.jpg" },
      { key: "screens.notifications", image: "/community/photo_2026-06-23_07-34-25.jpg" },
      { key: "screens.activitiesFeed", image: "/community/photo_2026-06-23_07-34-20.jpg" },
    ],
  },
  {
    categoryKey: "screens.categories.location",
    screens: [
      { key: "screens.locationHeader", image: "/location/photo_2026-06-23_07-36-36.jpg" },
      { key: "screens.locationDashboard", image: "/location/photo_2026-06-23_07-36-35.jpg" },
      { key: "screens.locationManage", image: "/location/photo_2026-06-23_07-36-32.jpg" },
      { key: "screens.locationOverview", image: "/location/photo_2026-06-23_07-36-33.jpg" },
    ],
  },
  {
    categoryKey: "screens.categories.offer",
    screens: [
      { key: "screens.offerDashboardOverview", image: "/offer/photo_2026-06-23_07-38-46.jpg" },
      { key: "screens.offerDashboardActive", image: "/offer/photo_2026-06-23_07-38-45.jpg" },
      { key: "screens.offerDashboardExpired", image: "/offer/photo_2026-06-23_07-38-43.jpg" },
      { key: "screens.offerDetailStats", image: "/offer/photo_2026-06-23_07-38-40.jpg" },
    ],
  },
  {
    categoryKey: "screens.categories.activityExplorer",
    screens: [
      { key: "screens.activityDetail", image: "/activity explorer/photo_2026-06-23_07-42-30.jpg" },
      { key: "screens.activityRequirements", image: "/activity explorer/photo_2026-06-23_07-42-28.jpg" },
      { key: "screens.activityRegister", image: "/activity explorer/photo_2026-06-23_07-42-25.jpg" },
      { key: "screens.activityFeedCommunity", image: "/activity explorer/photo_2026-06-23_07-42-29.jpg" },
      { key: "screens.activityRegisterSuccess", image: "/activity explorer/photo_2026-06-23_07-42-26.jpg" },
    ],
  },
  {
    categoryKey: "screens.categories.createPromotion",
    screens: [
      { key: "screens.createOfferPart1", image: "/add offer and activity/photo_2026-06-23_07-40-18.jpg" },
      { key: "screens.createOfferPart2", image: "/add offer and activity/photo_2026-06-23_07-40-19.jpg" },
      { key: "screens.createActivityPart1", image: "/add offer and activity/photo_2026-06-23_07-40-22.jpg" },
      { key: "screens.createActivityPart2", image: "/add offer and activity/photo_2026-06-23_07-40-21.jpg" },
    ],
  },
  {
    categoryKey: "screens.categories.activityManagement",
    screens: [
      { key: "screens.activityNotifications", image: "/activitymangment/photo_2026-06-23_07-45-49.jpg" },
      { key: "screens.activityManageSeats", image: "/activitymangment/photo_2026-06-23_07-45-51.jpg" },
      { key: "screens.activityApprovedSchedule", image: "/activitymangment/photo_2026-06-23_07-45-53.jpg" },
      { key: "screens.activityHostPublishing", image: "/activitymangment/photo_2026-06-23_07-46-06.jpg" },
      { key: "screens.activityReviewsDashboard", image: "/activitymangment/photo_2026-06-23_07-46-05.jpg" },
    ],
  },
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
  { icon: Tag, key: "userFlow.viewDetails" },
  { icon: Calendar, key: "userFlow.saveRate" },
  { icon: MessageCircle, key: "userFlow.contactOwner" },
  { icon: CheckCircle2, key: "userFlow.complete" },
];

export const ownerFlowStepKeys = [
  { icon: FileText, key: "ownerFlow.registerBusiness" },
  { icon: LogIn, key: "ownerFlow.login" },
  { icon: BarChart3, key: "ownerFlow.dashboard" },
  { icon: MapPin, key: "ownerFlow.manageLocation" },
  { icon: Calendar, key: "ownerFlow.addEvent" },
  { icon: Users, key: "ownerFlow.manageSubscribers" },
  { icon: Tag, key: "ownerFlow.createOffer" },
  { icon: Bell, key: "ownerFlow.notifications" },
  { icon: Star, key: "ownerFlow.viewReviews" },
  { icon: CheckCircle2, key: "ownerFlow.complete" },
];

export const adminFlowStepKeys = [
  { icon: Lock, key: "adminFlow.login" },
  { icon: BarChart3, key: "adminFlow.analytics" },
  { icon: Building2, key: "adminFlow.manageLocations" },
  { icon: Calendar, key: "adminFlow.manageEvents" },
  { icon: Users, key: "adminFlow.manageUsers" },
  { icon: ShieldAlert, key: "adminFlow.moderation" },
  { icon: CheckCircle2, key: "adminFlow.complete" },
];
