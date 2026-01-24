import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="hero-section d-flex align-items-center">
      <div className="container text-center">
        <motion.h1 initial={{y:-40,opacity:0}} animate={{y:0,opacity:1}}>
          Azmat Ali
        </motion.h1>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.5}}>
          Full-Stack Developer | MERN & Flutter
        </motion.p>
        <a href="#projects" className="btn btn-primary mt-3">View Projects</a>
      </div>
    </section>
  )
}
