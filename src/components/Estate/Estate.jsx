import { Link } from "react-router-dom";


const Estate = ({ estate }) => {
    const { id, image, estate_title, Status, location, price, Area } = estate

    return (
        <div className="bg-base-100 m-4  shadow-md shadow-orange-500">
            <figure className=" ">
                <img src={image} alt="Shoes" className=" h-[280px] w-full" />
            </figure>

            <div className="card-body ">
                <h2 className="text-xl font-bold">{estate_title}</h2>
                <p className="text-base font-medium border-b-2 pb-4 border-dashed" > {status}</p>
                <div className="font-medium flex justify-between">
                    <p>{location}</p>
                    <div className="flex items-center">
                        <p className="text-red-500">{price}</p>
                    </div>
                </div>
                <div className="font-medium flex justify-between">
                    <p>{Status}</p>
                    <div className="">
                        <p>{Area}</p>
                    </div>
                </div>
                <div className="font-medium flex justify-between">
                    <Link to={`/${id}`} className="btn text-white bg-orange-400"> View Property</Link>
                    <div className="">
                        {/* <p>{Area}</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Estate;