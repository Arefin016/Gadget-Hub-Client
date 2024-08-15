import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

const Login = () => {
  const { signIn } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || "/"

  const handleLogin = (event) => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    console.log(email, password)
    signIn(email, password).then((result) => {
      const user = result.user
      console.log(user)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User Login Successfully",
        showConfirmButton: false,
        timer: 1500,
      })
      navigate(from, { replace: true })
    })
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className="text-center mb-5">
            <small>
              New Here?{" "}
              <span className="text-blue-600 font-bold">
                <Link to={"/registration"}>Create An Account? </Link>
              </span>
            </small>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
