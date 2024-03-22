import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';

const Directors = () => {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/directors')
      .then((response) => response.json())
      .then((data) => setDirectors(data));
  }, []);

  return (
    <div>
      <h1>
        <NavBar />
        Directors Page
      </h1>
      {directors.map((directors) => (
        <article key= {directors.id}>
          <h2>{directors.name}</h2>
          <ul>
            {directors.movies.map((movie) => (
              <li key= {movie}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}

    </div>
  );
};

export default Directors;