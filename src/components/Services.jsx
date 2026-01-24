export default function Services() {
  return (
    <section id="services" className="section bg-dark">
      <div className="container">
        <h2>Services</h2>
        <div className="row mt-4">
          {[
            'MERN Web Development',
            'Flutter Mobile Apps',
            'Full-Stack Solutions'
          ].map(s => (
            <div className="col-md-4" key={s}>
              <div className="card service-card">
                <div className="card-body text-center">
                  <h5>{s}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
