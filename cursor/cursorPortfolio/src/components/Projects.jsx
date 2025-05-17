import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Signs of Depression Detection',
      description: 'ML/NLP pipeline using BERT, CNN, RoBERTa for detecting signs of depression through text analysis.',
      technologies: ['Python', 'BERT', 'CNN', 'RoBERTa', 'NLP']
    },
    {
      title: 'Attrition Prediction',
      description: 'Ensemble ML model combining GRU, XGBoost, and CATBoost for predicting employee attrition.',
      technologies: ['Python', 'GRU', 'XGBoost', 'CATBoost', 'ML']
    },
    {
      title: 'KEC Connect',
      description: 'Flutter-based mobile application for campus communication and information sharing.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Mobile Development']
    },
    {
      title: 'RBCKEC & Maths Club Websites',
      description: 'Modern web applications built with ReactJS and CSS for college clubs.',
      technologies: ['React', 'JavaScript', 'CSS', 'Web Development']
    }
  ];

  return (
    <div className="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
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
    </div>
  );
};

export default Projects; 