import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useTitle from '../../hooks/useTitle';

const AddAToy = () => {
    useTitle('Add A Toy')
    return (
        <div>
            <div className='fs-2 m-2 '>Add a toy</div>
            <Form>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" placeholder="Enter Photo of Toy" />
                </Form.Group>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter The Name of Toy" />
                </Form.Group>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name of The Seller" />
                </Form.Group>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                    <Form.Label>Sub-Category</Form.Label>
                    <Form.Control type="text" placeholder="Enter The Category" />
                </Form.Group>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" placeholder="Price" />
                </Form.Group>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control type="text" placeholder="Rating" />
                </Form.Group>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                    <Form.Label>Available quantity</Form.Label>
                    <Form.Control type="number" placeholder="Available quantity" />
                </Form.Group>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                    <Form.Label>Detail</Form.Label>
                    <Form.Control type="text" placeholder="Detail description" />
                </Form.Group>
                <div className='mx-auto text-center'>
                    <Button className='w-50' variant="primary" type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
            {/* <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Coffee Name</span>
                    </label>
                    <label className="input-group">
                        <span>Name</span>
                        <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <label className="input-group">
                        <span>Name</span>
                        <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                    </label>
                </div>
            </div> */}
        </div>
    );
};

export default AddAToy;