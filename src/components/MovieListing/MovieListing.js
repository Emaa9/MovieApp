
import "./MovieListing.css";
import Movies from "../Movies/Movies";
import Shows from "../Shows/Shows";

const MovieListing= ()=>{
  return (
    <div className="movie-wrapper">
        <Movies/>
       <Shows/>
    </div>
  );
  }

export default MovieListing;