import { motion } from "framer-motion";

function Certificates() {
  return (
    <section id="certificates">
      <h2>Certificates</h2>

      <div className="certificate-container">

        <motion.div
          className="certificate-card"
          whileHover={{ scale: 1.05 }}
        >
          <h3>Web Development</h3>
          <p>Completed a Web Development course using HTML, CSS, JavaScript and React.</p>
        </motion.div>

        <motion.div
          className="certificate-card"
          whileHover={{ scale: 1.05 }}
        >
          <h3>Python Programming</h3>
          <p>Successfully completed a Python Programming certification.</p>
        </motion.div>

        <motion.div
          className="certificate-card"
          whileHover={{ scale: 1.05 }}
        >
          <h3>Cloud Computing</h3>
          <p>Completed training in Cloud Computing fundamentals and services.</p>
        </motion.div>

      </div>
    </section>
  );
}

export default Certificates;