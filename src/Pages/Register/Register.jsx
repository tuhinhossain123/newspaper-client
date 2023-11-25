import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate()

  const { createUser } = useContext(AuthContext);
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result=>{
        const loggedUser = result.user;
        console.log(loggedUser)
         Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User created Successfully",
          showConfirmButton: false,
          timer: 1500
        });
        navigate("/")

    })
  };

  return (
    <div className=" w-full md:w-[35%] mx-auto ">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Please Register</h1>
        </div>
        <div className=" w-full  shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Enter Your Name"
                  name="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">name is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">img url</span>
                </label>
                <input
                  type="text"
                  {...register("imgUrl", { required: true })}
                  placeholder="img url"
                  name="imgUrl"
                  className="input input-bordered"
                />
                {errors.imgUrl && (
                  <span className="text-red-600">img is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter Your Email"
                  name="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", { 
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/ })}
                  placeholder="Enter you password"
                  name="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Capital letter, one number
                    and one special character.
                  </p>
                  )}
              </div>
              <div className="form-control mt-4">
                <button className="py-1 px-2 font-semibold  rounded text-lg bg-[#02a388] text-white">
                  Register
                </button>
              </div>
            </form>
            <p className=" font-bold">
              Already have an account please ?{" "}
              <Link
                to="/login"
                className="text-blue-500 font-semibold underline"
              >
                login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
