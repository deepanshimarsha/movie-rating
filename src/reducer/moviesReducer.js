const moviesReducer = (state, action) => {
  switch (action.type) {
    case "SET_FILTER_BY": {
      if (action.filter === "genre") {
        return { ...state, filterByGenre: action.input };
      }
      if (action.filter === "year") {
        return { ...state, filterByYear: action.input };
      }
      if (action.filter === "rating") {
        return { ...state, filterByRating: action.input };
      }
      if (action.filter === "search") {
        return {
          ...state,
          searchInput: action.input,
        };
      }
      break;
    }
    case "FILTER_MOVIES": {
      let newFilteredMovies = state.movies.slice();

      if (state.filterByGenre.length) {
        console.log("genre");
        newFilteredMovies = newFilteredMovies.filter(({ genre }) =>
          genre.includes(state.filterByGenre)
        );
      }
      if (state.filterByGenre === "all genre") {
        console.log("genre");
        newFilteredMovies = state.movies.slice();
      }
      if (state.filterByYear === "1") {
        newFilteredMovies = newFilteredMovies.filter(
          ({ year }) => year >= 1990 && year <= 1995
        );
      }
      if (state.filterByYear === "2") {
        newFilteredMovies = newFilteredMovies.filter(
          ({ year }) => year >= 1996 && year <= 2000
        );
      }
      if (state.filterByYear === "3") {
        newFilteredMovies = newFilteredMovies.filter(
          ({ year }) => year >= 2001 && year <= 2005
        );
      }
      if (state.filterByYear === "4") {
        newFilteredMovies = newFilteredMovies.filter(
          ({ year }) => year >= 2006 && year <= 2010
        );
      }
      if (state.filterByRating === "below 3") {
        newFilteredMovies = newFilteredMovies.filter(
          ({ rating }) => rating < 3
        );
      }
      if (state.filterByRating === "above 3") {
        newFilteredMovies = newFilteredMovies.filter(
          ({ rating }) => rating >= 3
        );
      }
      if (state.filterByRating === "above 5") {
        newFilteredMovies = newFilteredMovies.filter(
          ({ rating }) => rating > 5
        );
      }
      if (state.filterByRating === "above 8") {
        newFilteredMovies = newFilteredMovies.filter(
          ({ rating }) => rating > 8
        );
      }

      newFilteredMovies = newFilteredMovies.filter(
        ({ title, cast, director }) => {
          const titleBool = title
            .toLowerCase()
            .includes(state.searchInput.toLowerCase());
          const directorBool = director
            .toLowerCase()
            .includes(state.searchInput.toLowerCase());
          const castBool = cast
            .map((ele) => ele.toLowerCase())
            .includes(state.searchInput.toLowerCase());
          console.log(titleBool, directorBool, castBool);
          return titleBool || directorBool || castBool;
        }
      );

      return {
        ...state,
        filteredMovies: newFilteredMovies,
      };
    }
    case "ADD_TO_WATCHLIST": {
      return {
        ...state,
        watchList: [...state.watchList, action.movie],
      };
    }
    case "ADD_TO_STARRED": {
      return {
        ...state,
        starredMovies: [...state.starredMovies, action.movie],
      };
    }
    case "REMOVE_FROM_WATCHLIST": {
      return {
        ...state,
        watchList: state.watchList.filter(({ id }) => id !== action.movie.id),
      };
    }
    case "REMOVE_FROM_STARRED": {
      return {
        ...state,
        starredMovies: state.starredMovies.filter(
          ({ id }) => id !== action.movie.id
        ),
      };
    }

    case "CREATE_NEW_MOVIE": {
      if (action.field === "title") {
        return {
          ...state,
          addMovie: {
            ...state.addMovie,
            title: action.value,
            id: state.movies.length + 1,
          },
        };
      }
      if (action.field === "summary") {
        return {
          ...state,
          addMovie: { ...state.addMovie, summary: action.value },
        };
      }
      if (action.field === "year") {
        return {
          ...state,
          addMovie: { ...state.addMovie, year: action.value },
        };
      }
      if (action.field === "cast") {
        return {
          ...state,
          addMovie: { ...state.addMovie, cast: [action.value] },
        };
      }
      if (action.field === "genre") {
        return {
          ...state,
          addMovie: { ...state.addMovie, genre: [action.value] },
        };
      }
      if (action.field === "imageURL") {
        return {
          ...state,
          addMovie: { ...state.addMovie, imageURL: action.value },
        };
      }
      if (action.field === "rating") {
        return {
          ...state,
          addMovie: { ...state.addMovie, rating: action.value },
        };
      }
      if (action.field === "director") {
        return {
          ...state,
          addMovie: { ...state.addMovie, director: action.value },
        };
      }
      if (action.field === "writer") {
        return {
          ...state,
          addMovie: { ...state.addMovie, writer: action.value },
        };
      }
      break;
    }

    case "ADD_MOVIE": {
      return { ...state, movies: [...state.movies, state.addMovie] };
    }
    case "CLEAR_MOVIE_INPUT": {
      return {
        ...state,
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
      };
    }
    default:
      throw new Error("Unknown action type");
  }
};
export { moviesReducer };
