import { useParams, Link } from "react-router-dom";
import { blogs } from "../data/blogs";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    return (
      <div className="container py-5">
        <p>Post not found.</p>
        <Link to="/blog">← Back to blog</Link>
      </div>
    );
  }

  return (
    <div className="py-5">
      <div className="container" style={{ maxWidth: "720px" }}>
        <Link to="/blog" className="text-decoration-none">
          ← Back to Blog
        </Link>

        <h1 className="mt-3">{post.title}</h1>
        <p className="text-secondary">{post.date}</p>

        <div className="d-flex flex-wrap gap-2 mb-4">
          {post.tags.map((t) => (
            <span key={t} className="badge text-bg-light">
              {t}
            </span>
          ))}
        </div>

        {post.content.map((para, i) => (
          <p key={i} className="text-secondary fs-6">
            {para}
          </p>
        ))}

        {post.relatedProject && (
          <>
            <hr className="my-4" />
            <p className="fw-semibold mb-1">Related Project</p>
            <Link to={`/works/${post.relatedProject}`}>
              View project →
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
