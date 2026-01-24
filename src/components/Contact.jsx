export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact</h2>
        <form className="contact-form">
          <input className="form-control" placeholder="Name" required />
          <input className="form-control mt-3" placeholder="Email" required />
          <textarea className="form-control mt-3" placeholder="Message"></textarea>
          <button className="btn btn-primary mt-3">Send Message</button>
        </form>
      </div>
    </section>
  )
}
