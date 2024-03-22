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
    <div>
      <h1>
        <NavBar />
        Actors Page
      </h1>
      {actors.map((actor) => (
        <article>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie) => (
              <li>{movie}</li>
            ))}
          </ul>
        </article>
      ))}

    </div>
  );
};

export default Actors;