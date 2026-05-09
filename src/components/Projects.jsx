import spotify from "../assets/spotify.png";
import yt from "../assets/yt.png";
import note from "../assets/note.png";
import profile from "../assets/profile.jpeg";

function Projects() {
  const projects = [
    {
      title: "ThinkBoard",
      desc: "Modern note-making application with clean UI and fast performance.",
      img: note,
      github: "https://github.com/Vibe-coder89/mern-thinkboard",
    },

    {
      title: "Spotify Clone",
      desc: "Responsive Spotify-inspired music streaming UI clone.",
      img: spotify,
      github: "https://github.com/Vibe-coder89/Spotify-clone",
    },

    {
      title: "YouTube Summarizer",
      desc: "AI-powered tool that summarizes YouTube videos.",
      img: yt,
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