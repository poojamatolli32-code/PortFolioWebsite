import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-text">
        <h1 className="typing-text">
          Hello, I'm <span>Pooja Matolli</span>
        </h1>

        <h2>Full Stack Developer</h2>

        <p>
          Passionate about building responsive and modern web applications
          using React, Node.js, Express and MongoDB.
        </p>

        <div className="hero-actions">
          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            Resume
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={profile} alt="Pooja" />
      </div>
    </motion.section>
  );
}

export default Hero;