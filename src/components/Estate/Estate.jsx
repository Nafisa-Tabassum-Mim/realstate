

const Estate = ({ estate }) => {
    console.log(estate)

    const {image, estate_title,Status,location,price,Area} = estate
    return (
        <div className="bg-base-100 m-4  shadow-md shadow-orange-500">
            <figure className=" ">
                <img src={image} alt="Shoes" className=" h-[280px] w-full" />
            </figure>

            <div className="card-body ">
                {/* <div className="flex">
                    {
                        tags.map(tag => (
                            <div key={tag}>
                                <button className="text-[#23BE0A] rounded-2xl bg-gray-50 font-semibold px-4 mr-2 flex-shrink-0">{tag}</button>
                            </div>
                        ))
                    }
                </div> */}

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
                    <button className="btn text-white bg-orange-400"> View Property</button>
                    <div className="">
                        {/* <p>{Area}</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Estate;