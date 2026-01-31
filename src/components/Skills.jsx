 
import 'bootstrap/dist/css/bootstrap.min.css';

const Skills = () => {
  const mernSkills = ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'HTML5/CSS3'];
  const flutterSkills = ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'State Management', 'UI/UX Design'];
  const tools = ['Git/GitHub', 'VS Code', 'Postman', 'npm', 'Android Studio', 'Figma'];

  return (
    <section id="skills" className="py-5 bg-dark text-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold">Technical Skills</h2>
          <p className="lead">Proficient in modern web and mobile technologies</p>
        </div>

        <div className="row g-4">
          {/* MERN Stack */}
          <div className="col-lg-4">
            <div className="card border-0 bg-secondary text-white h-100">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-primary rounded-circle p-3 me-3">
                    <i className="bi bi-globe fs-4"></i>
                  </div>
                  <h4 className="card-title fw-bold mb-0">MERN Stack</h4>
                </div>
                <p className="card-text mb-4">Full-stack web development expertise</p>
                <div className="d-flex flex-wrap gap-2">
                  {mernSkills.map((skill, index) => (
                    <span key={index} className="badge bg-primary fs-6 p-2">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Flutter Mobile */}
          <div className="col-lg-4">
            <div className="card border-0 bg-secondary text-white h-100">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-info rounded-circle p-3 me-3">
                    <i className="bi bi-phone fs-4"></i>
                  </div>
                  <h4 className="card-title fw-bold mb-0">Flutter Mobile</h4>
                </div>
                <p className="card-text mb-4">Cross-platform mobile development</p>
                <div className="d-flex flex-wrap gap-2">
                  {flutterSkills.map((skill, index) => (
                    <span key={index} className="badge bg-info fs-6 p-2">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tools & Others */}
          <div className="col-lg-4">
            <div className="card border-0 bg-secondary text-white h-100">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-success rounded-circle p-3 me-3">
                    <i className="bi bi-tools fs-4"></i>
                  </div>
                  <h4 className="card-title fw-bold mb-0">Tools & Others</h4>
                </div>
                <p className="card-text mb-4">Development tools and methodologies</p>
                <div className="d-flex flex-wrap gap-2">
                  {tools.map((skill, index) => (
                    <span key={index} className="badge bg-success fs-6 p-2">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;