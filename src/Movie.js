import Card from "react-bootstrap/Card";
import "./App.css";
import ReactStars from "react-stars";

function Movie({
  title = "unknown",
  description = "no description",
  posterURL = "https://www.iconpacks.net/icons/2/free-movie-icon-2802-thumb.png",
  rating = 0,
}) {
  return (
    <Card style={{ width: "18rem" }} id="x1">
      <Card.Img variant="top" src={posterURL} />
      <Card.Body>
        <Card.Title>
          <span style={{ color: "white" }}>{title}</span>
        </Card.Title>
        <Card.Text>
          <span style={{ color: "white" }}>{description}</span>
        </Card.Text>
        <Card.Text>
          <span style={{ color: "white" }}>
            <ReactStars
              count={5}
              edit={false}
              size={24}
              color2={"#ffd700"}
              value={rating}
            />
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Movie;
