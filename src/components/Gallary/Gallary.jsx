import React from 'react';
import Marquee from "react-fast-marquee";
import './Gallary.css'

const Gallary = () => {
    return (
        <div className='mt-5 pt-5'>
            <div className='fs-2 mt-5 text-center'>Innocence Unveiled: A Journey Through Time</div>
            <Marquee 
            direction='down'
            className='text-danger'
            >
                <img className='img-fluid gallary-img' src="https://media.istockphoto.com/id/1296677357/vector/convertible-super-sports-car-vehicle-transportation-bright-color-for-coloring-page-children.jpg?s=612x612&w=0&k=20&c=BkZCgGFRylr72aKQ9eoRfn4-N3RRne7c0bfxmJ9_g2Y=" alt="" />
                <img className='img-fluid gallary-img' src="https://media.istockphoto.com/id/1296677357/vector/convertible-super-sports-car-vehicle-transportation-bright-color-for-coloring-page-children.jpg?s=612x612&w=0&k=20&c=BkZCgGFRylr72aKQ9eoRfn4-N3RRne7c0bfxmJ9_g2Y=" alt="" />
                <img className='img-fluid gallary-img' src="https://media.istockphoto.com/id/1296677357/vector/convertible-super-sports-car-vehicle-transportation-bright-color-for-coloring-page-children.jpg?s=612x612&w=0&k=20&c=BkZCgGFRylr72aKQ9eoRfn4-N3RRne7c0bfxmJ9_g2Y=" alt="" />
                <img className='img-fluid gallary-img' src="https://media.istockphoto.com/id/1296677357/vector/convertible-super-sports-car-vehicle-transportation-bright-color-for-coloring-page-children.jpg?s=612x612&w=0&k=20&c=BkZCgGFRylr72aKQ9eoRfn4-N3RRne7c0bfxmJ9_g2Y=" alt="" />
            </Marquee>
            <Marquee
            className='text-danger'
            >
                <img className='img-fluid gallary-img' src="https://media.istockphoto.com/id/1296677357/vector/convertible-super-sports-car-vehicle-transportation-bright-color-for-coloring-page-children.jpg?s=612x612&w=0&k=20&c=BkZCgGFRylr72aKQ9eoRfn4-N3RRne7c0bfxmJ9_g2Y=" alt="" />
                <img className='img-fluid gallary-img' src="https://media.istockphoto.com/id/1296677357/vector/convertible-super-sports-car-vehicle-transportation-bright-color-for-coloring-page-children.jpg?s=612x612&w=0&k=20&c=BkZCgGFRylr72aKQ9eoRfn4-N3RRne7c0bfxmJ9_g2Y=" alt="" />
                <img className='img-fluid gallary-img' src="https://media.istockphoto.com/id/1296677357/vector/convertible-super-sports-car-vehicle-transportation-bright-color-for-coloring-page-children.jpg?s=612x612&w=0&k=20&c=BkZCgGFRylr72aKQ9eoRfn4-N3RRne7c0bfxmJ9_g2Y=" alt="" />
                <img className='img-fluid gallary-img' src="https://media.istockphoto.com/id/1296677357/vector/convertible-super-sports-car-vehicle-transportation-bright-color-for-coloring-page-children.jpg?s=612x612&w=0&k=20&c=BkZCgGFRylr72aKQ9eoRfn4-N3RRne7c0bfxmJ9_g2Y=" alt="" />
            </Marquee>
        </div>
    );
};

export default Gallary;