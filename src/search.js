import Form from "react-bootstrap/Form";
import ReactStars from "react-stars";

const Search = ({ setSearchTitle, setSearchRating }) => {
  const ratingChanged = (newRating) => {
    setSearchRating(newRating);
  };

  return (
    <>
      <Form.Group>
        <Form.Label>Search:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Title"
          onChange={(e) => setSearchTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Rating</Form.Label>
        <ReactStars
          count={5}
          size={24}
          color2={"#ffd700"}
          onChange={ratingChanged}
        />
      </Form.Group>
    </>
  );
};

export default Search;
