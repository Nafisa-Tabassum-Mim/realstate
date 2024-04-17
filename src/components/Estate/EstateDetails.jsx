import { useLoaderData, useParams } from "react-router-dom";
import { getBookedListId, setBookedId } from "./BookedStorage";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";


const EstateDetails = () => {

    const estates = useLoaderData()
    const { id } = useParams()
    const estateIdInt = parseInt(id)
    const estate = estates.find(estate => estate.id === estateIdInt)


    const handleBookedList = () => {
   
        const sameBookedId = getBookedListId()
        const existBookedid = sameBookedId.find(i => i === estateIdInt)


        if (existBookedid) {
            toast.warn("You have already booked this resort !")
        }
        else {
            setBookedId(estateIdInt)
            toast('You have successfully booked this resort !')
        }

    }

    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-x-14 mt-8 mx-4 mb-8">
              <Helmet>
                <title> {estate.estate_title} | details </title>
            </Helmet>
            <div className="w-3/4 md:w-1/2">
                <img src={estate.image} className="max-h-[560px] w-full mb-8" alt="estate Cover" />
            </div>

            <div className="w-full md:w-1/2">
                <h1 className="text-2xl md:text-4xl font-bold">{estate.estate_title}</h1>
                <p className="text-lg font-medium border-b-2 pb-4 my-4" >{estate.segment_name}</p>
                <p className="text-lg font-medium border-b-2 pb-4 my-4" >{estate.Status}</p>
                <p className="text-xl font-medium mt-4 mb-4"> <span className="font-extrabold"> </span>{estate.description} </p>
                <div className="flex border-b-2 py-4 flex-wrap ">
                    <span className="text-lg font-extrabold mr-4 ">  facilities </span>
                    {
                        estate.facilities.map(facility => (
                            <div key={facility}>
                                <button className="text-orange-500 rounded-2xl bg-gray-100 font-semibold px-4 mr-2 mb-4 ">#{facility}</button>
                            </div>
                        ))
                    }
                </div>
                <div className="my-4">
                    <div className="flex gap-[200px]">
                        <p className="font-medium">Price - </p>
                        <p className="font-bold text-red-600">{estate.price}</p>
                    </div>
                    <div className="flex gap-[200px]">
                        <p className="font-medium">Area - </p>
                        <p className="font-bold">{estate.Area}</p>
                    </div>
                    <div className="flex gap-[170px]">
                        <p className="font-medium">Location - </p>
                        <p className="font-bold ">{estate.location}</p>
                    </div>
                </div>
                <div >
                    <button onClick={handleBookedList}  className="btn border-2 border-orange-400 text-orange-500 bg-white font-bold mr-4 px-6">Book Now</button>
                </div>

            </div>
            <ToastContainer />
        </div>
        
    );
};

export default EstateDetails;