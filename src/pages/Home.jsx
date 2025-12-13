import headshot from "../assets/img/headshot.jpg";
import { Link } from "react-router-dom";
import FeaturedWorks from "../components/FeaturedWorks";
import FeaturedBlogs from "../components/FeaturedBlogs";

export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-7">
              <p className="mb-2">
                <span className="badge badge-soft rounded-pill">
                  Cartography & GIS • Data Engineering
                </span>
              </p>
              <h1 className="display-5 mb-3">Hi, I'm Yufei Xia.</h1>
              <p className="lead text-secondary">
                I build interactive maps and data products—focused on GIS, web mapping, and geospatial pipelines.
              </p>
              <div className="d-flex flex-wrap gap-2 mt-4">
                <Link className="btn btn-primary" to="/works">View Works</Link>
                <Link className="btn btn-outline-secondary" to="/resume">About & Contact</Link>
              </div>

              <div className="mt-4 d-flex flex-wrap gap-2">
                <span className="badge text-bg-light">Mapbox GL JS</span>
                <span className="badge text-bg-light">PostGIS</span>
                <span className="badge text-bg-light">Python</span>
                <span className="badge text-bg-light">React / Svelte</span>
                <span className="badge text-bg-light">ArcGIS / QGIS</span>
              </div>
            </div>

            <div className="col-12 col-lg-5">
              <div className="card shadow-sm">
                <img src={headshot} className="card-img-top" alt="Headshot" />
                <div className="card-body">
                  <p className="mb-1 fw-semibold">Madison, WI</p>
                  <p className="mb-0 text-secondary small">MS Cartography & GIS @ UW-Madison</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <FeaturedBlogs limit={2} />

      <FeaturedWorks limit={3} />
    </>
  );
}
