import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  const totals = [
    { labelKey: "metricsPage.completedTasks", value: "225", icon: CheckCircle2 },
    { labelKey: "metricsPage.codeComments", value: "450", icon: MessageSquareText },
    { labelKey: "metricsPage.codeLines", value: "50K", icon: Code2 },
    { labelKey: "metricsPage.projectFiles", value: "186", icon: FileCode2 },
  ];

  const repositories = [
    {
      name: "Android Frontend",
      layer: "Kotlin Mobile Application",
      icon: Smartphone,
      repoUrl: "https://github.com/ziadmq/JoMap",
      completion: 88,
      stats: [
        { labelKey: "metricsPage.tasks", value: "120" },
        { labelKey: "metricsPage.comments", value: "250" },
        { label: "Kotlin Lines", value: "40K" },
        { labelKey: "metricsPage.screens", value: "32" },
      ],
    },
    {
      name: "Backend API",
      layer: "Java Spring Boot Services",
      icon: Server,
      repoUrl: "https://github.com/ghalebshhab/GraduationProjectv1",
      completion: 92,
      stats: [
        { labelKey: "metricsPage.tasks", value: "105" },
        { labelKey: "metricsPage.comments", value: "200" },
        { label: "Java Lines", value: "12K" },
        { label: "APIs", value: "150" },
      ],
    },
  ];

  const workFlow = [
    t("metricsPage.workflow.planning"),
    "UI Design",
    "Android",
    "Backend",
    "Database",
    "Testing",
    t("metricsPage.workflow.delivery"),
  ];

  return (
    <section className="metrics-page">
      <div className="metrics-orbit orbit-one"></div>
      <div className="metrics-orbit orbit-two"></div>

      <div className="metrics-hero">
        <div className="metrics-badge">
          <BarChart3 size={16} />
          {t("metricsPage.badge")}
        </div>

        <h1>{t("metricsPage.title")}</h1>
        <p>{t("metricsPage.subtitle")}</p>
      </div>

      <div className="metrics-total-grid">
        {totals.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              className="metrics-total-card"
              key={item.labelKey}
              style={{ "--delay": `${index * 0.12}s` }}
            >
              <div className="metrics-total-icon">
                <Icon size={22} />
              </div>

              <h3>{item.value}</h3>
              <p>{t(item.labelKey)}</p>
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
                  <div className="repo-stat-box" key={stat.labelKey || stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.labelKey ? t(stat.labelKey) : stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="repo-progress-area">
                <div className="repo-progress-info">
                  <span>{t("metricsPage.completionRate")}</span>
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
                {t("metricsPage.openRepo")}
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
            <h2>{t("metricsPage.repoLinksTitle")}</h2>
            <p>{t("metricsPage.repoLinksSubtitle")}</p>
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
            <h2>{t("metricsPage.journeyTitle")}</h2>
            <p>{t("metricsPage.journeySubtitle")}</p>
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
          <p>{t("metricsPage.impactText")}</p>
          <Braces size={22} />
        </div>
      </div>
    </section>
  );
}

export default ProjectMetrics;