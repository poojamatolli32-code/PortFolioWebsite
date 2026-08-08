import { motion } from "framer-motion";

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
        <h1 className="typing-text">Hello, I'm Pooja Matolli</h1>

        <h2>Full Stack Developer</h2>

        <p>
          Passionate about building responsive and modern web applications
          using React, Node.js, Express and MongoDB.
        </p>

        <a href="/resume.pdf" download>
          <button>Download Resume</button>
        </a>
      </div>

      <div className="hero-image">
        
      </div>
    </motion.section>
  );
}

export default Hero;