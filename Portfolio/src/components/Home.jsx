export default function Home() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const GITHUB_USER = "shubhampatil496";

  const skills = {
    "Programming Languages": ["JavaScript", "Python", "Java"],
    "Web Development": ["HTML", "CSS", "React.js", "Next.Js", "Node.js", "Express.js", "EJS"],
    "Database": ["MongoDB", "MySQL"],
    "Other Tools": ["Git & GitHub", "REST APIs", "GSAP"],
  };

  const projects = [
    {
      title: "Deepfake Detection System",
      description:
        "A system that detects fake audio, video, and images using AI techniques. Includes a web UI for interaction.",
      emoji: "1️⃣",
      repo: "deepFake_ui",
    },
    {
      title: "Quora Dashboard",
      description:
        "Learn REST API by building a simple Quora-style dashboard. Built with EJS and Express.",
      emoji: "2️⃣",
      repo: "quora",
    },
    {
      title: "KumbhStay",
      description:
        "Web application built with JavaScript for stay/booking management.",
      emoji: "3️⃣",
      repo: "KumbhStay",
    },
    {
      title: "Blood Management System",
      description:
        "A PHP-based system for managing blood donation and inventory.",
      emoji: "4️⃣",
      repo: "Blood-Management",
    },
    {
      title: "MyStocks",
      description:
        "Stock tracking or management application built with JavaScript.",
      emoji: "5️⃣",
      repo: "MyStocks",
    },
    {
      title: "GSAP Animations",
      description:
        "Interactive web animations and demos using GSAP (GreenSock Animation Platform).",
      emoji: "6️⃣",
      repo: "GSAP",
    },
  ];

  const featuredProjects = [
    { title: "MyStocks", tag: "JavaScript", repo: "MyStocks" },
    { title: "Quora Dashboard", tag: "REST API · EJS", repo: "quora" },
    { title: "KumbhStay", tag: "JavaScript", repo: "KumbhStay" },
  ];

  const learning = [
    "DevOps & CI/CD",
    "Advanced React & Next.js",
    "Open Source contribution",
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-bg">
          <img className="home-hero-img" src="/tech.avif" alt="" />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-heading">
            Hi, I'm Shubham Patil <span className="hero-wave">👋</span>
          </h1>
          <p className="hero-subheading">
            Full-Stack MERN Developer & Computer Engineering Student
          </p>
          <p className="hero-intro">
            I build web apps using MongoDB, Express, React & Node.js from India.
            Learning DevOps ⚙️ · Open Source Contributor 🌍 · Always improving.
            I enjoy working on real-world projects and modern web tools.
          </p>
          <div className="hero-buttons">
            <button
              type="button"
              className="btn-hero btn-projects"
              onClick={() => scrollTo("projects")}
            >
              View My Projects
            </button>
            <button
              type="button"
              className="btn-hero btn-contact"
              onClick={() => scrollTo("contact")}
            >
              Contact Me
            </button>
          </div>
          <a
            href="/Shubham.pdf"
            download
            className="btn-hero btn-resume"
          >
            📜 Download Resume
          </a>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p>
              Hi, I'm <strong>Shubham Patil</strong>, a third-year Computer
              Engineering student from India who is passionate about learning new
              technologies and building useful software applications. My main
              interests are in web development, software engineering, and
              data‑driven applications.
            </p>
            <p>
              I enjoy exploring how technology can solve real-world problems.
              Currently, I am learning and working with technologies like
              JavaScript, React.js, Node.js, and REST APIs to build modern web
              applications. I also have experience working with Android Studio
              using Java to develop mobile applications.
            </p>
            <p>
              I strongly believe that the best way to learn programming is by
              building practical projects, so I continuously work on projects
              that help me improve my skills and understand real-world
              development practices. Some of the areas I am currently exploring
              include Full Stack Web Development, Data Science and Data Analysis,
              Android Application Development, and REST API Development.
            </p>
            <p>
              I have also participated in hackathons, where I collaborated with
              teams and built functional software solutions under time
              constraints. These experiences have helped me improve my
              problem‑solving, teamwork, and development skills. One of my goals
              is to build software products that can make everyday life easier,
              especially platforms that connect services and people using
              technology.
            </p>
            <p>
              My learning philosophy is simple: learn by building projects, write
              clean and organized code, continuously improve problem‑solving
              skills, and stay curious about new technologies. Beyond coding, I
              enjoy exploring software architecture, improving my development
              workflow, and experimenting with new ideas to turn them into
              working applications.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section section-alt">
        <div className="container">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skill-card">
                <h3 className="skill-category">{category}</h3>
                <ul className="skill-list">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="featured" className="section">
        <div className="container">
          <h2 className="section-title">🚀 Featured Projects</h2>
          <div className="featured-grid">
            {featuredProjects.map((proj) => (
              <a
                key={proj.title}
                href={`https://github.com/${GITHUB_USER}/${proj.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="featured-card featured-card-link"
              >
                <span className="featured-tag">{proj.tag}</span>
                <h3 className="featured-title">{proj.title}</h3>
                <span className="featured-arrow">→ View on GitHub</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Stats */}
      <section id="github-stats" className="section section-alt">
        <div className="container">
          <h2 className="section-title">📈 GitHub Stats</h2>
          <div className="github-stats-wrap">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USER}&show_icons=true&theme=dark&hide_border=true`}
              alt="GitHub Stats"
              className="github-stats-img"
            />
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USER}&theme=dark`}
              alt="GitHub Streak"
              className="github-stats-img"
            />
          </div>
          <a
            href={`https://github.com/${GITHUB_USER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="github-profile-link"
          >
            @{GITHUB_USER} on GitHub →
          </a>
        </div>
      </section>

      {/* Currently Learning */}
      <section id="learning" className="section">
        <div className="container">
          <h2 className="section-title">🧠 What I Am Currently Learning</h2>
          <ul className="learning-list">
            {learning.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section section-alt">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <div className="projects-list">
            {projects.map((proj) => (
              <div key={proj.title} className="project-card">
                <div className="project-card-head">
                  <h3 className="project-title">
                    {proj.emoji} {proj.title}
                  </h3>
                  {proj.repo && (
                    <a
                      href={`https://github.com/${GITHUB_USER}/${proj.repo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      View on GitHub →
                    </a>
                  )}
                </div>
                <p className="project-desc">{proj.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Contact Me</h2>
          <p className="contact-intro">
            I am always open to learning opportunities, collaborations, and
            internships.
          </p>
          <div className="contact-details">
            <a href="mailto:your-email@gmail.com">📧 Email: patilshubham1261@gmail.com</a>
            <a
              href={`https://github.com/${GITHUB_USER}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              🐙 GitHub: github.com/{GITHUB_USER}
            </a>
            <a
              href="https://linkedin.com/in/shubhamrpatil"
              target="_blank"
              rel="noopener noreferrer"
            >
              💼 LinkedIn: linkedin.com/in/shubhamrpatil
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-copy">© 2026 Shubham Patil</p>
          {/* <p className="footer-built">
            Built with ❤️ using HTML, CSS, JavaScript, React.Js
          </p> */}
        </div>
      </footer>
    </>
  );
}
