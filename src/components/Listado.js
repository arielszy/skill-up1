import { Link  } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from 'react';
import '../css/movie.css';
import { swAlert } from '@sweetalert/with-react';

  
function Listado() {
  
  const [movieList, setMovieList] = useState([]);//siempe inicializar el estado
  
  useEffect(() => {
    axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=0e685fd77fb3d76874a3ac26e0db8a4b&language=es"
    ).then(response => {
      setMovieList(response.data.results)
    })
      .catch(error => { swAlert(<h3>No hemos podido conectar al servidor. intente mas tarde.</h3>); })
  }, [setMovieList]);
const url = "http://image.tmdb.org/t/p/w500/";
  return (
    <>
      
      <div className="row mx-auto">
        {
          
          movieList.map((movie, index) => {
            return (
              <div className="col-3 mx-auto" style={{}} key={index}>
                <div className="card my-4">
                  <img src={url+movie.poster_path} className="card-img-top pic" alt="poster" />
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">
                      {movie.overview.substring(0,100)}...
                    </p>
                    <Link to="/" className="btn btn-primary">
                      ver mas detalles
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
}
      </div>
    </>
  );
}

export default Listado;
