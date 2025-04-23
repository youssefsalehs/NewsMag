import image from "../assets/6.jpg";
import TimeAgo from "./TimeAgo";
function Newsitem({ article }) {
  const { title, description, url, urlToImage, publishedAt } = article;

  return (
    <div
      className="card bg-primary-subtle"
      style={{
        width: "300px",
        Height: "300px",
        overflow: "hidden",
        margin: "0 auto",
      }}
    >
      <img
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
        src={urlToImage ? urlToImage : image}
        className="card-img-top "
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = image;
        }}
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
          {"..."}
        </p>

        <TimeAgo dateString={publishedAt} />

        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
}

export default Newsitem;
