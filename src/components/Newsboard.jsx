import Newsitem from "./Newsitem";

function Newsboard({ articles, toggleTheme, theme }) {
  return (
    <div>
      <h1 className="text-center mb-2" style={{ marginTop: "7rem" }}>
        latest{" "}
        <span
          className={`badge text-light text-bg-primary ${
            theme === "light" ? "" : "dark-mode"
          }
          }`}
        >
          News
        </span>
      </h1>
      <div className="grid-wrapper">
        <div className="news-grid">
          {articles.map((article, i) => (
            <Newsitem article={article} key={i} />
          ))}
        </div>
      </div>

      <i
        className={`bi bi-moon-stars ${
          theme === "light" ? "dark-moon" : "glowing-moon"
        }`}
        style={{
          fontSize: "2rem",
          position: "fixed",
          top: "5.2rem",
          right: ".2rem",
          border: "none",
          borderRadius: "50%",
          paddingLeft: "7px",
          paddingRight: "7px",
          cursor: "pointer",
        }}
        onClick={toggleTheme}
      ></i>
    </div>
  );
}

export default Newsboard;
