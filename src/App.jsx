import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Newsboard from "./components/Newsboard";
import Loadingscreen from "./components/Loadingscreen";
import Error from "./components/Error";

const BASE_URL = "https://saurav.tech/NewsAPI/";

function App() {
  const [category, setcategory] = useState("general");
  const [loading, setloading] = useState(true);
  const [theme, setTheme] = useState("light");
  const [error, seterror] = useState(false);
  const [articles, setarticles] = useState([]);
  const [country, setcountry] = useState("us");
  const [activated, setactivated] = useState("us");
  const [page, setpage] = useState(1);
  const pageSize = 10;
  const pages = Math.ceil(articles.length / 10);
  const paginatedArticles = articles.slice(
    (page - 1) * pageSize,
    page * pageSize
  );
  const top_headlines_api = `${BASE_URL}/top-headlines/category/${category}/${country}.json`;
  useEffect(
    function () {
      async function fetcharticles() {
        try {
          setloading(true);
          const res = await fetch(`${top_headlines_api}`);
          if (!res.ok) throw new Error("Error occurred!!");
          const data = await res.json();
          setarticles(data.articles);
          setTimeout(() => {
            setloading(false);
          }, 500);
        } catch {
          setarticles([]);
          seterror(true);
          console.error("Error fetching articles");
        }
      }
      fetcharticles();
    },
    [top_headlines_api]
  );
  useEffect(() => {
    document.body.setAttribute("data-bs-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  if (loading) return <Loadingscreen theme={theme} />;
  if (error) return <Error resetError={() => seterror(false)} theme={theme} />;
  return (
    <>
      <Navbar
        setcategory={setcategory}
        theme={theme}
        category={category}
        setcountry={setcountry}
        activated={activated}
        setactivated={setactivated}
      />
      <Newsboard
        articles={paginatedArticles}
        toggleTheme={toggleTheme}
        theme={theme}
      />
      <Pagination
        page={page}
        setpage={setpage}
        pages={pages}
        category={category}
        country={country}
      />
    </>
  );
}
function Pagination({ page, setpage, pages, category, country }) {
  const handlePrevious = () => {
    if (page > 1) setpage(page - 1);
  };

  const handleNext = () => {
    setpage(page + 1);
  };
  useEffect(() => {
    setpage(1);
  }, [category, country, setpage]);

  return (
    <div className="d-flex justify-content-center my-3 text-center fs-4">
      <button
        className="page-link bg-primary "
        onClick={handlePrevious}
        disabled={page < 2}
        style={{
          border: 0,
          width: "50px",
          fontWeight: "bolder",
          borderRadius: "15px 0px 0px 15px",
        }}
      >
        <i className="bi bi-arrow-left-circle-fill"></i>
      </button>

      <span
        className="page-link fs-5"
        onClick={setpage(page)}
        style={{
          border: "0",
          outline: "0",
          background: "rgba(0,0,0,0.1)",
          padding: "0 1rem",
        }}
      >
        {page}
        {"/"}
        {pages}
      </span>

      <button
        className="page-link bg-primary"
        onClick={handleNext}
        disabled={page === pages}
        style={{ border: 0, width: "50px", borderRadius: "0px 15px 15px 0px" }}
      >
        <i className="bi bi-arrow-right-circle-fill"></i>
      </button>
    </div>
  );
}

export default App;
