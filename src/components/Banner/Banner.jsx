// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

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
                    <div>Imaginative companions that fueled thrilling adventures and unforgettable playtime memories.</div>
                </SwiperSlide>
                <SwiperSlide className="text-center">
                    <div className="banner-title">ToyVerse</div>
                    <div> Miniature vehicles, endless adventures, cherished memories of imaginative play.</div>
                </SwiperSlide>
                <SwiperSlide className="text-center">
                    <div className="banner-title">ToyVerse</div>
                    <div>Tiny vehicles, big dreams, lifelong joyrides of imagination.</div>
                </SwiperSlide>
                <SwiperSlide className="text-center">
                    <div className="banner-title">ToyVerse</div>
                    <div>Mini speedsters, limitless imagination, nostalgic playtime journeys.</div>
                </SwiperSlide>
                <SwiperSlide className="text-center">
                    <div className="banner-title">ToyVerse</div>
                    <div> Exhilarating speed, sleek design, ultimate driving experience, capturing hearts with every rev.</div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
