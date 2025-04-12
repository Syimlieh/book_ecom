import React from 'react'
import { MdOutlineDeliveryDining } from "react-icons/md";
import { FaOpencart } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../services/redux/slice/product.slice';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const ProductItem = ({
    item
}) => {
    const navigate = useNavigate()
    const { cart } = useSelector((state) => state.products);
    const isInCart = cart.some((cartItem) => cartItem._id === item._id);
    const {
        title,
        description,
        price,
        discountPercentage,
        rating,
        reviews,
        category,
        thumbnail,
        shippingInformation
    } = item;

    const dispatch = useDispatch();

    function handleAddToCart() {
        // if already in cart then navigate to cart page else we add to cart
        if (isInCart) {
            navigate("/cart");
        } else {
            dispatch(addToCart(item))
            toast.success("Product added to cart")
        }
    };

    return (
        <div className="w-80 m-auto rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <Link to={`/product/${item._id}`}>
                <div className="h-56 cursor-pointer">
                    <img className="mx-auto h-full" src={thumbnail} alt="product thumbnail" />
                </div>
                <div className="pt-6">
                    <div className="px-4 flex gap-4 bg-blue-200 w-fit rounded-2xl text-blue-700 font-semibold text-sm py-1">
                        <span className="me-2 rounded bg-primary-100 font-medium text-primary-800">
                            Up to {discountPercentage} % off
                        </span>
                    </div>
                    <p className="text-xl md:text-2xl font-semibold leading-tight text-gray-900 hover:underline line-clamp-1">
                        {title}
                    </p>
                    <p className="text-sm font-semibold leading-tight text-gray-700 hover:underline line-clamp-2">
                        {description}
                    </p>
                </div>
            </Link>
            <div className="mt-2 flex items-center gap-2">
                <div className="flex items-center">
                    {
                        Array.from({ length: rating }, (_, index) => (
                            <svg className="h-4 w-4 text-yellow-400" key={index} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                            </svg>
                        ))
                    }
                </div>

                <p className="text-sm font-medium text-gray-900">{rating}</p>
                <p className="text-sm font-medium text-gray-500">({reviews?.length})</p>
            </div>

            <ul className="mt-2 flex flex-col items-start gap-2">
                <li className="flex items-center gap-2">
                    <MdOutlineDeliveryDining className='text-lg' />
                    <p className="text-sm font-medium text-gray-500">{shippingInformation}</p>
                </li>

                <li className="flex items-center gap-2">
                    <b>Category:</b>
                    <p className="text-sm font-medium text-gray-500">{category}</p>
                </li>
            </ul>

            <div className="mt-4 flex items-center justify-between gap-4">
                <p className="text-2xl font-extrabold leading-tight text-gray-900">${price}</p>

                <button type="button" className="bg-violet-500 inline-flex gap-2 items-center rounded-lg px-5 py-2.5 text-sm font-medium text-white hover:bg-violet-600 cursor-pointer"
                    onClick={handleAddToCart}
                >
                    <FaOpencart />
                    {isInCart ? "Go to Cart" : "Add to Cart"}
                </button>
            </div>
        </div>
    );
};

export default ProductItem;