import { NavLink } from "react-router-dom";
import MovieCard from "../component/MoviesCard";
import { useMoviesContext } from "../context/MoviesContext";
import "../styles/home.css";
export default function StarredMovies() {
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
        <h2>Starred Movies</h2>
      </div>

      <div className="container">
        {!moviesState.starredMovies.length ? (
          <p>No Movies</p>
        ) : (
          <div className="movie-list starred">
            {moviesState.starredMovies.map((movie) => {
              return (
                <div className="col">
                  <MovieCard movie={movie} starred={true} />{" "}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
