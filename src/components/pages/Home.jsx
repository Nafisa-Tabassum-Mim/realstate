import { useEffect, useState } from "react";
import Banner from "./Banner";
import Estate from "../Estate/Estate";

const Home = () => {

    const [estates,setEstates]= useState([])

    useEffect(() => {
        fetch('/estates.json')
            .then(res => res.json())
            .then(data => setEstates(data))
    }, [])

    
    return (
        <div>
            <Banner></Banner>

            <section>
                <div>
                    <h3 className="text-3xl font-bold text-center my-12">estates</h3>
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