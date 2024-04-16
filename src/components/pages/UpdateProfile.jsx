import { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";


const UpdateProfile = () => {

    const { user, updateUserId} = useContext(AuthContext)

    const handleUpdate = e => {
        e.preventDefault()

        const name = e.target.name.value
        const photo = e.target.photo.value

        updateUserId(name, photo)
            .then(() => {
                toast.success("Profile updated!")
            }).catch((error) => {
                console.log(error.message)
            });
    }

    return (
        <div>
             <Helmet>
                <title>Update Profile</title>
            </Helmet>
            {
                user && <>
                    <div className="card w-full shadow-md shadow-orange-500 shadow-t-2 bg-base-100 max-w-xl flex md:mx-auto  my-20">
                        <form className="card-body" onSubmit={handleUpdate} >
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
                            <div className="form-control mt-6">
                                <button className="btn bg-orange-400 text-white hover:bg-orange-400">Update Now</button>
                            </div>
                        </form>
                    </div>
                </>
            }
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default UpdateProfile;