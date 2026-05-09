function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Shivam Khajuria</h1>

      <div className="nav-links">
        <a href="/">Home</a>

        <a
          href="https://github.com/Vibe-coder89"
          target="_blank"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/shivam-khajuria-1839b4333/"
          target="_blank"
        >
          LinkedIn
        </a>

        <a href="#projects">
          Projects
        </a>
      </div>
    </nav>
  );
}

export default Navbar;