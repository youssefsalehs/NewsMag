import Newsitem from "./Newsitem";

function Newsboard({ articles, theme }) {
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
    </div>
  );
}

export default Newsboard;
