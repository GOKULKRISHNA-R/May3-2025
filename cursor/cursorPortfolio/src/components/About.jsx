import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Passionate developer with a strong background in building scalable applications. 
              Loves solving complex problems and mentoring students. Active in dev communities.
            </p>
            
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-value">Sivakasi, Tamil Nadu, India</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">gmkrishna11082003@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="experience">
            <h3>Experience</h3>
            
            <div className="experience-item">
              <h4>Product Developer</h4>
              <h5>SurveySparrow</h5>
              <p className="duration">Apr 2024 – Now</p>
              <ul>
                <li>Worked on Mobile Apps (React Native, iOS, Android), built CI/CD pipelines, integrated Google Play Integrity API, contributed to backend.</li>
                <li>Owned and maintained SDKs: iOS (SwiftUI, UIKit), Android (Jetpack Compose, Java), Flutter, React Native, Ionic.</li>
                <li>Involved in customer deals using React and Hapi.js.</li>
              </ul>
            </div>

            <div className="experience-item">
              <h4>Intern</h4>
              <h5>SurveySparrow</h5>
              <p className="duration">Aug 2023 – Apr 2024</p>
            </div>

            <div className="experience-item">
              <h4>Intern</h4>
              <h5>Skewess Tech</h5>
              <p className="duration">Aug 2022 – Nov 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 