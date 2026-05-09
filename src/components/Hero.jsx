function Hero() {
  return (
    <section className="hero">
      {/* Left Image */}
      <div className="hero-left">
        <img
          src="8022105582012392.jpeg"
          alt="profile"
          className="profile-img"
        />
      </div>

      {/* Right Side */}
      <div className="hero-right">
        <h1>Shivam</h1>

        <h2>
          Web Developer | AI Enthusiast | DSA Learner
        </h2>

        <p>
          Passionate developer focused on building
          modern web applications, AI-powered tools,
          and interactive user experiences.
        </p>

        <div className="hero-buttons">
          <button
            onClick={() => {
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Projects
          </button>

          <button >
            <a href="https://www.instagram.com/shivam_khajuria005/" target="_blank" rel="noreferrer">Contact me</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;