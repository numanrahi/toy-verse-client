import React, { useContext } from 'react';
import { TbFlower } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Footer = () => {

    const { user } = useContext(AuthContext)

    return (
        <div className='my-5'>
            <section className='d-flex justify-content-around'>
                <div>
                    <div className='fs-1'><TbFlower></TbFlower> ToyVerse</div>
                </div>
                <div className='d-flex'>
                    <div className='mx-5'>
                        <div className='fs-4'>Fast Link</div>
                        <div className='d-grid'>
                            <Link className='text-decoration-none' to="/">Home</Link>
                            <Link className='text-decoration-none' to="/blog">Blog</Link>
                            <Link className='text-decoration-none' to="/alltoys">All Toy</Link>
                            {
                                user?.email &&
                                (
                                    <>
                                        <Link className='text-decoration-none' to="/addatoy">Add A Toy</Link>
                                        <Link className='text-decoration-none' to="/mytoys">My Toys</Link>
                                    </>
                                )
                            }
                        </div>
                    </div>
                    <div className='mx-5'>
                        <div className='fs-4'>Contact Info</div>
                        <div className='d-grid'>
                            <div>Address: Chhatak,Sylhet</div>
                            <div>Phone: 01700-000000</div>
                            <div>email: info@gmail.com</div>
                        </div>
                    </div>
                </div>
                <div className='d-grid'>
                    <Link className='px-2 text-decoration-none' to="https://web.facebook.com/RahiX2020">Facebook</Link>
                    <Link className='px-2 text-decoration-none' to="https://www.instagram.com/abdullah_al_numan_rahi/">Instagram</Link>
                    <Link className='px-2 text-decoration-none' to="https://twitter.com/numan_rahi08">Twitter</Link>
                    <Link className='px-2 text-decoration-none' to="https://github.com/numanrahi">Github</Link>
                </div>
            </section>
            <hr />
            <section className='d-flex justify-content-between'>
                <div className='mx-5 mx-auto'>All Rights Reserved | &copy; <span className='text-primary'>ToyVerse</span></div>
            </section>
        </div>
    );
};

export default Footer;