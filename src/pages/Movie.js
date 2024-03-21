import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState([])
  const params = useParams();
  const movieId = params.id

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${movieId}`)
    .then(r=>r.json())
    .then(setMovie)
  }, [movieId])

  if(!movie.id){
    return <h1>Loading...</h1>;
  };

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {movie.genres.map(genre => <span key={genre}>{genre}</span> )}
      </main>
    </>
  );
};

export default Movie;