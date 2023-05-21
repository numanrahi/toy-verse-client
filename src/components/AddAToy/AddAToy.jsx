import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useTitle from '../../hooks/useTitle';
import Swal from 'sweetalert2';

const AddAToy = () => {
    useTitle('Add A Toy')

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const url = form.url.value;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const email = form.email.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;

        const newToy = { url, toyName, sellerName, email, category, price, rating, quantity, details }
        console.log(newToy);

        fetch('http://localhost:5000/toy',{
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            if(data.insertedId){
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
            <div className='fs-2 m-2 '>Add a toy</div>
            <Form onSubmit={handleAddToy}>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='url' placeholder="Enter Photo of Toy" />
                </Form.Group>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                    <Form.Label>Toy Name</Form.Label>
                    <Form.Control type="text" name='toyName' placeholder="Enter The Name of Toy" />
                </Form.Group>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                    <Form.Label>Seller Name</Form.Label>
                    <Form.Control type="text" name='sellerName' placeholder="Name of The Seller" />
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
                    <Form.Label>Rating</Form.Label>
                    <Form.Control type="text" name='rating' placeholder="Rating" />
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