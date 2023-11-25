import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'

const Login = () => {
    const {singIn, singInWithGoogle}=useContext(AuthContext);
    const navigate= useNavigate()
    const handleLogin = event=>{
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password)
        singIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Login Successfully",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/')
        })
    }
    const handleWithGoogle = () => {
      singInWithGoogle()
        .then((result) => {
          console.log(result.user);
          navigate("/");
        })
        .catch((error) => {
          console.error(error);
        });
    };
  return (
    <div className="w-full md:w-[35%] mx-auto">
      <div className="hero-content flex-col">
        <div className="">
          <h1 className="text-3xl font-bold">Please Login !</h1>
        </div>
        <div className=" w-full shadow-2xl rounded-lg bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
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
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-3">
                <button className="py-1 px-2 font-semibold rounded text-lg bg-[#02a388] text-white">
                  Login
                </button>
              </div>
              <div className="divider">OR</div>
              <div className="mt-4">
                <button onClick={handleWithGoogle }
                  className=" mb-4 bg-black text-white rounded  font-semibold py-2 px-2 w-full flex items-center justify-center"
                >
                  <FcGoogle className="text-xl mr-3"></FcGoogle>Continue With Google
                </button>
              </div>
            </form>

            <p className="font-bold">
              New here ?{" "}
              <Link
                to="/register"
                className="text-blue-500  underline font-bold"
              >
                create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
