import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Newsboard from "./components/Newsboard";
import Loadingscreen from "./components/Loadingscreen";
import Error from "./components/Error";
const KEY = `ce5674f61a454fa29ddb15d69ae15fbe`;

function App() {
  const [category, setcategory] = useState("general");
  const [loading, setloading] = useState(true);
  const [theme, setTheme] = useState("light");
  const [error, seterror] = useState(false);
  const [articles, setarticles] = useState([]);
  useEffect(
    function () {
      async function fetcharticles() {
        try {
          setloading(true);
          const res = await fetch(
            `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${KEY}`
          );
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
    [category]
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
      <Navbar setcategory={setcategory} theme={theme} category={category} />
      <Newsboard articles={articles} toggleTheme={toggleTheme} theme={theme} />
    </>
  );
}

export default App;
