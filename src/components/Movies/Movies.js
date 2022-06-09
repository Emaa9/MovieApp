import { getAllMovies } from '../../features/movies/movieSlice';
import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';
import "./Movies.css";

const Movies =() =>{
    const movies = useSelector(getAllMovies);
    let renderMovies="";
    
    renderMovies= movies.Response === "True"? (
        movies.Search.map((movie,index) => (
            <MovieCard key={index} data={movie}/>
        ))
      ) : (
      <div className="movies-error">
          <h3>{movies.Error}</h3>
      </div>
      );
      return(
           <div className='movie-list'>
             <h2 className='movies'>Movies</h2>
          <div className='movie-container'>{renderMovies}</div>
       </div>
       )
}
   
export default Movies;