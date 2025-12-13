// src/components/FeaturedBlogs.jsx
import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";

export default function FeaturedBlogs({ limit = 2 }) {
  const items = blogs.slice(0, limit);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="d-flex align-items-end justify-content-between mb-3">
          <h2 className="section-title mb-0">Recent posts</h2>
          <Link className="link-primary text-decoration-none" to="/blog">
            View all →
          </Link>
        </div>

        <div className="row g-3">
          {items.map((post) => (
            <div className="col-12 col-md-6" key={post.slug}>
              <Link
                to={`/blog/${post.slug}`}
                className="text-decoration-none text-reset"
              >
                <article className="card card-hover h-100">
                  <div className="card-body">
                    {/* meta */}
                    <div className="d-flex gap-2 align-items-center mb-2">
                      {post.tags?.[0] && (
                        <span className="badge text-bg-light">
                          {post.tags[0]}
                        </span>
                      )}
                      <span className="text-secondary small">
                        {post.date}
                      </span>
                    </div>

                    <h3 className="h5">{post.title}</h3>
                    <p className="text-secondary mb-0">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
