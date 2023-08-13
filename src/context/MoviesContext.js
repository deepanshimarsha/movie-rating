import { createContext, useReducer, useContext } from "react";
import { moviesReducer } from "../reducer/moviesReducer";
import { movies } from "../db/data";
import { useEffect } from "react";

const MoviesContext = createContext(null);

const MoviesContextProvider = ({ children }) => {
  const initialState = {
    movies: movies,
    filteredMovies: movies,
    addMovie: {
      title: "",
      summary: "",
      year: "",
      cast: "",
      genre: "",
      rating: "",
      director: "",
      writer: "",
      imageURL: "",
    },
    filterByGenre: "",
    filterByYear: "",
    filterByRating: "",
    searchInput: "",
    watchList: [],
    starredMovies: [],
  };

  const [moviesState, moviesDispatch] = useReducer(moviesReducer, initialState);
  console.log(moviesState);

  useEffect(() => {
    moviesDispatch({ type: "FILTER_MOVIES" });
  }, [
    moviesState.filterByGenre,
    moviesState.filterByYear,
    moviesState.filterByRating,
    moviesState.searchInput,
  ]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <MoviesContext.Provider value={{ moviesState, moviesDispatch }}>
      {children}
    </MoviesContext.Provider>
  );
};

const useMoviesContext = () => useContext(MoviesContext);

export { useMoviesContext, MoviesContextProvider };
