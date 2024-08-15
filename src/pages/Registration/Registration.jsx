import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import Swal from "sweetalert2"
import SocialLogin from "../../components/SocialLogin/SocialLogin"

const Registration = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const { createUser, updateUserProfile } = useContext(AuthContext)
  const navigate = useNavigate()

  const onSubmit = (data) => {
    console.log(data)
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user
      console.log(loggedUser)
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          console.log("user profile info updated")
          reset()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User created successfully",
            showConfirmButton: false,
            timer: 1500,
          })
          navigate("/")
        })
        .catch((error) => console.log(error))
    })
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Registration Now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="Name"
                {...register("name", { required: true })}
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600 font-medium">
                  Name is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="name"
                placeholder="Photo URL"
                {...register("photoURL", { required: true })}
                className="input input-bordered"
              />
              {errors.photoURL && (
                <span className="text-red-600 font-medium">
                  Photo URL is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="Email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600 font-medium">
                  Email is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern:
                    /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z])/,
                })}
                placeholder="Password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600 font-medium">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600 font-medium">
                  Password must be 6 Characters
                </p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600 font-medium">
                  Password must be less than 20 Characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600 font-medium">
                  Password must have one Uppercase one lower case, one number
                  and one special character
                </p>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Registration"
              />
            </div>
          </form>
          <p className="text-center mb-5">
            Already have an account?{" "}
            <span className="text-blue-600 font-bold">
              <Link to={"/login"}>Login</Link>
            </span>
          </p>
          <div className="text-center mb-5">
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration
