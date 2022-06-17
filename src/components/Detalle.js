/* eslint-disable no-undef */
import { useEffect } from "react";
import { axios } from "axios";
import { swAlert } from "@sweetalert/with-react";
function Detalle() {
  let movieQ = new URLSearchParams(window.location.search); //recibe el query string desde url
  let movieID = movieQ.get("movieID"); //recibe en movieID

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieID}?api_key=0e685fd77fb3d76874a3ac26e0db8a4b&language=es`
      )
      .then((response) => {
        const movieDetails = response.data.results;
      })
      .catch((error) => {
        swAlert(
          <h3>No hemos podido conectar al servidor. intente mas tarde.</h3>
        );
      });
  }, [movieID]);
  return (
    <>
      <h1>Detalle de la pelicula:</h1>
      <h1>Titulo:{movieDetails.title}</h1>
      <div className="row">
        <div className="col_4">imagen</div>
        <div className="col_8">
          <h1>fecha de estreno:{movieDetails.release_date}</h1>
          <h1>reseña:</h1>
          <p>{movieDetails.overview}</p>
          <h5>generos:</h5>
          <ul>
            <li>g1</li>
            <li>g2</li>
            <li>g3</li>
            <li>g4</li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Detalle;
