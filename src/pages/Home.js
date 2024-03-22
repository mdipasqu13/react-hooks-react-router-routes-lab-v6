import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import NavBar from '../components/NavBar';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then(response => {
        if(response.ok){
          return response.json();
        } else {
          console.error('Could not fetch data');
        }
      })
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching data:', error)); 
  }, []); 


  return (
    <div>
      <h1>
        <NavBar />
        Home Page
      </h1>
      <div>
        {movies.map((movie) => (
          <MovieCard key={movie.id} title={movie.title} movieId={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;