export default function Skills() {
  return (
    <section id="skills" className="section bg-dark">
      <div className="container">
        <h2>Skills</h2>
        <div className="row mt-4">
          <div className="col-md-6">
            <h4>MERN Stack</h4>
            <div className="skill-tags">
              {['React','Node','Express','MongoDB','JavaScript','REST APIs'].map(s =>
                <span key={s}>{s}</span>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <h4>Flutter Mobile</h4>
            <div className="skill-tags">
              {['Flutter','Dart','Firebase','State Management','API Integration'].map(s =>
                <span key={s}>{s}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
