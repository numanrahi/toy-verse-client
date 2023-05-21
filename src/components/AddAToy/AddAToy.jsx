import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useTitle from '../../hooks/useTitle';
import Swal from 'sweetalert2';

const AddAToy = () => {
    useTitle('Add A Toy')

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const toy_name = form.toy_name.value;
        const seller_name = form.seller_name.value;
        const email = form.email.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;

        const newToy = { photo, toy_name, seller_name, email, category, price, rating, quantity, details }
        console.log(newToy);

        fetch('https://assignment-11-server-xi-sand.vercel.app/toy', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset()
                }
            })
    }

    return (
        <div>
            <div className='fs-2 m-2 text-center'>Add a toy</div>
            <Form onSubmit={handleAddToy}>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter Photo of Toy" />
                </Form.Group>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                    <Form.Label>Toy Name</Form.Label>
                    <Form.Control type="text" name='toy_name' placeholder="Enter The Name of Toy" />
                </Form.Group>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                    <Form.Label>Seller Name</Form.Label>
                    <Form.Control type="text" name='seller_name' placeholder="Name of The Seller" />
                </Form.Group>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                    <Form.Label>Sub-Category</Form.Label>
                    <Form.Control type="text" name='category' placeholder="Enter The Category" />
                </Form.Group>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                    <Form.Label>Price $</Form.Label>
                    <Form.Control type="text" name='price' placeholder="Price" />
                </Form.Group>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                    <select
                        className="input-field form-select-lg rounded-0 w-100"
                        name="rating"
                        defaultValue={"5"}
                    >
                        <option value="1">&#9733;</option>
                        <option value="2">
                            &#9733;&#9733;
                        </option>
                        <option value="3">
                            &#9733;&#9733;&#9733;
                        </option>
                        <option value="4">
                            &#9733;&#9733;&#9733;&#9733;
                        </option>
                        <option value="5">
                            &#9733;&#9733;&#9733;&#9733;&#9733;
                        </option>
                    </select>
                </Form.Group>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                    <Form.Label>Available quantity</Form.Label>
                    <Form.Control type="number" name='quantity' placeholder="Available quantity" />
                </Form.Group>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                    <Form.Label>Detail</Form.Label>
                    <Form.Control type="text" name='details' placeholder="Detail description" />
                </Form.Group>

                <div className='mx-auto text-center'>
                    <input type="submit" className='btn btn-primary text-center w-50' value="Add A Toy" />
                </div>
            </Form>
        </div>
    );
};

export default AddAToy;