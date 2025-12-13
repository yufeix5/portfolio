import { Link } from "react-router-dom";
import { useState } from "react";
import { projects } from "../data/projects";

export default function Works() {
  const [filter, setFilter] = useState("All");

  // 可用的分类（和你 projects.js 的 type 对应）
  const categories = [
    "All",
    "Web Map",
    "Collaborative Project",
    "Static Cartography",
    "StoryMap",
    "Cartographic Style Study"
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.type === filter);

  return (
    <div className="py-5">
      <div className="container">
        <h1 className="mb-3">Works</h1>

        {/* Filter */}
        <div className="d-flex flex-wrap gap-2 mb-4">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`btn btn-sm ${
                filter === c ? "btn-primary" : "btn-outline-secondary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="row g-4">
          {filteredProjects.map((p) => (
            <div className="col-12 col-md-6 col-lg-4" key={p.slug}>
              <Link
                to={`/works/${p.slug}`}
                className="text-decoration-none text-reset"
              >
                <div className="card card-hover h-100">
                  {p.cover && (
                    <img
                      src={p.cover}
                      className="card-img-top"
                      alt={p.title}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                  )}

                  <div className="card-body d-flex flex-column">
                    <div className="mb-2">
                      <span className="badge text-bg-light me-2">{p.type}</span>
                      <span className="text-secondary small">{p.year}</span>
                    </div>

                    <h2 className="h6">{p.title}</h2>
                    <p className="text-secondary small flex-grow-1">
                      {p.description}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <p className="text-secondary mt-4">
            No projects in this category.
          </p>
        )}
      </div>
    </div>
  );
}
