import "../../App.css"

const NavBar  = () => {
  return(
          <nav className="navbar">
            <div className="navbar-logo">
              <p>GamerGear</p>
            </div>
            <div className="navbar-links">
              <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Arma tu PC</a></li>
                <li><a href="#">Ayuda</a></li>
              </ul>
            </div>
            <div>
              <p className="contador">0</p>
            </div>
             
          </nav>
  )
}

export default NavBar;