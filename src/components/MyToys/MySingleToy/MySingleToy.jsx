import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const MySingleToy = ({ toy, toys, setToys }) => {
    const { seller_name, toy_name, category, price, rating, quantity, _id } =
        toy;

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://assignment-11-server-xi-sand.vercel.app/toy/${_id}`,{
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }
    // {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!",
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             const test = `https://assignment-11-server-xi-sand.vercel.app/toy/${_id}`;
    //             console.log(test);
    //             // `https://assignment-11-server-xi-sand.vercel.app/toy/${id}`,
    //             fetch(`https://assignment-11-server-xi-sand.vercel.app/toy/${_id}`, {
    //                 method: 'DELETE'
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     console.log(data)
    //                     if (data.deletedCount > 0) {
    //                         Swal.fire(
    //                             "Deleted!",
    //                             "Your toy has been deleted.",
    //                             "success"
    //                         );
    //                         const remaining = toys.filter(
    //                             (toy) => toy._id !== id
    //                         );
    //                         setToys(remaining);
    //                     }
    //                 })
    //         }
    //     });
    // };

    return (
        <>
            <tr>
                <th colSpan={2}>{seller_name}</th>
                <td colSpan={2}>{toy_name}</td>
                <td>{category}</td>
                <td>{price}</td>
                <td>{rating}</td>
                <td>{quantity}</td>
                <td>
                    <Link
                        to={`/update/${_id}`}
                        className="text-decoration-none"
                    >
                        <div className="btn btn-details-chart text-zero">
                            Update
                        </div>
                    </Link>
                </td>
                <td>
                    <AiOutlineDelete
                        onClick={() => handleDelete(_id)}
                        className="fs-2 text-zero"
                    ></AiOutlineDelete>
                </td>
            </tr>
        </>
    );
};

export default MySingleToy;