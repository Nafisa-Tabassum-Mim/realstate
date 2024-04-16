import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getBookedListId, removeBookedListId } from "./BookedStorage";

const BookedResort = () => {

    const estates = useLoaderData();
    const [bookedEstate, setbookedEstate] = useState([]);

    // get the booked object 
    useEffect(() => {
        const storedBookedId = getBookedListId();
        if (storedBookedId.length > 0 && estates.length > 0) {
            const bookedList = [];
            for (const id of storedBookedId) {
                const estate = estates.find((estate) => estate.id === id);
                if (estate) {
                    bookedList.push(estate);
                }
            }
            setbookedEstate(bookedList);
        }
    }, [estates]);


    // remove the delete object 
    const handleDelete = (id) => {
        removeBookedListId(id);
        setbookedEstate(bookedEstate.filter(estate => estate.id !== id));
    };

    return (
        <div>
            {bookedEstate.length === 0 ? (
                <div className=" h-[400px] w-full flex flex-col justify-center items-center gap-2">
                    <p className="text-2xl font-semibold">Your Booked Cart is empty</p>
                    <p className="text-2xl font-semibold">Book our resorts <span className="text-orange-500">now !</span> </p>
                    <Link to='/' className="btn text-white bg-orange-500 ">Book Now !</Link>
                </div>
            ) : (
                <div>
                    <p className="text-3xl font-semibold text-center my-8">Your booked <span className="text-orange-400"> Resorts</span></p>
                    {bookedEstate.map((estate) => (
                        <div key={estate.id}>
                            <div className="card md:card-side shadow-sm border shadow-orange-500 my-4 mx-4">
                                <figure>
                                    <img className="m-8 rounded-xl h-[200px] w-full md:w-[200px]" src={estate.image} alt="Album" />
                                </figure>
                                <div className="mx-4">
                                    <h1 className="text-xl font-bold md:mt-8">{estate.estate_title}</h1>

                                    <div className="flex mt-2  flex-wrap">
                                        <span className="font-extrabold mr-4 "> facilities </span>
                                        {estate.facilities.map((facilitie) => (
                                            <div key={facilitie}>
                                                <button className=" text-orange-400 rounded-2xl bg-gray-100 font-semibold px-4 mr-2 mb-2">
                                                    {facilitie}
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex border-b-2 pb-2 items-center font-semibold">
                                        <p className="flex items-center mr-12 gap-2 ">  Area - {estate.Area} </p>
                                        <p className="flex items-center gap-2"> Price - {estate.price} </p>
                                    </div>
                                    <div className="my-2">
                                        <button className="text-[#328EFF] rounded-2xl bg-[#328EFF26] font-semibold px-4 mr-2 mb-2 py-[2px]">Location - {estate.location} </button>
                                        <Link to={`/${estate.id}`}>
                                            <button className="text-white rounded-2xl bg-[#23BE0A] font-semibold px-4 mr-2 py-[2px]">View Details</button>
                                        </Link>
                                    </div>
                                    <div>
                                        <button onClick={() => { handleDelete(estate.id) }} className="btn mb-2 bg-orange-400 text-white"> Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            )}
        </div>)
};

export default BookedResort;