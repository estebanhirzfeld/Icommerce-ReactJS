import "../../App.css"

const NavBar  = () => {
  return(
    <>
          <h3 className="Logo">Media Noche</h3>
            <ul className="navbar">
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Nosotros</a></li>
              <li><a href="#">Tienda</a></li>
            </ul>
            <p className="contador">0</p>
    </>
  )
}

export default NavBar;