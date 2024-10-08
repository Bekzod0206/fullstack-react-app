import { Link } from "react-router-dom"
import { logo } from "../constants"

function Navbar() {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3">
      <Link to='/'>
        <img src={logo} alt="logo-image" width='200' className="rounded" />
      </Link>

      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <Link to={'/login'} className="me-3 py-2 text-dark text-decoration-none">
          Login
        </Link>
        <Link to={'/register'} className="me-3 py-2 text-dark text-decoration-none">
          Register
        </Link>
      </nav>
    </div>
  )
}

export default Navbar