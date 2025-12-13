import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function FeaturedWorks({ limit = 3 }) {
  const featured = projects.filter((p) => p.featured).slice(0, limit);

  return (
    <section className="py-5">
      <div className="container">
        <div className="d-flex align-items-end justify-content-between mb-3">
          <h2 className="section-title mb-0">Featured works</h2>
          <Link className="link-primary text-decoration-none" to="/works">
            View all →
          </Link>
        </div>

        <div className="row g-3">
          {featured.map((p, idx) => (
            <div className={idx === 0 ? "col-12" : "col-12 col-md-6"} key={p.slug}>
              <div className="card card-hover h-100">
                {p.cover ? (
                  <img
                    src={p.cover}
                    className={idx === 0 ? "img-fluid rounded-top" : "card-img-top"}
                    alt={p.title}
                    style={idx === 0 ? { maxHeight: 260, objectFit: "cover" } : { maxHeight: 220, objectFit: "cover" }}
                  />
                ) : null}

                <div className="card-body">
                  <div className="d-flex flex-wrap gap-2 mb-2">
                    <span className="badge text-bg-light">{p.type}</span>
                    <span className="text-secondary small">{p.year}</span>
                    {p.role ? <span className="text-secondary small">· {p.role}</span> : null}
                  </div>

                  <h3 className="h5">{p.title}</h3>
                  <p className="text-secondary mb-3">{p.description}</p>

                  {/* 关键：跳到同一个详情页 */}
                  <Link className="btn btn-sm btn-primary" to={`/works/${p.slug}`}>
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
