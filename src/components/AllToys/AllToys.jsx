import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import AllToyTable from './AllToyTable/AllToyTable';

const AllToys = () => {

    useTitle("All Toys");

	const [toys, setToys] = useState([]);

	useEffect(() => {
		fetch("https://assignment-11-server-xi-sand.vercel.app/toy")
			.then((res) => res.json())
			.then((data) => setToys(data));
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
							<th scope="col">Details</th>
						</tr>
					</thead>
					<tbody>
						<>
							{toys.map((toy) => (
								<AllToyTable
									key={toy._id}
									toy={toy}
								></AllToyTable>
							))}
						</>
					</tbody>
				</table>
			</div>
    );
};

export default AllToys;
