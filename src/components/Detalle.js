import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { swAlert } from "@sweetalert/with-react";
function Detalle() {
  let movieQ = new URLSearchParams(window.location.search); //recibe el query string desde url
  let movieID = movieQ.get("movieID"); //recibe en movieID
  const [movieDetails, setMovieDetails] = useState(null); //siempe inicializar el estado

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieID}?api_key=0e685fd77fb3d76874a3ac26e0db8a4b&language=es`
      )
      .then((response) => {
        setMovieDetails(response.data);
      })
      .catch((error) => {
        swAlert(
          <h3>No hemos podido conectar al servidor. intente mas tarde.</h3>
        );
      });
  }, [movieID]);

  if (movieDetails) {
    return (
      <>
        <h1>Detalle de la pelicula:</h1>
        <div className="row">
          <div className="col_4">
            <h2>Titulo: {movieDetails.title}</h2>

            <h5>Portada: </h5>
            <img
              src={"http://image.tmdb.org/t/p/w500/" + movieDetails.poster_path}
              className="card-img-top pic"
              alt="poster"
            />
          </div>
          <div className="col_8">
            <h3>fecha de estreno:{movieDetails.release_date}</h3>
            <h3>reseña:</h3>
            <p>{movieDetails.overview}</p>
            <h5>rating: {movieDetails.vote_average}</h5>
            <h5>generos:</h5>
            <ul>
              {movieDetails.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  } else {
    return <h1>Cargando...</h1>;
  }
}
export default Detalle;
