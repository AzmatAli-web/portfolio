import { motion } from 'framer-motion'

const projects = [
  { title:'Campus Marketplace', desc:'MERN full-stack buying & selling platform.' },
  { title:'Task Manager App', desc:'Flutter mobile app with Firebase backend.' },
  { title:'E-commerce Dashboard', desc:'Admin dashboard for analytics & management.' }
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>
        <div className="row mt-4">
          {projects.map(p => (
            <div className="col-md-4" key={p.title}>
              <motion.div className="card project-card"
                whileHover={{scale:1.05}}>
                <div className="card-body">
                  <h5>{p.title}</h5>
                  <p>{p.desc}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
