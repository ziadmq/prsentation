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
    { label: "Completed Tasks", value: "225", icon: CheckCircle2 },
    { label: "Code Commets", value: "450", icon: MessageSquareText },
    { label: "Lines of Code", value: "50K", icon: Code2 },
    { label: "Project Files", value: "186", icon: FileCode2 },
  ];

  const repositories = [
    {
      name: "Android Frontend",
      layer: "Kotlin Mobile Application",
      icon: Smartphone,
      repoUrl: "PUT_FRONTEND_REPO_LINK_HERE",
      completion: 88,
      stats: [
        { label: "Tasks", value: "120" },
        { label: "Commets", value: "250" },
        { label: "Kotlin Lines", value: "40K" },
        { label: "Screens", value: "32" },
      ],
    },
    {
      name: "Backend API",
      layer: "Java Spring Boot Services",
      icon: Server,
      repoUrl: "PUT_BACKEND_REPO_LINK_HERE",
      completion: 92,
      stats: [
        { label: "Tasks", value: "105" },
        { label: "Comments", value: "200" },
        { label: "Java Lines", value: "12K" },
        { label: "APIs", value: "150" },
      ],
    },
  ];

  const workFlow = [
    "Planning",
    "UI Design",
    "Android",
    "Backend",
    "Database",
    "Testing",
    "Delivery",
  ];

  return (
    <section className="metrics-page">
      <div className="metrics-orbit orbit-one"></div>
      <div className="metrics-orbit orbit-two"></div>

      <div className="metrics-hero">
        <div className="metrics-badge">
          <BarChart3 size={16} />
          Project Work Analytics
        </div>

        <h1>JoMap Development Metrics</h1>
        <p>
          A visual summary of our real project work across the Android frontend,
          Java backend, APIs, comments, code files, and completed tasks.
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
                  <span>Completion</span>
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
                Open Repository
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
            <h2>Repository Access</h2>
            <p>Direct links to the source code used to build JoMap.</p>
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
            <h2>Development Journey</h2>
            <p>From idea to working mobile application.</p>
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
            These metrics show the teamwork, implementation, testing,
            documentation, and improvements completed during the JoMap project.
          </p>
          <Braces size={22} />
        </div>
      </div>
    </section>
  );
}

export default ProjectMetrics;