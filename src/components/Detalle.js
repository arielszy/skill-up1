
function Detalle() {
  let movieID = new URLSearchParams(window.location.search); //recibe el query string desde url
  movieID = movieID.get("movieID"); //recibe en movieID
  const movieDetails = [];
  
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
