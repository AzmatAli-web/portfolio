import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Services = () => {
  const services = [
    {
      icon: 'bi-globe',
      title: 'Web Development',
      description: 'Building responsive websites and web applications using MERN stack with modern UI/UX design.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js']
    },
    {
      icon: 'bi-phone',
      title: 'Mobile App Development',
      description: 'Creating cross-platform mobile applications for iOS and Android using Flutter and Dart.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs']
    },
    {
      icon: 'bi-layers',
      title: 'Full-Stack Solutions',
      description: 'End-to-end development including frontend, backend, database, and deployment.',
      technologies: ['MERN Stack', 'Flutter', 'APIs', 'Deployment']
    }
  ];

  return (
    <section id="services" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold">My Services</h2>
          <p className="lead">Comprehensive development solutions for your needs</p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4">
              <div className="card border-0 shadow-lg h-100">
                <div className="card-body p-4 text-center">
                  <div className="bg-primary text-white rounded-circle p-4 d-inline-flex mb-4">
                    <i className={`bi ${service.icon} fs-2`}></i>
                  </div>
                  <h4 className="card-title fw-bold mb-3">{service.title}</h4>
                  <p className="card-text mb-4">{service.description}</p>
                  
                  <div className="mt-auto">
                    <h6 className="fw-bold mb-2">Technologies:</h6>
                    <div className="d-flex flex-wrap gap-2 justify-content-center">
                      {service.technologies.map((tech, i) => (
                        <span key={i} className="badge bg-light text-dark border">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;