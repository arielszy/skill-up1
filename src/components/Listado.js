//hooks
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

function Listado() {
  const Navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token"); //recupera los datos de la memoria local
    if (!token) {
      Navigate("/"); //regresa al root
    } //la siguiente linea desactiva warning de dependencia.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="row">
      <div className="col-3 " style={{}}>
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/" className="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        </div>
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/" className="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listado;
