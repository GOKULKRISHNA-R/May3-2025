import './Projects.css';

const projects = [
  {
    title: "Offline Survey App",
    description: "Built a cross-platform offline survey application using React Native and Flutter, enabling data collection in areas with limited connectivity.",
    tech: ["React Native", "Flutter", "SQLite", "Redux"],
  },
  {
    title: "Custom SDK Development",
    description: "Developed and maintained custom SDKs for web and mobile platforms, improving developer experience and reducing integration time.",
    tech: ["JavaScript", "TypeScript", "React Native", "Flutter"],
  },
  {
    title: "Web Components Library",
    description: "Created a reusable web components library that accelerated development across multiple projects.",
    tech: ["React", "TypeScript", "Storybook", "Jest"],
  },
  {
    title: "Real-time Data Sync",
    description: "Implemented real-time data synchronization using MQTT and Firebase, ensuring seamless offline-to-online transitions.",
    tech: ["MQTT", "Firebase", "Node.js", "WebSocket"],
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 