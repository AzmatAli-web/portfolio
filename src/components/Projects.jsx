import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = () => {
  const projects = [
    {
      title: 'Campus Marketplace',
      description: 'Full-stack MERN application for student trading platform with user authentication, product listings, and admin dashboard.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Bootstrap'],
      category: 'MERN Stack',
      github: '#',
      live: '#'
    },
    {
      title: 'Task Manager Pro',
      description: 'Flutter mobile application for task management with local storage, notifications, and dark mode support.',
      technologies: ['Flutter', 'Dart', 'SQLite', 'Provider'],
      category: 'Flutter Mobile',
      github: '#',
      live: '#'
    },
    {
      title: 'E-Commerce Dashboard',
      description: 'Admin dashboard for e-commerce management with analytics, product tracking, and user management.',
      technologies: ['React.js', 'Chart.js', 'Node.js', 'MongoDB'],
      category: 'MERN Stack',
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold">Featured Projects</h2>
          <p className="lead">Showcasing my best work in web and mobile development</p>
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-4">
              <div className="card border-0 shadow-lg h-100">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <h5 className="card-title fw-bold">{project.title}</h5>
                    <span className="badge bg-primary">{project.category}</span>
                  </div>
                  <p className="card-text mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h6 className="fw-bold mb-2">Technologies Used:</h6>
                    <div className="d-flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="badge bg-secondary">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="d-flex gap-2">
                    <a href={project.github} className="btn btn-outline-primary btn-sm">
                      <i className="bi bi-github me-1"></i> GitHub
                    </a>
                    <a href={project.live} className="btn btn-primary btn-sm">
                      <i className="bi bi-box-arrow-up-right me-1"></i> Live Demo
                    </a>
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

export default Projects;