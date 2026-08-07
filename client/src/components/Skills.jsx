function Skills() {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "MongoDB", level: 70 },
    { name: "GitHub", level: 85 },
  ];

  return (
    <section id="skills">
      <h2>My Skills</h2>

      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill" key={skill.name}>
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;