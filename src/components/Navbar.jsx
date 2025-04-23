function Navbar({ setcategory, theme, category }) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiar bg-primary"
      // data-bs-theme="light"
    >
      <div className="container-fluid">
        <a className="navbar-brand">
          <span
            className={`badge fs-3 ${theme === "light" ? "" : "dark-mode"}`}
          >
            NewsMag
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            {[
              "general",
              "health",
              "sports",
              "technology",
              "business",
              "entertainment",
              "science",
            ].map((cat) => (
              <li key={cat} className="nav-item fs-6">
                <a
                  className={`nav-link ${category === cat ? "active" : ""}`}
                  onClick={() => setcategory(cat)}
                  role="button"
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
