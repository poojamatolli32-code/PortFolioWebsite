import { motion } from "framer-motion";

function Skills() {
  return (
    <section id="skills">
      <h2>My Skills</h2>

      <div className="skills-container">

        <motion.div
          className="skill-card"
          whileHover={{ scale: 1.05 }}
        >
          <h3>HTML</h3>
          <p>90%</p>
        </motion.div>

        <motion.div
          className="skill-card"
          whileHover={{ scale: 1.05 }}
        >
          <h3>CSS</h3>
          <p>85%</p>
        </motion.div>

        <motion.div
          className="skill-card"
          whileHover={{ scale: 1.05 }}
        >
          <h3>JavaScript</h3>
          <p>80%</p>
        </motion.div>

        <motion.div
          className="skill-card"
          whileHover={{ scale: 1.05 }}
        >
          <h3>React</h3>
          <p>75%</p>
        </motion.div>

        <motion.div
          className="skill-card"
          whileHover={{ scale: 1.05 }}
        >
          <h3>Node.js</h3>
          <p>70%</p>
        </motion.div>

        <motion.div
          className="skill-card"
          whileHover={{ scale: 1.05 }}
        >
          <h3>MongoDB</h3>
          <p>70%</p>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;