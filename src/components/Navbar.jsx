export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark shadow">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">Azmat Ali</a>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="nav" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            {['about','skills','projects','services','contact'].map(item => (
              <li className="nav-item" key={item}>
                <a className="nav-link" href={`#${item}`}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
