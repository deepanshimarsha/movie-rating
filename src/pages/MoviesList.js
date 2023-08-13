import Navbar from "../component/Navbar";
import "../styles/home.css";
import { useMoviesContext } from "../context/MoviesContext";
import MovieCard from "../component/MoviesCard";
import FormModal from "../component/AddMovieModal";

export default function MoviesList() {
  const { moviesState, moviesDispatch } = useMoviesContext();

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="row header">
        <div className="col-3">
          <h4>Movies ({moviesState.filteredMovies.length})</h4>
        </div>
        <div className="col-2">
          <select
            onChange={(e) => {
              moviesDispatch({
                type: "SET_FILTER_BY",
                filter: "genre",
                input: e.target.value,
              });
            }}
          >
            <option value="all genre">All genre</option>
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
        <div className="col-2">
          <select
            onChange={(e) => {
              moviesDispatch({
                type: "SET_FILTER_BY",
                filter: "year",
                input: e.target.value,
              });
            }}
          >
            <option selected disabled>
              Release year
            </option>
            <option value="1">1990-1995</option>
            <option value="2">1996-2000</option>
            <option value="3">2001-2005</option>
            <option value="4">2006-2010</option>
          </select>
        </div>
        <div className="col-2">
          <select
            onChange={(e) => {
              moviesDispatch({
                type: "SET_FILTER_BY",
                filter: "rating",
                input: e.target.value,
              });
            }}
          >
            <option selected disabled>
              Rating
            </option>
            <option value="below 3">below 3</option>
            <option value="above 3">Above 3</option>
            <option value="above 5">Above 5</option>
            <option value="above 8">Above 8</option>
          </select>
        </div>
        <div className="col-3">
          <FormModal />
        </div>
      </div>
      <div className="container">
        <div className="movie-list">
          {moviesState.filteredMovies.map((movie) => {
            return (
              <div className="col">
                <MovieCard movie={movie} list={true} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
