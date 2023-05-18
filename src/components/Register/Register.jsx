import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
// import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
    const { createUser, user } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password, photo);

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                navigate('/main')
                if (createdUser) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Registration Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="row">
            <div className="col-md-5 col-11 mx-auto">
                <img className="img-fluid" src="https://media.istockphoto.com/id/1256685976/vector/click-on-sign-up-button-on-linear-laptop.jpg?s=612x612&w=0&k=20&c=AwzfNlj3cMcE0fPlmxWA57ecWbqLLal-QfTpS0SpGS8=" alt="" />
            </div>
            <div className="col-md-7 col-11 mx-auto">
                <div className="fs-3 text-center my-3">Please Register !!!</div>
                <Form onSubmit={handleRegister} className="w-50 mx-auto">
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Photo</Form.Label>
                        <Form.Control type="text" name="photo" placeholder="Photo URL" />
                    </Form.Group>
                    <div>Already have an account? Please <Link to="/login">Login</Link></div>
                    <br />
                    <Button className="w-100 my-3" variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Register;