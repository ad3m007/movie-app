import Card from "react-bootstrap/Card";
import "./App.css";
import ReactStars from "react-stars";
import { Routes, Route, Link} from "react-router-dom";


function Movie({
  title = "unknown",
  description = "no description",
  posterURL = "https://www.iconpacks.net/icons/2/free-movie-icon-2802-thumb.png",
  rating = 0,
}) {
  return (
           <Link to={`/Description/${title}`}>
        <Card style={{ width: "18rem" }} id="x1">
      <Card.Img variant="top" src={posterURL} />
      <Card.Body>
        <Card.Title>
          <span style={{ color: "white" }}>{title}</span>
        </Card.Title>
     
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
       </Link>

  );
}

export default Movie;
