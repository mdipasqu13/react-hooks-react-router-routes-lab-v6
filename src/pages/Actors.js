import { useEffect, useState } from "react";
import NavBar from '../components/NavBar';

const Actors = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/actors')
      .then((response) => response.json())
      .then((data) => setActors(data));
  }, []);
  return (
    <>
      <h1>
        <NavBar />
        Actors Page
      </h1>
      {actors.map((actor) => (
        <article key={actor.id}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie) => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}

    </>
  );
};

export default Actors;