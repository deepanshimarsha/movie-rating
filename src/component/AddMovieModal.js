import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useMoviesContext } from "../context/MoviesContext";

function FormModal() {
  const [show, setShow] = useState(false);
  const { moviesDispatch } = useMoviesContext();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Title
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  onChange={(e) => {
                    moviesDispatch({
                      type: "CREATE_NEW_MOVIE",
                      field: "title",
                      value: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Summary
              </label>
              <div class="col-sm-10">
                <textarea
                  onChange={(e) => {
                    moviesDispatch({
                      type: "CREATE_NEW_MOVIE",
                      field: "summary",
                      value: e.target.value,
                    });
                  }}
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Year
              </label>
              <div class="col-sm-10">
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword"
                  onChange={(e) => {
                    moviesDispatch({
                      type: "CREATE_NEW_MOVIE",
                      field: "year",
                      value: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Cast
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  onChange={(e) => {
                    moviesDispatch({
                      type: "CREATE_NEW_MOVIE",
                      field: "cast",
                      value: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Genre
              </label>
              <div class="col-sm-10">
                <select
                  class="form-control"
                  id="exampleFormControlSelect1"
                  onChange={(e) => {
                    moviesDispatch({
                      type: "CREATE_NEW_MOVIE",
                      field: "genre",
                      value: e.target.value,
                    });
                  }}
                >
                  <option selected disabled>
                    Select genre
                  </option>
                  <option value="Adventure">Adventure</option>
                  <option value="Drama">Drama</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Biography">Biography</option>
                  <option value="Crime">Crime</option>
                  <option value="Action">Action</option>
                  <option value="Sci-Fi">Sci-Fi</option>
                  <option value="Romance">Romance</option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                ImageUrl
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  onChange={(e) => {
                    moviesDispatch({
                      type: "CREATE_NEW_MOVIE",
                      field: "imageURL",
                      value: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Rating
              </label>
              <div class="col-sm-10">
                <input
                  type="Number"
                  class="form-control"
                  id="inputPassword"
                  onChange={(e) => {
                    moviesDispatch({
                      type: "CREATE_NEW_MOVIE",
                      field: "rating",
                      value: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Director
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  onChange={(e) => {
                    moviesDispatch({
                      type: "CREATE_NEW_MOVIE",
                      field: "director",
                      value: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Writer
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  onChange={(e) => {
                    moviesDispatch({
                      type: "CREATE_NEW_MOVIE",
                      field: "writer",
                      value: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              moviesDispatch({ type: "ADD_MOVIE" });
              moviesDispatch({ type: "FILTER_MOVIES" });
              moviesDispatch({ type: "CLEAR_MOVIE_INPUT" });
              handleClose();
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FormModal;
