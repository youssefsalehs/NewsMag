import image from "../assets/6.jpg";
function Newsitem({ article }) {
  const { title, description, url, urlToImage } = article;
  function getTimeDifference(dateString) {
    const givenDate = new Date(dateString);
    const now = new Date();

    const diffMs = now - givenDate; // Difference in milliseconds
    const diffSecs = Math.floor(diffMs / 1000);
    const diffMins = Math.floor(diffSecs / 60);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    return diffDays;
  }
  const diff = getTimeDifference(article.publishedAt);
  return (
    <div
      className="card bg-primary-subtle"
      style={{ width: "300px", Height: "300px" }}
    >
      <img
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
        src={urlToImage ? urlToImage : image}
        className="card-img-top "
      />
      <div className="card-body bg-primary-subtle">
        <h5 className="card-title">{title?.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 60)
            : "news is a report of current event.it is information about something that has just happened.".slice(
                0,
                60
              )}
          {`...`}
        </p>
        <p>
          {diff}
          {diff > 1 ? " days ago" : " day ago"}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
}

export default Newsitem;
