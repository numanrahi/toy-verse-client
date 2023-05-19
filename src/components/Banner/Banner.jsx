// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { TypeAnimation } from 'react-type-animation';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Banner() {
    return (
        <>
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper d-flex justify-content-center align-items-center"
            >
                <SwiperSlide className="text-center">
                    <div className="banner-title">ToyVerse</div>
                    <TypeAnimation
                        className="fs-5"
                        sequence={[
                            'Imaginative companions that fueled thrilling adventures and unforgettable playtime memories.', // Types 'One'
                            1000, // Waits 1s
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                    />
                </SwiperSlide>
                <SwiperSlide className="text-center">
                    <div className="banner-title">ToyVerse</div>
                    <TypeAnimation
                        className="fs-5"
                        sequence={[
                            'Miniature vehicles, endless adventures, cherished memories of imaginative play.', // Types 'One'
                            1000, // Waits 1s
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                    />
                </SwiperSlide>
                <SwiperSlide className="text-center">
                    <div className="banner-title">ToyVerse</div>
                    <TypeAnimation
                        className="fs-5"
                        sequence={[
                            'Tiny vehicles, big dreams, lifelong joyrides of imagination.', // Types 'One'
                            1000, // Waits 1s
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                    />
                </SwiperSlide>
                <SwiperSlide className="text-center">
                    <div className="banner-title">ToyVerse</div>
                    <TypeAnimation
                        className="fs-5"
                        sequence={[
                            'Mini speedsters, limitless imagination, nostalgic playtime journeys.', // Types 'One'
                            1000, // Waits 1s
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                    />
                </SwiperSlide>
                <SwiperSlide className="text-center">
                    <div className="banner-title">ToyVerse</div>
                    <TypeAnimation
                        className="fs-5"
                        sequence={[
                            'Exhilarating speed, sleek design, ultimate driving experience, capturing hearts with every rev.', // Types 'One'
                            1000, // Waits 1s
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
