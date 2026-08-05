import { motion } from "framer-motion";

function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>

      <div className="projects-container">

        <motion.div
          className="project-card"
          whileHover={{ scale: 1.05 }}
        >
          <h3>Portfolio Website</h3>
          <p>
            A responsive portfolio website built using React, HTML, CSS, and JavaScript.
          </p>
          <button>View Project</button>
        </motion.div>

        <motion.div
          className="project-card"
          whileHover={{ scale: 1.05 }}
        >
          <h3>Weather App</h3>
          <p>
            Displays real-time weather information using an API.
          </p>
          <button>View Project</button>
        </motion.div>

        <motion.div
          className="project-card"
          whileHover={{ scale: 1.05 }}
        >
          <h3>To-Do List</h3>
          <p>
            A task management application with add, edit, and delete features.
          </p>
          <button>View Project</button>
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;