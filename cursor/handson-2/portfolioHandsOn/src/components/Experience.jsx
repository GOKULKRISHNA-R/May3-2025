import './Experience.css';

const experiences = [
  {
    title: "Product Developer",
    company: "SurveySparrow",
    duration: "2021 - Present",
    description: "Leading the development of cross-platform SDKs and offline survey applications. Building scalable solutions using React Native, Flutter, and modern web technologies.",
  },
  {
    title: "Software Engineer",
    company: "SurveySparrow",
    duration: "2020 - 2021",
    description: "Developed and maintained web components and SDKs. Implemented real-time data synchronization features using MQTT and Firebase.",
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>{exp.title}</h3>
                <span className="company">{exp.company}</span>
              </div>
              <span className="duration">{exp.duration}</span>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 