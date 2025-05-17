const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          About Me
        </h2>
        
        <div className="bg-[#1a1a1a] rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <p className="text-gray-400">Bangalore, India</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Email</h3>
              <p className="text-gray-400">gokulkrishnaraju@example.com</p>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-gray-400 leading-relaxed">
              I am a passionate Product Developer specializing in Mobile App and SDK development. With a strong foundation in computer science and a keen interest in creating innovative solutions, I thrive on turning complex problems into elegant, user-friendly applications.
            </p>
            <p className="text-gray-400 leading-relaxed mt-4">
              Currently, I focus on developing scalable mobile applications and SDKs that help businesses streamline their operations and enhance user experiences. My expertise lies in creating performant, maintainable code that meets both technical and business requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
