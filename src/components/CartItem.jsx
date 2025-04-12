import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeItemFromCart, decreaseQuantity } from '../services/redux/slice/product.slice';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    function handleAddToCart(item) {
        dispatch(addToCart(item))
    };

    function handleDecreaseFromCart(item) {
        dispatch(decreaseQuantity(item))
    };

    function handleRemoveFromCart(item) {
        dispatch(removeItemFromCart(item))
    };

    return (
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                <img className="h-20 w-20 object-cover" src={item.thumbnail} alt="imac image" />

                <div className="flex items-center justify-between md:order-3 md:justify-end">
                    <div className="flex items-center">
                        <button className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-gray-300 bg-gray-100 cursor-pointer">
                            <FaMinus
                                className='text-gray-500 text-sm'
                                onClick={() => handleDecreaseFromCart(item)}
                            />
                        </button>
                        <p className='w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900'>{item.quantity}</p>
                        <button className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100  ${item.quantity >= item.stock ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                            disabled={item.quantity >= item.stock}
                        >
                            <FaPlus
                                className='text-gray-500 text-sm'
                                onClick={() => handleAddToCart(item)}
                            />
                        </button>
                    </div>
                    <div className="text-end md:order-4 md:w-32">
                        <p className="text-base font-bold text-gray-900">{item.price}</p>
                    </div>
                </div>

                <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                    <Link to={`/product/${item._id}`} className="block text-md font-medium text-gray-800 hover:underline">{item.title}{item.brand}</Link>

                    <div className="flex items-center gap-4 cursor-pointer">
                        <button type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline cursor-pointer" onClick={() => handleRemoveFromCart(item)}>
                            <RxCross2 className='text-red-500 text-lg' />
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem