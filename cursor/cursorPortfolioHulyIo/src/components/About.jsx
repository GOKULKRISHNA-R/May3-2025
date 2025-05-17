import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title fade-in">About Me</h2>
        <div className="about-content">
          <div className="about-text fade-in">
            <p>
              I'm a passionate developer with a strong background in building scalable applications. 
              I love solving complex problems and mentoring students. I'm actively involved in developer 
              communities and enjoy sharing knowledge through talks and workshops.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-value">Sivakasi, Tamil Nadu, India</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <a href="mailto:gmkrishna11082003@gmail.com" className="detail-value">
                  gmkrishna11082003@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="about-experience fade-in">
            <h3>Experience</h3>
            <div className="experience-timeline">
              <div className="timeline-item">
                <div className="timeline-date">Apr 2024 – Now</div>
                <div className="timeline-content">
                  <h4>Product Developer at SurveySparrow</h4>
                  <ul>
                    <li>Built Mobile Apps (React Native, iOS, Android), CI/CD pipelines, integrated Play Integrity API, contributed to backend</li>
                    <li>Owned SDKs: iOS (SwiftUI, UIKit), Android (Jetpack Compose, Java), Flutter, React Native, Ionic</li>
                    <li>Involved in customer deals (React, Hapi.js)</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">Aug 2023 – Apr 2024</div>
                <div className="timeline-content">
                  <h4>Intern at SurveySparrow</h4>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">Aug 2022 – Nov 2022</div>
                <div className="timeline-content">
                  <h4>Intern at Skewess Tech</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 