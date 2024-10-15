import { Link, useNavigate } from "react-router-dom"
import { logo } from "../constants"
import { useDispatch, useSelector } from "react-redux"
import { removeItem } from "../helpers/persistance-storage"
import { logoutUser } from "../slice/auth"

function Navbar() {

  const {loggedIn, user} = useSelector(state => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logoutUser())
    removeItem('token')
    navigate('/login')
  }

  return (
    <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3">
      <Link to='/'>
        <img src={logo} alt="logo-image" width='200' className="rounded" />
      </Link>

      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        {loggedIn ? (
          <>
            <p className="me-3 m-0 py-2 text-dark text-decoration-none">
              {user.username}
            </p>
            <button className="btn btn-outline-danger" onClick={logoutHandler()}>Logout</button>
          </>
        ) : (
          <>
            <Link to={'/login'} className="me-3 py-2 text-dark text-decoration-none">
              Login
            </Link>
            <Link to={'/register'} className="me-3 py-2 text-dark text-decoration-none">
              Register
            </Link>
          </>
        )}
      </nav>
    </div>
  )
}

export default Navbar