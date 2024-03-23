/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import defaultImage from '../assets/News.jpg'
const NewsItem = ({ title, description, image, url }) => {
  return (
    <div className="col-md-3 mb-3">
      <div className="card bg-dark text-light">
        <img
          src={image || defaultImage}
          style={{ height: "200px" }}
          className="card-img-top"
          alt="News Image"
        />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 50)}</h5>
          <p className="card-text">
            {description ? description.slice(0, 90) : "No Description"}
          </p>
          <a href={url} className="btn btn-primary">
            Read More...
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
