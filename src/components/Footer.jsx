export default function Footer() {
  return (
    <footer className="footer mt-auto">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
        <div className="text-secondary small">
          © {new Date().getFullYear()} Yufei Xia
        </div>

        <div className="d-flex gap-2">
          <a
            className="icon-btn text-dark"
            href="https://github.com/yufeix5"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="bi bi-github" />
          </a>

          <a
            className="icon-btn text-dark"
            href="https://www.linkedin.com/in/yufei-xia-115b6a197"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="bi bi-linkedin" />
          </a>

          <a
            className="icon-btn text-dark"
            href="mailto:yxia56@wisc.edu"
            aria-label="Email"
          >
            <i className="bi bi-envelope" />
          </a>
        </div>
      </div>
    </footer>
  );
}

