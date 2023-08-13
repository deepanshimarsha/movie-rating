import "../styles/home.css";
import { useMoviesContext } from "../context/MoviesContext";
import { NavLink } from "react-router-dom";
export default function MovieCard({ movie, watchlist, starred, list }) {
  const { moviesState, moviesDispatch } = useMoviesContext();
  const { title, summary, imageURL } = movie;
  const isStarred = moviesState.starredMovies.find(({ id }) => id === movie.id);
  const isWatchList = moviesState.watchList.find(({ id }) => id === movie.id);

  return (
    <div class="card" style={{ width: "18rem" }}>
      <NavLink to={`/detail/${movie.id}`}>
        <img class="card-img-top" src={imageURL} alt="movie" />
      </NavLink>

      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{summary}</p>
        {watchlist && (
          <button
            type="button"
            class="btn btn-dark"
            onClick={() => {
              moviesDispatch({ type: "REMOVE_FROM_WATCHLIST", movie: movie });
            }}
          >
            remove from watchlist
          </button>
        )}
        {starred && (
          <button
            type="button"
            class="btn btn-dark"
            onClick={() => {
              moviesDispatch({ type: "REMOVE_FROM_STARRED", movie: movie });
            }}
          >
            unstar
          </button>
        )}
        {list && (
          <div className="action-btn">
            <button
              type="button"
              class="btn btn-dark"
              onClick={() => {
                if (isStarred) {
                  moviesDispatch({ type: "REMOVE_FROM_STARRED", movie: movie });
                } else {
                  moviesDispatch({ type: "ADD_TO_STARRED", movie: movie });
                }
              }}
            >
              {isStarred ? "unstar" : "star"}
            </button>
            <button
              type="button"
              class="btn btn-dark"
              onClick={() => {
                if (isWatchList) {
                  moviesDispatch({
                    type: "REMOVE_FROM_WATCHLIST",
                    movie: movie,
                  });
                } else {
                  moviesDispatch({ type: "ADD_TO_WATCHLIST", movie: movie });
                }
              }}
            >
              {isWatchList ? "Remove from  watchlist" : "Add to  watchlist"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
