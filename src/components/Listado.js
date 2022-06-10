//hooks
import { Link , Navigate } from "react-router-dom";


function Listado() {
  
  let token = localStorage.getItem("token"); //recupera los datos de la memoria local


  return (
    <>
       {!token && <Navigate to="/" /> /*si no hay token redirect a home */}
      
      <div className="row mx-auto">
        <div className="col-3 mx-auto" style={{}}>
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/" className="btn btn-primary">
                Go somewhere
              </Link>
            </div>
          </div>
        </div>
        <div className="col-3 mx-auto" style={{}}>
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/" className="btn btn-primary">
                Go somewhere
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Listado;
