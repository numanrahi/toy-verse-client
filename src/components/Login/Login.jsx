import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { signInWithPopup } from "firebase/auth";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import useTitle from "../../hooks/useTitle";

const Login = () => {

    const { signIn, user, googleProvider, auth } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    useTitle('Login')

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true })
                if (loggedUser) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Login Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    const handleGooglSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true })
                if (loggedUser) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Login Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <div className="row">
            <div className="col-md-4 col-11 mx-auto">
                <img className="img-fluid" src="https://media.istockphoto.com/id/1162880589/vector/key-person.jpg?s=612x612&w=0&k=20&c=7QYwLvrfrbXTfxb_Vl9qDBv4RFCg-B_l_ZQk-vV4aPo=" alt="" />
            </div>
            <div className="col-md-8 col-11 mx-auto">
                <div className="fs-3 text-center my-3">Please Login !!!</div>
                <Form onSubmit={handleLogin} className="w-50 mx-auto">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" />
                    </Form.Group>
                    <Button className='p-2 mt-4 w-100' onClick={handleGooglSignIn} variant="outline-secondary">Login With Google <FaGoogle></FaGoogle></Button>
                    <div>Dont have an account? Please <Link to="/register">Register</Link></div>
                    <br />
                    <Button className="w-100 my-3" variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;