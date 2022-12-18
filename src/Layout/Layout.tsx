import { Outlet, Link, Navigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useClientContext } from "../Context/Context"

function Layout() {
  const location = useLocation()
  const { state } = useClientContext()

  if (
    state &&
    !state.me &&
    location.pathname !== "/login" &&
    // don't interfere with oauth
    !location.search.includes("code") &&
    // don't interfere with 404
    location.pathname !== "/404"
  ) {
    return <Navigate to="/login" replace />
  }

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/404">404</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  )
}

export { Layout }
