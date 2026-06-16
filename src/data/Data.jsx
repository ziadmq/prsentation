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
} from "lucide-react";
import { BarChart3 } from "lucide-react";

export const supervisor = {
  name: "محمد زعرور",
  role: "مشرف المشروع",
  image: "/team/Dr.jpg",
};

export const teamMembers = [
  {
    name: "غالب شهاب",
    role: "مطور الواجهة الخلفية (Backend)",
    image: "/team/Me.JPEG",
    icon: Server,
    linkedin: "#",
    description:
      "مسؤول عن بناء خدمات الواجهة الخلفية، التعامل مع المنطق البرمجي لواجهات برمجة التطبيقات (API)، تدفق المصادقة، وربط التطبيق بقاعدة البيانات.",
    skills: ["Spring Boot", "REST API", "Authentication", "Backend Logic"],
  },
  {
    name: "مصعب مكاحلة",
    role: "مسؤول قاعدة البيانات",
    image: "/team/Mous.jpg",
    icon: Database,
    linkedin: "https://www.linkedin.com/in/mousaab-makahleh-480a04340",
    description:
      "مسؤول عن تصميم قاعدة البيانات، تنظيم بيانات التطبيق، إدارة العلاقات، ودعم التكامل مع الواجهة الخلفية.",
    skills: ["Neon DB", "PostgreSQL", "Firebase", "Data Modeling"],
  },
  {
    name: "إياد أبو فارس",
    role: "مطور الواجهة الأمامية (Frontend)",
    image: "/team/Eyad.jpg",
    icon: MonitorSmartphone,
    linkedin: "#",
    description:
      "مسؤول عن بناء شاشات واجهة المستخدم، تحسين هيكل الصفحات، وخلق تجربة بصرية سلسة للمستخدمين.",
    skills: ["React", "UI Design", "Components", "Responsive Design"],
  },
  {
    name: "عبد القادر فروخ",
    role: "دعم الفريق",
    image: "/team/Abd.jpg",
    icon: Handshake,
    linkedin: "#",
    description:
      "يدعم الفريق في تنسيق المشروع، تجهيز المحتوى، دعم الاختبارات، وتحسين جودة العرض النهائي.",
    skills: ["Teamwork", "Testing Support", "Documentation", "Coordination"],
  },
  {
    name: "زياد قفيشة",
    role: "مطور الواجهة الأمامية (Frontend)",
    image: "/team/Zoz.jpg",
    icon: Code2,
    linkedin: "#",
    description:
      "يعمل على تنفيذ الواجهة الأمامية، تنسيق الصفحات، الحركات (Animations)، وجعل واجهة التطبيق أكثر إبداعًا واحترافية.",
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
    title: "خريطة الأردن التفاعلية",
    text: "يمكن للمستخدمين استكشاف محافظات الأردن واكتشاف الأماكن السياحية، المطاعم، الفنادق، والأسواق.",
  },
  {
    icon: Navigation,
    title: "الأماكن القريبة",
    text: "يساعد التطبيق المستخدمين في العثور على الأماكن القريبة بناءً على موقعهم الحالي.",
  },
  {
    icon: Star,
    title: "المراجعات والتقييمات",
    text: "يمكن للمستخدمين تقييم الأماكن، كتابة المراجعات، ومشاركة تجاربهم.",
  },
  {
    icon: Building2,
    title: "لوحة تحكم المالك",
    text: "يمكن للملاك إضافة المواقع، رفع الصور، وتحديث المعلومات الخاصة بأعمالهم.",
  },
  {
    icon: ShieldCheck,
    title: "إدارة النظام",
    text: "يقوم المشرفون بالموافقة على المواقع، إدارة المستخدمين، ومراقبة البلاغات.",
  },
  {
    icon: MessageCircle,
    title: "تواصل مباشر",
    text: "يمكن للمستخدمين التواصل مع أصحاب الأعمال وطرح الأسئلة مباشرة.",
  },
];

export const screens = [
  {
    title: "الشاشة الرئيسية",
    image: "/screens/home.png",
    tag: "نقطة البداية",
    text: "الشاشة الرئيسية التي ترحب بالمستخدمين وتوفر وصولاً سريعًا للمميزات الهامة.",
  },
  {
    title: "الخريطة التفاعلية",
    image: "/screens/map.png",
    tag: "تجربة الخريطة",
    text: "يمكن للمستخدمين استكشاف الأردن باستخدام خريطة تفاعلية مع علامات المواقع.",
  },
  {
    title: "تفاصيل الموقع",
    image: "/screens/details.png",
    tag: "معلومات المكان",
    text: "تعرض الصور، الوصف، التقييمات، المراجعات، وخيارات التواصل لكل مكان.",
  },
  {
    title: "شاشة الملف الشخصي",
    image: "/screens/profile.png",
    tag: "حساب المستخدم",
    text: "يمكن للمستخدمين إدارة بيانات الملف الشخصي، المفضلة، المراجعات، والإعدادات الشخصية.",
  },
];

export const userFlowSteps = [
  {
    icon: Smartphone,
    title: "فتح تطبيق JoMap",
    text: "يفتح المستخدم تطبيق الهاتف المحمول ويبدأ رحلة الاستكشاف.",
    tag: "البداية",
  },
  {
    icon: LogIn,
    title: "تسجيل الدخول / إنشاء حساب",
    text: "ينشئ المستخدم حسابًا أو يسجل الدخول للوصول إلى المميزات المخصصة.",
    tag: "الحساب",
  },
  {
    icon: Map,
    title: "استكشاف خريطة الأردن",
    text: "يتصفح المستخدم محافظات الأردن باستخدام الخريطة التفاعلية.",
    tag: "الخريطة",
  },
  {
    icon: Search,
    title: "البحث عن الأماكن",
    text: "يمكن للمستخدم البحث عن الأماكن السياحية، المطاعم، الفنادق، أو الأسواق.",
    tag: "استكشاف",
  },
  {
    icon: MapPin,
    title: "اختيار الموقع",
    text: "ينقر المستخدم على علامة الموقع أو البطاقة لفتح تفاصيل المكان.",
    tag: "الموقع",
  },
  {
    icon: FileText,
    title: "عرض التفاصيل",
    text: "يعرض التطبيق الصور، الوصف، ساعات العمل، التقييم، ومعلومات الموقع.",
    tag: "التفاصيل",
  },
  {
    icon: Heart,
    title: "حفظ / تقييم",
    text: "يمكن للمستخدم إضافة المكان إلى المفضلة ومشاركة مراجعة أو تقييم.",
    tag: "تفاعل",
  },
  {
    icon: PhoneCall,
    title: "التواصل مع المالك",
    text: "يمكن للمستخدم التواصل مع صاحب المكان لطرح الأسئلة أو طلب الخدمات.",
    tag: "تواصل",
  },
  {
    icon: CheckCircle2,
    title: "اكتمال التجربة",
    text: "ينهي المستخدم رحلته بطريقة أسهل وأكثر ذكاءً لاكتشاف الأردن.",
    tag: "تم",
  },
];
