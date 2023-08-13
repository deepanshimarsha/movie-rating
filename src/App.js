import "./App.css";
import { Route, Routes } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import MoviesList from "./pages/MoviesList";
import WatchList from "./pages/WatchList";
import StarredMovies from "./pages/StarredMovies";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/starred" element={<StarredMovies />} />
        <Route path="/detail/:movieId" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
