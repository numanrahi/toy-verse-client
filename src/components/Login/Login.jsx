import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    return (
        <div>
            <div className="fs-3 text-center my-3">Please Login !!!</div>
            <Form className="w-50 mx-auto">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className='p-2 mt-4 w-100' variant="outline-secondary">Login With Google <FaGoogle></FaGoogle></Button>
                <div>Dont have an account? Please <Link to="/register">Register</Link></div>
                <br />
                <Button className="w-100 my-3" variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;