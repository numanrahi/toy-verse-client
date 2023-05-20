import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='my-5'>
            <section className='d-flex justify-content-around'>
                <div>
                    <div className='fs-1'>ToyVerse</div>
                    <div className='text-center'>
                        Rev up your <br />passion for cars with our <br />extraordinary collection.
                    </div>
                </div>
                <div className='d-flex'>
                    <div className='mx-5'>
                        <div className='fs-4'>Fast Link</div>
                        <div className='d-grid'>
                            <Link className='text-decoration-none' to="/">Home</Link>
                            <Link className='text-decoration-none' to="/blog">Blog</Link>
                            <Link className='text-decoration-none' to="/addatoy">Add A Toy</Link>
                            <Link className='text-decoration-none' to="/">All Toy</Link>
                            <Link className='text-decoration-none' to="/">My Toy</Link>
                        </div>
                    </div>
                    <div className='mx-5'>
                        <div className='fs-4'>Blog</div>
                        <div className='d-grid'>
                            <p>--------</p>
                            <p>--------</p>
                            <p>--------</p>
                        </div>
                    </div>
                    <div className='mx-5'>
                        <div className='fs-4'>Contact Info</div>
                        <div className='d-grid'>
                            <div>Address: -----</div>
                            <div>Phone: -----</div>
                            <div>email: -----</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <Link to="/login"><button  className='btn w-100 m-2 btn-primary'>Login</button></Link>
                    </div>
                    <div>
                        <Link to="/register"><button  className='btn w-100 m-2 btn-primary'>Register</button></Link>
                    </div>
                </div>
            </section>
            <hr />
            <section className='d-flex justify-content-between'>
                <div className='mx-5'>All Rights Reserved | &copy; <span className='text-primary'>ToyVerse</span></div>
                <div className='mx-5 d-flex'>
                    <Link className='px-2' to="https://web.facebook.com/RahiX2020"><BsFacebook></BsFacebook></Link>
                    <Link className='px-2' to="https://www.instagram.com/abdullah_al_numan_rahi/"><BsInstagram></BsInstagram></Link>
                    <Link className='px-2' to="https://twitter.com/numan_rahi08"><BsTwitter></BsTwitter></Link>
                    <Link className='px-2' to="https://github.com/numanrahi"><BsGithub></BsGithub></Link>
                </div>
            </section>
        </div>
    );
};

export default Footer;