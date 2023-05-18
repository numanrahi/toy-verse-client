import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
// import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
    const { createUser, user } = useContext(AuthContext)

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
            })
            .catch(error => {
                console.log(error);
            })

        // createUser(email, password)
        //     .then(result => {
        //         const createdUser = result.user;
        //         console.log(createdUser);
        //         // toast('User Created Successfully')
        //         // form.reset()
        //         // navigate('/')
        //     })
        //     .catch(error => {
        //         // toast.error(error.message)
        //     })
    }

    return (
        <div>
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
    );
};

export default Register;