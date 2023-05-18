import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="d-flex justify-content-around my-3 py-3">
            <div className="d-flex fs-2">
                <div>ToyVerse</div>
            </div>

            <div className="d-flex gap-4">
                <div>
                    <Link className="fs-4 text-decoration-none">Home</Link>
                </div>
                <div>
                    <Link className="fs-4 text-decoration-none">All Toys</Link>
                </div>
                <div>
                    <Link className="fs-4 text-decoration-none">My Toys</Link>
                </div>
                <div>
                    <Link className="fs-4 text-decoration-none">Add A Toy</Link>
                </div>
                <div>
                    <Link to="/blog" className="fs-4 text-decoration-none">Blogs</Link>
                </div>
            </div>
            <div>
                <Link to="/login" className="fs-4 text-decoration-none"><button className="btn btn-primary">Login</button></Link>
            </div>
        </div>
    );
};

export default NavBar;