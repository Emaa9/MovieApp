import React from 'react';
import { useSelector } from 'react-redux';
import {getAllShows } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import "./Shows.css"
const Shows =() =>{
    
    const shows = useSelector(getAllShows);

    let renderShows="";
    renderShows= shows.Response === "True"? (
        shows.Search.map((show,index) => (
            <MovieCard key={index} data={show}/>
        ))
      ) : (
      <div className="shows-error">
          <h3>{shows.Error}</h3>
      </div>
      );
    
      return(
           <div className='show-list'>
             <h2 className='shows'>Shows</h2>
          <div className='show-container'>{renderShows}</div>
       </div>
       )}
      export default Shows;
