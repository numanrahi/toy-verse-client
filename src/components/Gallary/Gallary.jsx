import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import GalleryOne from "./GalleryOne/GalleryOne";
import GalleryTwo from "./GalleryTwo/GalleryTwo";

const Gallery = () => {
    const [photos_one, setPhotos_one] = useState([]);
    const [photos_two, setPhotos_two] = useState([]);

    useEffect(() => {
        fetch("https://assignment-11-server-xi-sand.vercel.app/gallery-one")
            .then((res) => res.json())
            .then((data) => setPhotos_one(data));
    }, []);

    useEffect(() => {
        fetch("https://assignment-11-server-xi-sand.vercel.app/gallery-two")
            .then((res) => res.json())
            .then((data) => setPhotos_two(data));
    }, []);
    
    return (
        <div>
            <div className="gallery-text my-5 fs-3 w-75 mx-auto text-center">
                <span className="fw-bold display-5">Discover ToyVerse Delights</span><br />An awe-inspiring gallery where children's dreams become a captivating reality!
            </div>
            <div className="mt-5">
                <Marquee speed={75}>
                    {photos_one.map((photo) => (
                        <GalleryOne key={photo.id} photo={photo}></GalleryOne>
                    ))}
                </Marquee>
                <Marquee direction="right" className="mt-5" speed={75}>
                    {photos_two.map((photo) => (
                        <GalleryTwo key={photo.id} photo={photo}></GalleryTwo>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default Gallery;