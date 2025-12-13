import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";

export default function Blog() {
  return (
    <div className="py-5">
      <div className="container">
        <h1 className="mb-1">Blog</h1>
        <p className="text-secondary mb-4">
          Reflections on mapping, design, and spatial thinking.
        </p>

        <div className="row g-3">
          {blogs.map((post) => (
            <div className="col-12" key={post.slug}>
              <article className="card card-hover">
                <div className="card-body">
                  <div className="d-flex flex-wrap gap-2 mb-2">
                    {post.tags.map((t) => (
                      <span key={t} className="badge text-bg-light">
                        {t}
                      </span>
                    ))}
                    <span className="text-secondary small ms-auto">
                      {post.date}
                    </span>
                  </div>

                  <h2 className="h5">{post.title}</h2>
                  <p className="text-secondary mb-2">{post.excerpt}</p>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-decoration-none"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
