import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
const Login = () => {
    return (
        <div className="flex justify-center mx-4">
            <div className="card  w-full max-w-md shadow-md shadow-orange-500 shadow-t-2 bg-base-100 my-24 ">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-orange-400 text-white hover:bg-orange-400 ">Login</button>
                    </div>
                    <div className="text-center">
                        You can also login by
                    </div>
                    <div className="flex items-center  justify-center">
                        <div className="border-b border-black w-full"></div>
                        <div className="flex items-center gap-1 relative z-10">
                            <p className="border border-orange-400 rounded-lg p-2 text-[30px]"><FcGoogle /></p>
                            <p className="text-gray-500">or</p>
                            <p className="border border-orange-400 rounded-lg p-2 text-[30px]"><SiGithub /></p>
                        </div>
                        <div className="border-b border-black w-full"></div>
                    </div>
                    <p className="text-center mt-4">Do not have an account ? <Link className="text-orange-400 font-bold" to="/register">Register</Link> </p>

                </form>

            </div >
        </div>

    );
};

export default Login;