
const Categorias = () => {
    return (
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <button className="btn btn-dark">Categorias</button> 
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Pesos</a></li>
            <li><a className="dropdown-item" href="#">Dolares</a></li>
            <li><a className="dropdown-item" href="#">Euros</a></li>
          </ul>
        </li>
    );
}

export default Categorias;
