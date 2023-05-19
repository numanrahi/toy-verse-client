import React from 'react';
import './KidsToys.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const KidsToys = () => {
    return (
        <div className='body'>
            <div style={{ maxWidth: "1200px" }} className="mx-auto pb-5">
                <div className="display-4 text-center py-5 text-white">
                    We made toys  
                    <span className="text-danger"> with love</span>
                </div>
                <div className="row">
                    <div className="col-11 col-md-6 mx-auto p-3">
                        <div data-aos="fade-up-right" data-aos-duration="1000">
                            <img
                                className="img-fluid rounded-3 img-border-custom"
                                src="https://media.istockphoto.com/id/1168707948/photo/the-child-rolls-small-cars-on-a-toy-car-track.jpg?s=612x612&w=0&k=20&c=StsmDajIOWGJxqND3T0TXMPiZLs1Jv29ruLuc9Qocf8="
                                alt="kid with lego"
                            />
                            <div className="text-white">
                                They love small cars 🙂
                            </div>
                        </div>
                    </div>
                    <div className="col-11 col-md-6 mx-auto p-3">
                        <div
                            data-aos="fade-up-left"
                            data-aos-duration="1000"
                            data-aos-delay="500"
                        >
                            <img
                                className="img-fluid rounded-3 img-border-custom"
                                src="https://media.istockphoto.com/id/92398896/photo/toy-model-sixties-car.jpg?s=612x612&w=0&k=20&c=k_Kcngif3pz_LllhZ3B_xZwZuq_OYldX2JPT4FNTw_0="
                                alt="kid with lego"
                            />
                            <div className="text-white">
                                Small can be easily played with 🥰
                            </div>
                        </div>
                    </div>
                    <div className="col-11 col-md-6 mx-auto p-3">
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            data-aos-delay="500"
                        >
                            <img
                                className="img-fluid rounded-3 img-border-custom"
                                src="https://media.istockphoto.com/id/183804142/photo/crane.jpg?s=612x612&w=0&k=20&c=LmR5VrnK2iSSQjrznyOFFQVi_PIZJrVWUf2brGSWodU="
                                alt="kid with lego"
                            />
                            <div className="text-white">
                                Sometimes they like creative toys 😄
                            </div>
                        </div>
                    </div>
                    <div className="col-11 col-md-6 mx-auto p-3">
                        <div data-aos="zoom-out" data-aos-duration="1000">
                            <img
                                className="img-fluid rounded-3 img-border-custom"
                                src="https://media.istockphoto.com/id/1266251640/photo/cute-baby-girl-in-electric-toy-car.jpg?s=612x612&w=0&k=20&c=qd4V0DCVckWcob5vz9GxDiMBCS-ekZD7qLXxSbV_Ixw="
                                alt="kid with lego"
                            />
                            <div className="text-white">
                                Playing with children creates bonding between child
                                and parent 🥰
                            </div>
                        </div>
                    </div>
                    <div className="col-11 col-md-6 mx-auto p-3">
                        <div
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                        >
                            <img
                                className="img-fluid rounded-3 img-border-custom"
                                src="https://media.istockphoto.com/id/599244202/photo/car-model-on-notebook-and-mouse-on-wooden-desk.jpg?s=612x612&w=0&k=20&c=QEG8mrYiBh91p2eFtthIrAqbrT8bJF_0X7EhpD5A7_k="
                                alt="kid with lego"
                            />
                            <div className="text-white">
                                Sometimes what they only need is a listener 😊
                            </div>
                        </div>
                    </div>
                    <div className="col-11 col-md-6 mx-auto p-3">
                        <div
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                            data-aos-duration="1000"
                            data-aos-delay="500"
                        >
                            <img
                                className="img-fluid rounded-3 img-border-custom"
                                src="https://media.istockphoto.com/id/931172246/photo/you-get-to-know-your-kids-when-you-play-with-them.jpg?s=612x612&w=0&k=20&c=GBbZOHD3SI-vTfeJTeOcdha3f0D28NZ-thwPzRw6FdQ="
                                alt="kid with lego"
                            />
                            <div className="text-white">
                                Spend more time with your kids , they are precious
                                😍
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KidsToys;