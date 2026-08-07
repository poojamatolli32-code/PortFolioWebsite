function Projects() {
  const projects = [
    {
      name: "Lightweight Professional Networking Platform",
      description:
        "A professional networking platform designed to connect users, build professional profiles, and explore career opportunities.",
      link: "#",
    },
    {
      name: "HR Analytics System",
      description:
        "An HR analytics system that helps manage employee information and provides useful insights for better decision-making.",
      link: "#",
    },
    {
      name: "My Portfolio",
      description:
        "A personal portfolio website showcasing my skills, projects, education, certificates, and contact information.",
      link: "#",
    },
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.name}>
            <h3>{project.name}</h3>

            <p>{project.description}</p>

            <a href={project.link} target="_blank" rel="noreferrer">
              <button>View Project</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;