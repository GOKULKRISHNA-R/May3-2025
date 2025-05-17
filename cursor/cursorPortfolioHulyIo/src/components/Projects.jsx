import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Signs of Depression Detection",
      description: "ML/NLP pipeline using BERT, CNN, and RoBERTa for detecting signs of depression in text data.",
      technologies: ["Python", "TensorFlow", "BERT", "CNN", "RoBERTa"]
    },
    {
      title: "Attrition Prediction",
      description: "Ensemble ML model combining GRU, XGBoost, and CATBoost for predicting employee attrition.",
      technologies: ["Python", "GRU", "XGBoost", "CATBoost", "Scikit-learn"]
    },
    {
      title: "KEC Connect",
      description: "Flutter-based mobile application for campus communication and information sharing.",
      technologies: ["Flutter", "Dart", "Firebase", "Material Design"]
    },
    {
      title: "RBCKEC & Maths Club Websites",
      description: "Modern, responsive websites built with ReactJS and CSS for college clubs.",
      technologies: ["React", "CSS", "JavaScript", "Responsive Design"]
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title fade-in">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 