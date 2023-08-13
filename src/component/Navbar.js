import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import { useState } from "react";
import { useMoviesContext } from "../context/MoviesContext";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const { moviesDispatch } = useMoviesContext();

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid navbar">
        <NavLink to="/" class="navbar-brand">
          IMDB
        </NavLink>

        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => {
              moviesDispatch({
                type: "SET_FILTER_BY",
                filter: "search",
                input: e.target.value,
              });
            }}
          />
          {/* <button
            class="btn btn-outline-success"
            type="submit"
            onClick={() => {
              moviesDispatch({ type: "FILTER_MOVIES" });
            }}
          >
            Search
          </button> */}
        </form>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => {
            console.log("clicking");
            setShow(!show);
          }}
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{ display: show ? "block" : "none" }}
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar-links">
            <li class="nav-item">
              <NavLink to="/" class="nav-link active" aria-current="page">
                {" "}
                Movies
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/watchlist" class="nav-link">
                Watch List
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/starred" class="nav-link">
                {" "}
                Starred Movies
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
