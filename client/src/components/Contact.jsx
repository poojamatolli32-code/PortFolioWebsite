import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <div className="contact-container">

        {/* Contact Form */}
        <div className="contact-card">
          <h3>Send Me a Message</h3>

          <form>
            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

            <textarea
              placeholder="Your Message"
              rows="6"
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Links */}
        <div className="contact-info">
          <h3>How You Can Contact Me</h3>

          <div className="contact-icons">

            <a
              href="mailto:your-email@gmail.com"
              title="Email"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <FaGithub />
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;