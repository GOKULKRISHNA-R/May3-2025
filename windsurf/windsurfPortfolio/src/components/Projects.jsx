const Projects = () => {
  const projects = [
    {
      title: "Mobile SDK Framework",
      description: "A cross-platform SDK for mobile applications with customizable components and performance optimizations.",
      technologies: ["React Native", "TypeScript", "Node.js"],
      link: "#"
    },
    {
      title: "Performance Monitoring Tool",
      description: "A real-time monitoring system for mobile app performance metrics and user analytics.",
      technologies: ["Flutter", "Dart", "Firebase"],
      link: "#"
    },
    {
      title: "E-commerce Mobile App",
      description: "A full-featured e-commerce application with payment integration and real-time inventory management.",
      technologies: ["React Native", "Redux", "Stripe"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all text-white font-medium"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
