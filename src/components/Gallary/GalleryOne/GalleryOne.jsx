import React from 'react';
import './GalleryOne.css'

const GalleryOne = ({ photo }) => {
    return (
        <div>
            <div>
                <img className='mx-3 rounded-4 img-fluid custom-height' src={photo.url} alt="photo" />
            </div>
        </div>
    );
};

export default GalleryOne;