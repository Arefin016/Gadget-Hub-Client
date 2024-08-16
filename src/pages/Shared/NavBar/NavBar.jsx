import React, { useContext } from "react"
import logo from "../../../assets/Logo/GadgetHub.png"
import { Link } from "react-router-dom"
import { AuthContext } from "../../../providers/AuthProvider"

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext)

  // logout
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error))
  }

  const navOptions = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/allCategories"}>All Categories</Link>
      </li>
    </>
  )
  return (
    <div className="navbar bg-slate-400">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
        <img className="md:h-24 h-16 md:w-32 w-20" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="lg:tooltip lg:mt-4" data-tip={user?.displayName}>
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>
            </div>
            <button onClick={handleLogOut} className="btn btn-active btn-ghost">
              Registration
            </button>
          </>
        ) : (
          <>
            <button className="btn btn-active btn-ghost">
              <Link to={"/login"}>Login</Link>
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default NavBar
