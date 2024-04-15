import { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import { Link } from "react-router-dom";

const UserProfile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="flex flex-col md:flex-row mx-4 md:mx-auto my-24 gap-8 max-w-5xl">
            {user &&
                <>
                    <div className="h-[300px] md:h-[420px] rounded-xl flex flex-col justify-center items-center md:w-1/3 shadow-md shadow-orange-500 shadow-t-2">
                        <img className="h-36 w-36 rounded-full border-spacing-4 border-4 border-orange-400 p-1" src={user.photoURL} alt="" />
                        <p className="font-bold text-xl mt-4">{user.displayName}</p>
                        <p className="font-semibold">{user.email}</p>
                    </div>
                    <div className="md:w-2/3">
                        <div className="card w-full shadow-md shadow-orange-500 shadow-t-2 bg-base-100">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered" defaultValue={user.displayName} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" defaultValue={user.photoURL} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" defaultValue={user.email} />
                                </div>
                                <div className="form-control mt-6">
                                    <Link to='/updateprofile' className="btn bg-orange-400 text-white hover:bg-orange-400">Edit Profile</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            }
        </div>
    );
};

export default UserProfile;
