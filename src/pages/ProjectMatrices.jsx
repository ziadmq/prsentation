import {
  Activity,
  BarChart3,
  Braces,
  CheckCircle2,
  Code2,
  ExternalLink,
  FileCode2,
  GitBranch,
  Layers3,
  MessageSquareText,
  Server,
  Smartphone,
} from "lucide-react";

function ProjectMetrics() {
  const totals = [
    { label: "المهام المكتملة", value: "225", icon: CheckCircle2 },
    { label: "تعليقات الكود", value: "450", icon: MessageSquareText },
    { label: "أسطر الكود", value: "50K", icon: Code2 },
    { label: "ملفات المشروع", value: "186", icon: FileCode2 },
  ];

  const repositories = [
    {
      name: "Android Frontend",
      layer: "Kotlin Mobile Application",
      icon: Smartphone,
      repoUrl: "https://github.com/ziadmq/JoMap",
      completion: 88,
      stats: [
        { label: "المهام", value: "120" },
        { label: "التعليقات", value: "250" },
        { label: "Kotlin Lines", value: "40K" },
        { label: "الشاشات", value: "32" },
      ],
    },
    {
      name: "Backend API",
      layer: "Java Spring Boot Services",
      icon: Server,
      repoUrl: "https://github.com/ghalebshhab/GraduationProjectv1",
      completion: 92,
      stats: [
        { label: "المهام", value: "105" },
        { label: "التعليقات", value: "200" },
        { label: "Java Lines", value: "12K" },
        { label: "APIs", value: "150" },
      ],
    },
  ];

  const workFlow = [
    "التخطيط",
    "UI Design",
    "Android",
    "Backend",
    "Database",
    "Testing",
    "التسليم",
  ];

  return (
    <section className="metrics-page" dir="rtl">
      <div className="metrics-orbit orbit-one"></div>
      <div className="metrics-orbit orbit-two"></div>

      <div className="metrics-hero">
        <div className="metrics-badge">
          <BarChart3 size={16} />
          تحليلات عمل المشروع
        </div>

        <h1>إحصائيات تطوير JoMap</h1>
        <p>
          ملخص بصري يوضح العمل الحقيقي على مشروعنا عبر Android Frontend،
          وJava Backend، وAPIs، وتعليقات الكود، وملفات المشروع، والمهام
          المكتملة.
        </p>
      </div>

      <div className="metrics-total-grid">
        {totals.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              className="metrics-total-card"
              key={item.label}
              style={{ "--delay": `${index * 0.12}s` }}
            >
              <div className="metrics-total-icon">
                <Icon size={22} />
              </div>

              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          );
        })}
      </div>

      <div className="repo-showcase-grid">
        {repositories.map((repo, index) => {
          const Icon = repo.icon;

          return (
            <article
              className="repo-showcase-card"
              key={repo.name}
              style={{ "--delay": `${index * 0.18}s` }}
            >
              <div className="repo-card-glow"></div>

              <div className="repo-card-head">
                <div className="repo-icon-box">
                  <Icon size={28} />
                </div>

                <div>
                  <span className="repo-number">0{index + 1}</span>
                  <h2>{repo.name}</h2>
                  <p>{repo.layer}</p>
                </div>
              </div>

              <div className="repo-stats-grid">
                {repo.stats.map((stat) => (
                  <div className="repo-stat-box" key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="repo-progress-area">
                <div className="repo-progress-info">
                  <span>نسبة الإنجاز</span>
                  <strong>{repo.completion}%</strong>
                </div>

                <div className="repo-progress-track">
                  <div
                    className="repo-progress-fill"
                    style={{ "--progress": `${repo.completion}%` }}
                  ></div>
                </div>
              </div>

              <a
                className="repo-link-btn"
                href={repo.repoUrl}
                target="_blank"
                rel="noreferrer"
              >
                <GitBranch size={19} />
                فتح Repository
                <ExternalLink size={16} />
              </a>
            </article>
          );
        })}
      </div>

      <div className="repo-access-panel">
        <div className="repo-access-title">
          <GitBranch size={24} />
          <div>
            <h2>روابط Repository</h2>
            <p>روابط مباشرة إلى Source Code المستخدم في بناء JoMap.</p>
          </div>
        </div>

        <div className="repo-link-list">
          {repositories.map((repo) => (
            <a
              href={repo.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="repo-mini-link"
              key={repo.name}
            >
              <GitBranch size={18} />
              <span>{repo.name}</span>
              <ExternalLink size={15} />
            </a>
          ))}
        </div>
      </div>

      <div className="metrics-bottom-panel">
        <div className="metrics-bottom-title">
          <Layers3 size={24} />
          <div>
            <h2>رحلة التطوير</h2>
            <p>من فكرة المشروع إلى Mobile Application يعمل بشكل كامل.</p>
          </div>
        </div>

        <div className="journey-line">
          {workFlow.map((step, index) => (
            <div
              className="journey-step"
              key={step}
              style={{ "--delay": `${index * 0.14}s` }}
            >
              <div className="journey-dot">
                <GitBranch size={15} />
              </div>
              <span>{step}</span>
            </div>
          ))}
        </div>

        <div className="impact-card">
          <Activity size={22} />
          <p>
            هذه الإحصائيات توضح حجم العمل الجماعي، والتنفيذ، والاختبار،
            والتوثيق، والتحسينات التي تم إنجازها خلال مشروع JoMap.
          </p>
          <Braces size={22} />
        </div>
      </div>
    </section>
  );
}

export default ProjectMetrics;