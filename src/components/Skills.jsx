function Skills() {
  const skills = [
    {
      name: "React.js",
      icon: "⚛️",
      color: "#61DBFB",
    },

    {
      name: "JavaScript",
      icon: "JS",
      color: "#F7DF1E",
    },

    {
      name: "Python",
      icon: "🐍",
      color: "#3776AB",
    },

    {
      name: "Tailwind",
      icon: "🌊",
      color: "#38BDF8",
    },

    {
      name: "Node.js",
      icon: "🟢",
      color: "#68A063",
    },

    {
      name: "MongoDB",
      icon: "🍃",
      color: "#4DB33D",
    },

    {
      name: "AI APIs",
      icon: "🤖",
      color: "#ff3b3b",
    },

    {
      name: "DSA",
      icon: "🧠",
      color: "#c084fc",
    },
  ];

  return (
    <section className="skills" id="skills">
      <p className="skills-small-title">
        TECH STACK
      </p>

      <h1 className="skills-title">
        SKILLS & <span>TECHNOLOGIES</span>
      </h1>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div
              className="skill-icon"
              style={{ color: skill.color }}
            >
              {skill.icon}
            </div>

            <h2>{skill.name}</h2>

            <div
              className="skill-line"
              style={{ background: skill.color }}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;