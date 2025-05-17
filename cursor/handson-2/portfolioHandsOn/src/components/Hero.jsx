import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img src="/E0438-removebg-preview.png" alt="GokulKrishna R" />
        </div>
        <div className="hero-text">
          <h1>Hi, I'm GokulKrishna R</h1>
          <p className="subheading">
            Product Developer at SurveySparrow | I build cross-platform SDKs and apps that scale.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 