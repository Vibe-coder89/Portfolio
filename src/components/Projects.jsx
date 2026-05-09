function Projects() {
  const projects = [
    {
      title: "ThinkBoard",
      desc: "Modern note-making application with clean UI and fast performance.",
      img: "ChatGPT Image May 10, 2026, 12_42_30 AM.png",
      github: "https://github.com/Vibe-coder89/mern-thinkboard",
    },

    {
      title: "Spotify Clone",
      desc: "Responsive Spotify-inspired music streaming UI clone.",
      img: "ChatGPT Image May 9, 2026, 05_19_37 PM.png",
      github: "https://github.com/Vibe-coder89/Spotify-clone",
    },

    {
      title: "YouTube Summarizer",
      desc: "AI-powered tool that summarizes YouTube videos.",
      img: "ChatGPT Image May 9, 2026, 05_21_28 PM.png",
      github: "https://github.com/Vibe-coder89/yt-summarizer",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h1>Projects</h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            key={index}
          >
            <div className="project-card">
              <img src={project.img} alt={project.title} />

              <h2>{project.title}</h2>

              <p>{project.desc}</p>

              <button className="github-btn">
                View GitHub Repo
              </button>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;