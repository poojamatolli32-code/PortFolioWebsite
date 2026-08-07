function About() {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="about-card">
        <div className="about-introduction">
          <h3>👋 Introduction</h3>
          <p>
            Hi, I'm Pooja, a passionate web developer who enjoys creating
            modern, responsive, and user-friendly websites. I love learning
            new technologies and turning ideas into interactive web
            experiences.
          </p>
        </div>

        <div className="about-focus">
          <h3>🎯 Focusing On</h3>

          <div className="focus-items">
            <span>Web Development</span>
            <span>React</span>
            <span>JavaScript</span>
            <span>UI Design</span>
            <span>Responsive Websites</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;