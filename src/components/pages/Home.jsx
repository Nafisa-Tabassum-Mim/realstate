import { useEffect, useState } from "react";
import Banner from "./Banner";
import Estate from "../Estate/Estate";
import { Helmet } from "react-helmet-async";

const Home = () => {

    const [estates,setEstates]= useState([])

    useEffect(() => {
        fetch('/estates.json')
            .then(res => res.json())
            .then(data => setEstates(data))
    }, [])

    
    return (
        <div>
            <Helmet>
                <title>Island Resort | Home</title>
            </Helmet>
            <Banner></Banner>

            <section className=" mt-24 mb-24">
                <div>
                    <h3 className="text-3xl font-bold text-center ">Our Estates</h3>
                    <p className="text-xl  text-center mb-12 mt-2"> You can find your dream resort where you can live and enjoy the beautiful atmosphere. Buy or Rent it for your cozy vacation</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-4">
                    {
                        estates.map(estate=> <Estate key={estate.id} estate={estate}></Estate>)
                    }
                </div>
            </section >

        </div >
    );
};

export default Home;