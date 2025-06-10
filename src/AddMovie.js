import Modal from "react-modal";
import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import ReactStars from "react-stars";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const AddMovie = ({ addM }) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);

  function toggleModal() {
    setIsOpen(!modalIsOpen);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  const titleRef = useRef();
  const descriptionRef = useRef();
  const posterRef = useRef();

  const handleAdd = () => {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const posterURL = posterRef.current.value;

    const newMovie = {
      title,
      description,
      posterURL,
      rating,
    };
    addM(newMovie);
    toggleModal();
  };

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  return (
    <div>
      <Button variant="dark" onClick={toggleModal}>
        Add new movie
      </Button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={toggleModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add movie</h2>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} md="4">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Title"
                ref={titleRef}
              />
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Description"
                ref={descriptionRef}
              />
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>Poster Url</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Poster url"
                ref={posterRef}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4">
              <Form.Label>Rating</Form.Label>
              <ReactStars
                count={5}
                size={24}
                color2={"#ffd700"}
                onChange={ratingChanged}
              />
            </Form.Group>
          </Row>
          <Button onClick={handleAdd}>Add movie</Button>
          <Button variant="danger" onClick={toggleModal}>
            Cancel
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default AddMovie;
