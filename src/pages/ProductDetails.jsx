import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { FaOpencart } from 'react-icons/fa6';
import { MdOutlineDeliveryDining } from 'react-icons/md';
import Review from '../components/Review';
import toast from 'react-hot-toast';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import { useApiRequest } from '../hooks/useApiRequest';
import { BOOK_API } from '../services/api/routes';
import { addToCart } from '../services/redux/slice/product.slice';
import ProductSpecs from '../components/ProductSpecs';
import RatingStar from '../components/ui/RatingStar';

const ProductDetails = () => {
    const { id } = useParams();
    const URL = BOOK_API.GET_BY_ID(id);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.products);

    const { data, loading, error } = useApiRequest(URL);
    const isInCart = cart.some((cartItem) => cartItem._id === id);

    useEffect(() => {
        if (error) {
            toast.error(`Failed to fetch product detail with id ${id}.`);
        }
    }, [error]);

    if (loading || !data) return <LoadingSpinner center={true} />;
    const {
        title, price, category, images, description,
        rating, brand, dimensions, reviews, shippingInformation,
        returnPolicy, warrantyInformation, availabilityStatus,
        tags, discountPercentage,
    } = data?.data;

    function handleAddToCart() {
        if (isInCart) {
            navigate("/cart");
        } else {
            dispatch(addToCart(data?.data))
            toast.success("Product added to cart");
        }
    };

    return (
        <section className="py-8 bg-white md:py-16 antialiased">
            <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                    <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                        <img className="w-full" src={images?.[0]} alt="product image" />
                    </div>

                    <div className="mt-6 sm:mt-8 lg:mt-0">
                        <h1
                            className="text-xl font-secondary font-semibold text-gray-900 sm:text-4xl"
                        >
                            {title}
                        </h1>
                        <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                            <p
                                className="text-sm font-light sm:text-3xl text-red-600"
                            >
                                -{discountPercentage}%
                            </p>
                            <p
                                className="text-2xl font-extrabold text-gray-900 sm:text-3xl"
                            >
                                ${price}
                            </p>

                            <div className="flex items-center gap-2 mt-2 sm:mt-0">
                                <div className="flex items-center gap-1">
                                    <div className="flex items-center">
                                        {
                                            Array.from({ length: Math.floor(rating) }, (_, index) => (
                                                <RatingStar key={index} />
                                            ))
                                        }
                                    </div>
                                </div>
                                <p
                                    className="text-sm font-medium leading-none text-gray-500"
                                >
                                    ({rating})
                                </p>
                                <a
                                    href="#"
                                    className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline"
                                >
                                    {reviews?.length} Reviews
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 mt-4">
                            <MdOutlineDeliveryDining className='text-lg' />
                            <p className="text-sm font-medium text-gray-500 ">{shippingInformation}</p>
                        </div>

                        <div className="mt-4 sm:gap-4 sm:items-center sm:flex sm:mt-6">
                            <button type="button" className="bg-violet-500 inline-flex gap-2 items-center rounded-lg px-5 py-2.5 text-sm font-medium text-white hover:bg-violet-600 cursor-pointer"
                                onClick={handleAddToCart}>
                                <FaOpencart />
                                {isInCart ? "Go to Cart" : "Add to Cart"}
                            </button>
                        </div>

                        <hr className="my-6 md:my-8 border-gray-200 " />

                        <p className="mb-6 text-gray-500 ">
                            {description}
                        </p>

                        <ProductSpecs
                            brand={brand}
                            category={category}
                            dimensions={dimensions}
                            availabilityStatus={availabilityStatus}
                            shippingInformation={shippingInformation}
                            returnPolicy={returnPolicy}
                            warrantyInformation={warrantyInformation}
                            tags={tags}
                        />
                    </div>
                </div>
            </div>
            {reviews?.length && <Review reviews={reviews} rating={rating} />}
        </section>
    );
}

export default ProductDetails