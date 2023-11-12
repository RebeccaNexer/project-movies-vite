// const api = 'e9b2f1cd6a41e02af5f987fd4188549b';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
export const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const api = import.meta.env.VITE_OPENDB_KEY;

    const fetchMovies = async () => {
      try {
        const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${api}&language=en-US&page=1`
        );

        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Something went wrong", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1 className="title">Movies</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <Link
            key={movie.id}
            to={`/movie/${movie.id}`
            }
          >
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            /> 
            <div className="movie-details">
              <h2>{movie.title}</h2>
              <p>Release date: {movie.release_date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Movies;