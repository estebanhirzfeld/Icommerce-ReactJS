import "../../App.css"
import { Link, NavLink } from "react-router-dom"

const NavBar  = () => {
  return(
          <nav className="navbar">
            <div className="navbar-logo">

              <Link to="/">GamerGear</Link>

            </div>

            <div className="navbar-links">

              <ul>

                <li><Link to="/category/Notebooks">Notebooks</Link></li>
                <li><Link to="/category/Procesadores">Procesadores</Link></li>
                <li><Link to="/category/Mothers">Mothers</Link></li>
                <li><Link to="#">Ayuda</Link></li>

              </ul>

            </div>

            <div>
              <p className="contador">0</p>
            </div>
             
          </nav>
  )
}

export default NavBar;