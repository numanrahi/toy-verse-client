import React, { useEffect, useState } from 'react';
import './ToyByCategory.css'
import SingleToyByCategory from '../SingleToyByCategory/SingleToyByCategory';

const ToyByCategory = () => {

    const [toys, setToys] = useState([]);
    const [category, setCategory] = useState("Sports Car");

    const handleCategory = (state) => {
        setCategory(state);
    };

    useEffect(() => {
        fetch("https://assignment-11-server-xi-sand.vercel.app/toy")
            .then((res) => res.json())
            .then((data) => {
                const category_data = data.filter(
                    (toy) => toy.category === category
                );
                setToys(category_data);
            });
    }, [category]);

    return (
        <div className="row w-100 mx-auto">
            <div
                onClick={() => handleCategory("Sports Car")}
                className="btn col-md-4 col-11 mx-auto btn-category fs-5 category-1"
            >
                Sports Cars
            </div>
            <div
                onClick={() => handleCategory("Trucks")}
                className="btn col-md-4 col-11 mx-auto btn-category fs-5 category-2"
            >
                Trucks
            </div>
            <div
                onClick={() => handleCategory("Luxurious Car")}
                className="btn col-md-4 col-11 mx-auto btn-category fs-5 category-3"
            >
                Luxurious Cars
            </div>
            <div className="my-5 d-flex flex-column gap-3">
                {toys.map((toy) => (
                    <SingleToyByCategory
                        key={toy?._id}
                        toy={toy}
                    ></SingleToyByCategory>
                ))}
            </div>
        </div>

    );
};

export default ToyByCategory;

/**
 * const [toys, setToys] = useState([]);
    const [category, setCategory] = useState("Racing Cars");

    const handleCategory = (state) => {
        setCategory(state);
    };
    useEffect(() => {
        fetch("https://toytopia-server-theta.vercel.app/all-toys")
            .then((res) => res.json())
            .then((data) => {
                const category_data = data.filter(
                    (toy) => toy.category === category
                );
                setToys(category_data);
            });
    }, [category]);
 * */ 