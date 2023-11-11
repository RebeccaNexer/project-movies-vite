import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
export const Movie = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
  
    useEffect(() => {
     const api = 'e9b2f1cd6a41e02af5f987fd4188549b';

      const fetchMovie = async () => {
        try {
            const response = await fetch(
              `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api}&language=en-US`
            );
            if (!response.ok) {
              throw new Error("Something went wrong");
            }
    
            const data = await response.json();
            setMovie(data);
          } catch (error) {
            console.error("Something went wrong", error);
          }
        };
    
        fetchMovie();
      }, [movieId]);

      if (!movie) {
        return <div>Loading movie...</div>;
      }
    

      return (
        <>
          <div className="movie-detail-container">
           <a className='go-home' href="/">
           🡰 Back to movies
           </a>
            <div className="movie-detail">
              <div>
                 <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                /> 
              </div>
              <div className="movie-detail">
                <h1>{movie.title}</h1>
                <span className="bold">Rating: </span>
                <p>⭐{movie.vote_average}</p>
                <span className="bold">Description: </span>
                <p>{movie.overview}</p>
              </div>
            </div>
          </div>
        </>
      );
  };

