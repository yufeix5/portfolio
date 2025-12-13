import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function WorkDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="py-5">
        <div className="container">
          <p className="text-secondary">Project not found.</p>
          <Link to="/works" className="text-decoration-none">
            ← Back to Works
          </Link>
        </div>
      </div>
    );
  }

  const hasLinks = Array.isArray(project.links) && project.links.length > 0;
  const hasImages = Array.isArray(project.images) && project.images.length > 0;
  const hasTools = Array.isArray(project.tools) && project.tools.length > 0;

  const isStatic = project.type === "Static Cartography";

  // Split writeup into paragraphs (blank line = new paragraph)
  const paragraphs = String(project.writeup || "")
    .trim()
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className="py-5">
      <div className="container">
        <Link to="/works" className="text-decoration-none text-secondary small">
          ← Back to Works
        </Link>

        {/* Header / Hero */}
        <div className="work-hero mt-3">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h1 className="display-6 mb-2">{project.title}</h1>

              <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
                <span className="badge text-bg-light">{project.type}</span>
                <span className="text-secondary small">{project.year}</span>
                {project.lab && (
                  <span className="text-secondary small">· {project.lab}</span>
                )}
              </div>

              {project.description && (
                <p className="lead text-secondary mb-0">{project.description}</p>
              )}
            </div>

            <div className="col-12 col-lg-5">
              <div className="card shadow-sm">
                {project.cover && (
                  <img
                    src={project.cover}
                    className="card-img-top"
                    alt={`${project.title} cover`}
                    style={{ maxHeight: 260, objectFit: "cover" }}
                  />
                )}

                <div className="card-body">
                  <div className="small text-secondary">Role</div>
                  <div className="fw-semibold">{project.role || "—"}</div>

                  {/* Links */}
                  {hasLinks && (
                    <div className="mt-3 d-flex flex-wrap gap-2">
                      {project.links.map((l) => {
                        const url = l?.url || "";
                        const label = l?.label || "Link";

                        const isLocalPdf =
                          typeof url === "string" &&
                          url.startsWith("/file/") &&
                          url.toLowerCase().endsWith(".pdf");

                        return (
                          <a
                            key={url + label}
                            href={url}
                            className="btn btn-sm btn-outline-secondary"
                            {...(isLocalPdf
                              ? { download: true }
                              : { target: "_blank", rel: "noopener" })}
                          >
                            {label} →
                          </a>
                        );
                      })}
                    </div>
                  )}

                  {/* Tools */}
                  {hasTools && (
                    <>
                      <hr className="my-3" />
                      <div className="small text-secondary mb-2">Tools</div>
                      <div className="d-flex flex-wrap gap-2">
                        {project.tools.map((t) => (
                          <span
                            key={t}
                            className="badge badge-soft rounded-pill"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overview (full width; no sidebar card) */}
        <div className="row g-5 mt-4">
          <div className="col-12">
            <h2 className="section-title">Project Overview</h2>

            <div className="work-prose text-secondary">
              {paragraphs.length > 0 ? (
                paragraphs.map((para, i) => <p key={i}>{para}</p>)
              ) : (
                <p className="text-secondary">—</p>
              )}
            </div>
          </div>
        </div>

        {/* Images:
            - Static Cartography => Map (single large)
            - Others => Screenshots (grid)
        */}
        {hasImages && isStatic && (
          <div className="mt-5">
            <h2 className="section-title">Map</h2>

            <figure className="work-figure">
              <a href={project.images[0]} target="_blank" rel="noopener">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="img-fluid"
                />
              </a>
            </figure>
          </div>
        )}

        {hasImages && !isStatic && (
          <div className="mt-5">
            {/* <h2 className="section-title">Screenshots</h2> */}

            <div className="row g-3">
              {project.images.map((src, i) => (
                <div className="col-12 col-md-6" key={src}>
                  <figure className="work-figure">
                    <a href={src} target="_blank" rel="noopener">
                      <img
                        src={src}
                        alt={`${project.title} screenshot ${i + 1}`}
                        className="img-fluid"
                      />
                    </a>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
