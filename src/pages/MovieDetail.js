import { useParams } from "react-router-dom";
import { useMoviesContext } from "../context/MoviesContext";

export default function MovieDetail() {
  const { moviesState } = useMoviesContext();
  const { movieId } = useParams();

  const movie = moviesState.movies.find(({ id }) => id === Number(movieId));
  const {
    title,
    summary,
    imageURL,
    genre,
    rating,
    director,
    writer,
    cast,
    year,
  } = movie;

  return (
    <div className="container-fluid text-center">
      <div class="card mb-3" style={{ maxWidth: "700px" }}>
        <div class="row no-gutters">
          <div class="col-md-4 ">
            <img
              src={imageURL}
              class="card-img"
              alt="movie"
              style={{ height: "100%" }}
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{summary}</p>
              <p class="card-text">Year : {year}</p>
              <p class="card-text">Genre : {genre}</p>
              <p class="card-text">Rating : {rating}</p>
              <p class="card-text">Director : {director}</p>
              <p class="card-text">Writer: {writer}</p>
              <p class="card-text">Cast : {cast}</p>
              <div className="action-btn">
                {" "}
                <button type="button" class="btn btn-dark">
                  Star
                </button>
                <button type="button" class="btn btn-dark">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
