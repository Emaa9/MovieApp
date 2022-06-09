import React, { useEffect } from 'react';
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux"
import { fetchAsyncMovieOrShowDetail, getSelectedMovieOrShow,removeSelectedMovieOrShow } from '../../features/movies/movieSlice';
import "./MovieDetail.css";

const MovieDetail =() =>{
    const { imdbID } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getSelectedMovieOrShow);
    console.log(data);
    useEffect(()=>{
       dispatch(fetchAsyncMovieOrShowDetail(imdbID));
       return () =>{
           dispatch(removeSelectedMovieOrShow());
       }
    }, [dispatch, imdbID]);
    return(
       
        <div className='movie-section'>
          {Object.keys(data).length === 0 ?
          (<div>...Loading</div>
          ) : (
            <>
            <div className='section-left'>
                <div className='movie-title'>{data.Title}</div>
                <div className='movie-rating'>
                    <span>IMDB Rating: {data.imdbRating}
                    </span>
                    <span>IMDB Votes: {data.imdbVotes}</span>
                    <span>Year: {data.Year}
                    </span>
                    </div>
                    <div className='movie-plot'>
                    <img className='img' src={data.Poster} alt={data.Title} />{data.Plot}
                    <div className='movie-info'>
                        <div>
                            <span>Director</span>
                            <span>{data.Director}</span>
                        </div>
                        <div>
                            <span>Writer</span>
                            <span>{data.Writer}</span>
                        </div>
                        <div>
                            <span>Genre</span>
                            <span>{data.Genre}</span>
                        </div>
                        <div>
                            <span>Languages</span>
                            <span>{data.Language}</span>
                        </div>
                        <div>
                            <span>Awards</span>
                            <span>{data.Awards}</span>
                        </div>
                    </div>
                    </div>
                  
            </div> 
           
            </>
          )}
        </div>
    );
};

export default MovieDetail;