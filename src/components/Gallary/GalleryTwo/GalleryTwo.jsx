import React from 'react';

const GalleryTwo = ({ photo }) => {
    return (
        <div>
            <div>
                <img className='mx-3 rounded-4 img-fluid custom-height' src={photo.url} alt="photo" />
            </div>
        </div>
    );
};

export default GalleryTwo;