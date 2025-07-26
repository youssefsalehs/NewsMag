function Navbar({
  setcategory,
  theme,
  toggleTheme,
  category,
  setcountry,
  activated,
  setactivated,
}) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-primary"
      style={{ position: "fixed", top: 0, zIndex: 1000, width: "100%" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span
            className={`badge fs-2 ${theme === "light" ? "" : "dark-mode"}`}
          >
            NewsMag <span className="fs-6">{activated}</span>
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
            <li className="nav-item d-flex align-items-center gap-2 fs-6 ">
              <i
                className={`bi bi-moon-stars ${
                  theme === "light" ? "dark-moon" : "glowing-moon"
                }`}
                style={{ fontSize: "20px", cursor: "pointer" }}
                onClick={toggleTheme}
              ></i>
              <span
                onClick={toggleTheme}
                style={{ cursor: "pointer", paddingRight: "8px" }}
              >
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </span>
            </li>

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
                  href="#"
                  className={`nav-link ${category === cat ? "active" : ""}`}
                  onClick={() => setcategory(cat)}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </a>
              </li>
            ))}

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Country
              </a>
              <ul className="dropdown-menu">
                {[
                  "India in",
                  "USA us",
                  "Australia au",
                  "Russia ru",
                  "France fr",
                  "United-Kingdom gb",
                ].map((cntry) => {
                  const [name, code] = cntry.split(" ");
                  return (
                    <li key={code}>
                      <a
                        href="#"
                        className="dropdown-item"
                        onClick={() => {
                          setcountry(code);
                          setactivated(code);
                        }}
                      >
                        {name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
