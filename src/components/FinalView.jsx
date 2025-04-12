import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiShoppingBag3Fill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../services/redux/slice/product.slice';

const FinalPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { cart } = useSelector(store => store.products) || [];
    const { checkoutDetails } = useSelector(store => store.checkout);
    const { name, email, state, phone, address, paymentMethod } = checkoutDetails || {};

    // calculating sub-total, savings, and total
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shippingCostTotal = cart.reduce((acc, item) => {
        return acc + (item.shippingCost || 0);
    }, 0);

    const total = subtotal + shippingCostTotal;

    useEffect(() => {
        if (!cart.length) {
            navigate("/");
        }
    }, []);

    const handleNavigate = () => {
        dispatch(clearCart());
        navigate("/");
    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg my-10">
            <div className='flex items-center justify-center h-44 w-full bg-green-100 rounded-lg mb-6'>
                <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="Success" className='h-10 w-10 md:h-16 md:w-16 mr-4' />
                <h2 className='text-2xl md:text-4xl font-extrabold text-green-700'>Products purchased successfully</h2>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>

            <div className="bg-gray-100 p-4 rounded-lg mb-6 break-words">
                <h3 className="text-lg font-semibold text-gray-700">Delivery Details</h3>
                <p className="text-gray-600 pt-2"><strong>Name:</strong> {name}</p>
                <p className="text-gray-600 pt-2"><strong>Email:</strong> {email}</p>
                <p className="text-gray-600 pt-2"><strong>State:</strong> {state}</p>
                <p className="text-gray-600 pt-2"><strong>Phone:</strong> {phone}</p>
                <p className="text-gray-600 pt-2"><strong>Address:</strong> {address}</p>
                <p className="text-gray-600 pt-2"><strong>Payment Method:</strong> {paymentMethod}</p>
            </div>

            <h3 className="text-lg font-semibold text-gray-700 mb-3">Products Purchased</h3>
            <div className="space-y-4">
                {cart.map((item) => (
                    <div key={item._id} className="flex items-center justify-between p-4 rounded-lg border border-gray-200 bg-white">
                        <div className="flex items-center space-x-4">
                            <img src={item.thumbnail} alt={item.title} className="w-16 h-16 object-cover rounded" />
                            <div>
                                <p className="text-gray-700 font-medium">{item.title}</p>
                                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                            </div>
                        </div>
                        <p className="text-gray-800 font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                ))}
            </div>

            <div className="border-t pt-4 mt-6">
                <p className="text-gray-700 font-semibold">Subtotal: <span className="float-right">${subtotal.toFixed(2)}</span></p>
                <p className="text-gray-700 font-semibold">Shipping: <span className="float-right text-green-600">-${shippingCostTotal.toFixed(2)}</span></p>
                <p className="text-xl font-bold text-gray-900 mt-2">Total: <span className="float-right">${total.toFixed(2)}</span></p>
            </div>
            <div className="mt-8 text-center">
                <button type="button" className="bg-violet-500 inline-flex gap-2 items-center rounded-lg px-5 py-2.5 text-sm font-medium text-white hover:bg-violet-600 cursor-pointer"
                    onClick={handleNavigate}
                >
                    <RiShoppingBag3Fill />
                    Continue Shopping
                </button>
            </div>
        </div>
    );
};

export default FinalPage;