import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';  // Add this import
import Button from 'react-bootstrap/Button'; // Optional, but recommended

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: 'bi-globe',
      title: 'MERN Stack Development',
      description: 'Full-stack web applications with modern JavaScript technologies and responsive design.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript (ES6+)', 'Bootstrap', 'Tailwind CSS'],
      details: 'MERN stack development provides a complete solution for building modern web applications. We create scalable, high-performance applications with real-time capabilities, responsive designs, and optimized performance. Our solutions include user authentication, API integration, database management, and cloud deployment.'
    },
    {
      icon: 'bi-phone',
      title: 'Flutter Mobile Apps',
      description: 'Cross-platform mobile applications for iOS and Android with native performance.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'Provider/Bloc', 'SQLite', 'State Management'],
      details: 'Flutter mobile development allows us to build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. We create apps with smooth animations, native performance, and consistent UI across platforms. Features include offline capabilities, push notifications, in-app purchases, and social media integration.'
    },
    {
      icon: 'bi-layers',
      title: 'Full-Stack Solutions',
      description: 'Complete digital solutions from frontend to backend with database and deployment.',
      technologies: ['Java', 'SQL/MySQL', 'RESTful APIs', 'Git/GitHub', 'DevOps', 'Deployment', 'System Design'],
      details: 'Our full-stack solutions provide end-to-end development services covering everything from UI/UX design to backend architecture and deployment. We build robust, scalable systems with proper documentation, testing, and maintenance plans. Our services include database design, API development, security implementation, and CI/CD pipeline setup.'
    }
  ];

  const handleLearnMore = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  return (
    <>
      <section id="services" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold">Development Services</h2>
            <p className="lead">Professional solutions for web, mobile, and full-stack development</p>
          </div>

          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-lg-4">
                <div className="card border-0 shadow-lg h-100 transition-hover">
                  <div className="card-body p-4 text-center">
                    <div className={`rounded-circle p-4 d-inline-flex mb-4 ${
                      index === 0 ? 'bg-primary' : 
                      index === 1 ? 'bg-info' : 
                      'bg-success'
                    }`}>
                      <i className={`bi ${service.icon} fs-2 text-white`}></i>
                    </div>
                    
                    <h4 className="card-title fw-bold mb-3">{service.title}</h4>
                    
                    <p className="card-text mb-4 text-muted">{service.description}</p>
                    
                    <div className="mt-auto">
                      <h6 className="fw-bold mb-3 border-bottom pb-2">Technologies Used:</h6>
                      <div className="d-flex flex-wrap gap-2 justify-content-center">
                        {service.technologies.map((tech, i) => (
                          <span key={i} className={`badge px-3 py-2 ${
                            index === 0 ? 'bg-primary-subtle text-primary' :
                            index === 1 ? 'bg-info-subtle text-info' :
                            'bg-success-subtle text-success'
                          }`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <button 
                        className={`btn btn-sm ${
                          index === 0 ? 'btn-primary' :
                          index === 1 ? 'btn-info text-white' :
                          'btn-success'
                        }`}
                        onClick={() => handleLearnMore(service)}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Component */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <i className={`bi ${selectedService?.icon} me-2`}></i>
            {selectedService?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-4">{selectedService?.details}</p>
          
          <h6 className="fw-bold mb-3">Technologies Used:</h6>
          <div className="d-flex flex-wrap gap-2 mb-4">
            {selectedService?.technologies.map((tech, i) => (
              <span key={i} className="badge bg-secondary px-3 py-2">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="border-top pt-3">
            <h6 className="fw-bold mb-2">What we offer:</h6>
            <ul className="list-unstyled">
              <li><i className="bi bi-check-circle-fill text-success me-2"></i>Custom Development</li>
              <li><i className="bi bi-check-circle-fill text-success me-2"></i>Maintenance & Support</li>
              <li><i className="bi bi-check-circle-fill text-success me-2"></i>Performance Optimization</li>
              <li><i className="bi bi-check-circle-fill text-success me-2"></i>Security Implementation</li>
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
            setShowModal(false);
            // You can redirect to a contact page or trigger a contact form
            window.location.href = '#contact';
          }}>
            Get Started
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Services;