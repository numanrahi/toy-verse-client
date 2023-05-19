import { Link, useLocation, useNavigate } from "react-router-dom";
import './NavBar.css'
import { TbFlower } from 'react-icons/tb'
import { BsPersonCircle } from 'react-icons/bs'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'


const NavBar = () => {

    const { user, logout } = useContext(AuthContext)
    console.log(user);

    const signOut = () => {
        logout();
    };

    const [url, setUrl] = useState('')

    useEffect(() => {
        setUrl(user?.photoURL)
    }, [user])

    return (
        <div className="d-flex justify-content-around my-3 py-3">
            <div className="d-flex fs-2">
                <div><TbFlower></TbFlower> ToyVerse</div>
            </div>

            <div className="d-flex gap-4">
                <div>
                    <Link className="fs-4 text-decoration-none">Home</Link>
                </div>
                <div>
                    <Link className="fs-4 text-decoration-none">All Toys</Link>
                </div>
                {
                    user?.email &&
                    (
                        <>
                            <div>
                                <Link className="fs-4 text-decoration-none">My Toys</Link>
                            </div>
                            <div>
                                <Link className="fs-4 text-decoration-none">Add A Toy</Link>
                            </div>
                        </>
                    )
                }
                <div>
                    <Link to="/blog" className="fs-4 text-decoration-none">Blogs</Link>
                </div>
            </div>
            <div>
                {
                    user ? (
                        <div className="col-md-3 col-10 d-flex justify-content-center align-items-center p-0">
                            {/* <div><img className="rounded-circle " src={url} alt="" /></div> */}
                            {
                                user?.photoURL ?
                                    <div
                                        data-tooltip-id="my-tooltip"
                                        data-tooltip-content={user.displayName}
                                        className="fs-2 title-text"
                                    >
                                        <img className="rounded-circle" src={url} alt="" />

                                    </div> :
                                    <div>
                                        <BsPersonCircle
                                            data-tooltip-id="my-tooltip"
                                            data-tooltip-content={user.email}
                                            className="fs-2 title-text"
                                        />
                                    </div>
                            }
                            <div>
                                <button
                                    onClick={signOut}
                                    className="btn btn-primary ms-1 fs-5"
                                >
                                    LogOut
                                </button>
                            </div>
                        </div>
                    ) : (

                        <div>
                            <Link to="/login" className="fs-4 text-decoration-none"><button className="btn btn-primary">Login</button></Link>
                        </div>
                    )
                }
                <Tooltip id="my-tooltip" />
            </div>
        </div>
    );
};

export default NavBar;