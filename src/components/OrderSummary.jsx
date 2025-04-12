import React from 'react'
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { createOrderApi } from '../services/api/order.api';

const OrderSummary = ({ subtotal = 0, shipping = 0, total = 0, to }) => {
    const navigate = useNavigate();
    const { cart } = useSelector(store => store.products);
    const { checkoutDetails } = useSelector(store => store.checkout);

    const handleNavigate = async () => {
        // we are re-using this component so the redirecting is based on the to prop
        if (to === "/checkout") {
            if (!cart.length) {
                toast.error("Please add items to cart");
                return;
            }
            navigate("/checkout");
        } else {
            const {
                name,
                email,
                state,
                phone,
                address,
                paymentMethod
            } = checkoutDetails;

            if (!name || !email || !state || !phone || !address || !paymentMethod) {
                toast.error("Please fill and save all the fields.");
                return;
            }

            const orderPayload = {
                items: cart.map(item => ({
                    bookId: item._id,
                    quantity: item.quantity
                })),
                paymentMethod,
                shippingAddress: {
                    fullName: name,
                    email,
                    phone,
                    address,
                    state
                }
            };
            try {
                // create order here
                await createOrderApi(orderPayload);
                navigate("/final");
            } catch (error) {
                toast.error(error.message || "Something went wrong");
            }
        }
    }

    return (
        <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                <p className="text-xl font-semibold text-gray-900">Order summary</p>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <dl className="flex items-center justify-between gap-4">
                            <dt className="text-base font-normal text-gray-500">Original price</dt>
                            <dd className="text-base font-medium text-gray-900">${subtotal.toFixed(2)}</dd>
                        </dl>

                        <dl className="flex items-center justify-between gap-4">
                            <dt className="text-base font-normal text-gray-500">Shipping</dt>
                            <dd className="text-base font-medium text-green-600">+${shipping.toFixed()}</dd>
                        </dl>
                    </div>

                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                        <dt className="text-base font-bold text-gray-900">Total</dt>
                        <dd className="text-base font-bold text-gray-900">${total.toFixed(2)}</dd>
                    </dl>
                </div>

                <a href="#" className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300">Proceed to Checkout</a>

                <button type="button" className="bg-violet-600 w-full text-center flex justify-center gap-2 items-center rounded-lg px-5 py-2.5 text-sm font-medium text-white hover:bg-violet-700 cursor-pointer"
                    onClick={handleNavigate}
                >
                    <MdOutlineShoppingCartCheckout />
                    Proceed to {to === "/checkout" ? "Checkout" : "Buy"}
                </button>
                <div className="flex items-center justify-center item-center gap-2">
                    <span className="text-sm font-normal text-gray-500"> or </span>
                    <Link to="/" className="inline-block text-sm font-normal text-primary-700 hover:underline"
                    >
                        Continue Shopping
                    </Link>
                    <BsArrowRight />
                </div>
            </div>
        </div >
    )
}

export default OrderSummary