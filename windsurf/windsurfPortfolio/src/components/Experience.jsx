const Experience = () => {
  const experiences = [
    {
      role: "Senior Product Developer",
      company: "TechCorp",
      duration: "2022 - Present",
      points: [
        "Led the development of mobile SDKs for cross-platform applications",
        "Implemented performance optimizations that reduced app load time by 30%",
        "Mentored junior developers and led code reviews",
      ],
    },
    {
      role: "Product Developer",
      company: "InnovateHub",
      duration: "2020 - 2022",
      points: [
        "Developed mobile applications using React Native and Flutter",
        "Implemented CI/CD pipelines for automated testing and deployment",
        "Collaborated with design team to implement responsive UI components",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-2xl p-8"
            >
              <h3 className="text-xl font-semibold mb-2">{exp.role}</h3>
              <p className="text-gray-400 mb-4">{exp.company}</p>
              <p className="text-gray-400 mb-4">{exp.duration}</p>
              
              <ul className="list-disc list-inside text-gray-400">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
