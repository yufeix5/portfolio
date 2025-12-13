import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-minimal sticky-top">
      <div className="container">
        {/* Brand */}
        <NavLink className="navbar-brand d-flex flex-column" to="/">
          <span className="brand-title">Yufei’s GIS Projects</span>
          <span className="brand-subtitle">
            An online portfolio of cartography, GIS, and data work
          </span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div id="nav" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto gap-lg-3 align-items-lg-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/works">
                Works
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog">
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/resume">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <a
                className="nav-link resume-link"
                href="/file/Yufei_Xia.pdf"
                download
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
