export default function Resume() {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row g-4">

          {/* LEFT: summary card */}
          <div className="col-12 col-lg-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h1 className="h4 mb-1">Yufei Xia</h1>
                <p className="text-secondary mb-3">Madison, WI</p>

                <div className="d-grid gap-2">
                  {/* 正确的下载方式 */}
                  <a
                    className="btn btn-primary"
                    href="/file/Yufei_Xia.pdf"
                  >
                    View Resume (PDF)
                  </a>

                  <a
                    className="btn btn-outline-secondary"
                    href="mailto:yxia56@wisc.edu"
                  >
                    Email: yxia56@wisc.edu
                  </a>
                </div>

                <hr className="my-4" />

                <h2 className="h6">Skills</h2>
                <div className="d-flex flex-wrap gap-2">
                  {[
                    "ArcGIS",
                    "QGIS",
                    "Mapbox GL JS",
                    "PostGIS",
                    "Python",
                    "SQL",
                    "TypeScript",
                    "React",
                    "Svelte"
                  ].map((s) => (
                    <span key={s} className="badge text-bg-light">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: content */}
          <div className="col-12 col-lg-8">
            <h2 className="section-title">Bio</h2>
            <p className="text-secondary">
              I'm a Cartography & GIS graduate student at UW-Madison, interested in
              interactive web mapping, spatial databases, and building data
              pipelines for decision-making.
            </p>

            <h2 className="section-title mt-4">Education</h2>

            <div className="card mb-3">
              <div className="card-body">
                <div className="d-flex flex-wrap justify-content-between gap-2">
                  <div className="fw-semibold">
                    University of Wisconsin-Madison
                  </div>
                  <div className="text-secondary small">
                    Jan 2025 - Dec 2026
                  </div>
                </div>
                <div className="text-secondary">
                  M.S. in Cartography & GIS
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-wrap justify-content-between gap-2">
                  <div className="fw-semibold">
                    University of Washington
                  </div>
                  <div className="text-secondary small">
                    Sept 2019 - Jun 2023
                  </div>
                </div>
                <div className="text-secondary">
                  B.A. in Geography: Data Science
                </div>
              </div>
            </div>

            <h2 className="section-title mt-4">Contact</h2>
            <ul className="list-unstyled text-secondary mb-0">
              <li>
                <i className="bi bi-envelope me-2" />
                yxia56@wisc.edu
              </li>
              <li>
                <i className="bi bi-geo-alt me-2" />
                Madison, WI
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
