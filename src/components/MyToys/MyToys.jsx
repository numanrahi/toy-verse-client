import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MySingleToy from './MySingleToy/MySingleToy';

const MyToys = () => {

    const { user } = useContext(AuthContext);

	const [toys, setToys] = useState([]);
	useEffect(() => {
		fetch("https://assignment-11-server-xi-sand.vercel.app/toy")
			.then((res) => res.json())
			.then((data) => {
				const my_toy = data.filter(
					(toy) => toy.email == user.email
				);
				setToys(my_toy);
			});
	}, []);

    return (
        <div className="mx-auto my-5" style={{ maxWidth: "1200px" }}>
            <table className="table table-striped table-hover">
                <thead>
                    <tr className="table-dark">
                        <th colSpan={2} scope="col">
                            Seller
                        </th>
                        <th colSpan={2} scope="col">
                            Toy Name
                        </th>
                        <th scope="col">Sub Category</th>
                        <th scope="col">Price</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <>
                        {toys.map((toy) => (
                            <MySingleToy
                                key={toy._id}
                                toy={toy}
                                toys={toys}
                                setToys={setToys}
                            ></MySingleToy>
                        ))}
                    </>
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;