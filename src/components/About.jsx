import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.h2 whileInView={{opacity:1}} initial={{opacity:0}}>About Me</motion.h2>
        <p>
          I am a Software Engineering student at COMSATS University Islamabad,
          passionate about building scalable web and mobile applications using
          MERN Stack and Flutter.
        </p>
      </div>
    </section>
  )
}
