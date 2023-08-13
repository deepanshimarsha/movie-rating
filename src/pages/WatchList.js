import { NavLink } from "react-router-dom";
import MovieCard from "../component/MoviesCard";
import { useMoviesContext } from "../context/MoviesContext";
import "../styles/home.css";
export default function WatchList() {
  const { moviesState } = useMoviesContext();
  return (
    <div className="container-fluid">
      <div className="row">
        <NavLink to="/">
          {" "}
          <div className="col-2">back</div>
        </NavLink>
      </div>
      <div className="row">
        <h2>Watch List</h2>
      </div>

      <div className="row">
        <div className="container">
          {!moviesState.watchList.length ? (
            <p>No Movies</p>
          ) : (
            <div className="movie-list watchlist">
              {moviesState.watchList.map((movie) => {
                return (
                  <div className="col">
                    <MovieCard movie={movie} watchlist={true} />{" "}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
