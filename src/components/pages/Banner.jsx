
import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../App2.css';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Banner = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper rounded-3xl "
            >

                <SwiperSlide >
                    <img src="https://i.ibb.co/c1sNVbj/pexels-thorsten-technoman-338504-1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/Cbfk4ZR/private-island-pool-view.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/yBV3wvx/Radisson-Hotel.webp" alt="" />
                </SwiperSlide>

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        {/* <circle cx="24" cy="24" r="20"></circle> */}
                    </svg>
                    <span ref={progressContent}></span>
                </div>

            </Swiper>
        </>
    );
}


export default Banner;

