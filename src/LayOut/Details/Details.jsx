import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Rating from "react-rating";
import { BsStar, BsStarFill } from "react-icons/bs";

const Details = () => {
    useTitle("Toy Details");
    const toy = useLoaderData();

    const {
        photo,
        toy_name,
        email,
        seller_name,
        price,
        rating,
        quantity,
        details,
    } = toy;
    return (
        <div className="row">
            <div className="col-6 justify-content-center d-flex flex-column">
                <div className="display-2">{toy_name}</div>
                <div className="me-3">
                    <div className="display-6">{seller_name}</div>
                    <div>{email}</div>
                    <div>${price}</div>
                    <div>{quantity} pieces available</div>
                    <div className="w-75 text-dark">{details}</div>
                </div>
            </div>
            <div className="col-6">
                <img
                    className="img-fluid rounded-5"
                    src={photo}
                    alt="photo"
                />
                <Rating
                    className="d-flex justify-content-end me-5"
                    initialRating={rating}
                    emptySymbol={<BsStar className="fs-5"></BsStar>}
                    fullSymbol={
                        <BsStarFill className="fs-5"></BsStarFill>
                    }
                    readonly
                    fractions={5}
                />
            </div>
        </div>
    );
};

export default Details;