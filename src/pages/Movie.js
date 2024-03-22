import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams(); 
  const [movie, setMovie] = useState(null); 

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then(response => {
        if(response.ok){
          return response.json()
        } else {
          console.error('Could not fetch data')
        }
      })
      .then((data) => {
        const selectedMovie = data.find((m) => m.id === Number(id));
        setMovie(selectedMovie); 
      });
  }, []); 

  return (
    <div>
      <h1>
        <NavBar />
        Movie Details
      </h1>
      {movie ? (
        <article>
          <h1>{movie.title}</h1>
          <p>{movie.time}</p>
          <ul>
            {movie.genres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
        </article>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Movie;