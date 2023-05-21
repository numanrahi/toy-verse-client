import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Providers/AuthProvider";
import useTitle from "../../hooks/useTitle";
import { Form } from "react-bootstrap";

const UpdateToy = () => {
    useTitle("Update a toy");

    const toy = useLoaderData();
    const {
        _id,
        toy_name,
        photo,
        category,
        seller_name,
        email,
        price,
        rating,
        quantity,
        details,
    } = toy;

    const navigate = useNavigate();

    const { user } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const toy_name_updated = form.toy_name.value;
        const photo_updated = form.photo.value;
        const category_updated = form.category.value;
        const seller_name_updated = form.seller_name.value;
        const seller_email_updated = form.email.value;
        const price_updated = form.price.value;
        const rating_updated = form.rating.value;
        const quantity_updated = form.quantity.value;
        const description_updated = form.details.value;

        const updateToy = {
            toy_name,
            photo,
            category,
            seller_name,
            email,
            price,
            rating,
            quantity,
            details,
        };

        const AfterUpdatedToy = {
            toy_name: toy_name_updated,
            photo: photo_updated,
            category: category_updated,
            seller_name: seller_name_updated,
            email: seller_email_updated,
            price: price_updated,
            rating: rating_updated,
            quantity: quantity_updated,
            details: description_updated,
        };

        fetch(`https://assignment-11-server-xi-sand.vercel.app/toy/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(AfterUpdatedToy),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data?.modifiedCount);
                if (data?.modifiedCount <= 0) {
                    toast("You didn't update any data 😐");
                } else {
                    toast("updated successfully !!");
                }
            });
        navigate("/mytoys");
    };

    return (
        <div>
            <div>
                <div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control type="text" name='photo' defaultValue={photo} placeholder="Enter Photo of Toy" />
                        </Form.Group>
                        <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                            <Form.Label>Toy Name</Form.Label>
                            <Form.Control type="text" name='toy_name' defaultValue={toy_name} placeholder="Enter The Name of Toy" />
                        </Form.Group>
                        <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                            <Form.Label>Seller Name</Form.Label>
                            <Form.Control type="text" name='seller_name' defaultValue={seller_name} placeholder="Name of The Seller" />
                        </Form.Group>
                        <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name='email' defaultValue={email} placeholder="Email" />
                        </Form.Group>
                        <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                            <Form.Label>Sub-Category</Form.Label>
                            <Form.Control type="text" name='category' defaultValue={category} placeholder="Enter The Category" />
                        </Form.Group>
                        <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                            <Form.Label>Price $</Form.Label>
                            <Form.Control type="text" name='price' defaultValue={price} placeholder="Price" />
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
                            <Form.Control type="number" name='quantity' defaultValue={quantity} placeholder="Available quantity" />
                        </Form.Group>
                        <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                            <Form.Label>Detail</Form.Label>
                            <Form.Control type="text" name='details' defaultValue={details} placeholder="Detail description" />
                        </Form.Group>

                        <div className='mx-auto text-center'>
                            <input type="submit" className='btn btn-primary text-center w-50' value="Add A Toy" />
                        </div>
                    </Form>
                    {/* <div
                    className="mx-auto my-5"
                    style={{ maxWidth: "1200px" }}
                >
                    <div className="display-3 fw-bold text-zero text-center">
                        Update your toy
                    </div>
                    <hr />
                    <form onSubmit={handleSubmit} className="">
                        <div className="row">
                            <div className="col-12">
                                <div className="fs-5 fw-bold mb-3 text-zero">
                                    Toy Name
                                </div>
                                <div>
                                    <input
                                        className="input-field"
                                        type="text"
                                        name="toy_name"
                                        id="text"
                                        defaultValue={toy_name}
                                        defaultValue={} placeholder="Please enter toy name here"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="fs-5 fw-bold mb-3 text-zero">
                                    Toy Photo URL
                                </div>
                                <div>
                                    <input
                                        className="input-field"
                                        type="url"
                                        name="url"
                                        id="url"
                                        defaultValue={photo}
                                        placeholder="Please enter toy photo url here"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="fs-5 fw-bold mb-3 text-zero">
                                    Sub Category
                                </div>
                                <select
                                    class="input-field form-select-lg rounded-0"
                                    name="category"
                                    defaultValue={category}
                                >
                                    <option value="Racing Cars">
                                        Racing Cars
                                    </option>
                                    <option value="Trucks">Trucks</option>
                                    <option value="Emergency Vehicles">
                                        Emergency Vehicles
                                    </option>
                                </select>
                            </div>
                            <div className="col-6">
                                <div className="fs-5 fw-bold mb-3 text-zero">
                                    Seller Name
                                </div>
                                <div>
                                    <input
                                        className="input-field"
                                        type="text"
                                        name="seller_name"
                                        id="text"
                                        defaultValue={seller_name}
                                        placeholder="Please enter seller name here"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="fs-5 fw-bold mb-3 text-zero">
                                    Seller Email
                                </div>
                                <div>
                                    <input
                                        className="input-field"
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        defaultValue={email}
                                    />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="fs-5 fw-bold mb-3 text-zero">
                                    Price
                                </div>
                                <div>
                                    <input
                                        className="input-field"
                                        type="number"
                                        name="price"
                                        id="number"
                                        defaultValue={price}
                                        placeholder="Please enter toy price here"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="fs-5 fw-bold mb-3 text-zero">
                                    Rating
                                </div>
                                <div>
                                    <select
                                        class="input-field form-select-lg rounded-0"
                                        name="rating"
                                        defaultValue={rating}
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
                                        <option selected value="5">
                                            &#9733;&#9733;&#9733;&#9733;&#9733;
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="fs-5 fw-bold mb-3 text-zero">
                                    Quantity
                                </div>
                                <div>
                                    <input
                                        className="input-field"
                                        type="number"
                                        name="quantity"
                                        id="number"
                                        defaultValue={quantity}
                                        placeholder="Please enter toy quantity here"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="fs-5 fw-bold mb-3 text-zero">
                                    Details
                                </div>
                                <div>
                                    <input
                                        className="input-field"
                                        type="text"
                                        name="details"
                                        id="text"
                                        defaultValue={details}
                                        placeholder="Please enter toy details here"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <button
                                className="w-100 rounded-2 btn-auth border-0 text-white py-2 fw-bold fs-5 mt-3"
                                type="submit"
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div> */}
                </div>
            </div>
        </div>
    );
};

export default UpdateToy;