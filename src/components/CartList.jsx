import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import OrderSummary from './OrderSummary';
import { RxCross2 } from "react-icons/rx";
import { clearCart } from '../services/redux/slice/product.slice';

const CartList = () => {
    const { cart } = useSelector(store => store.products) || [];
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    // calculating sub-total, shipping, and total
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shippingCostTotal = cart.reduce((acc, item) => {
        return acc + (item.shippingCost || 0);
    }, 0);

    const total = subtotal + shippingCostTotal;

    return (
        <section className="bg-white py-8 antialiased md:py-16">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <div>

                    <h2 className="text-2xl font-semibold text-gray-800 sm:text-2xl">Shopping Cart</h2>
                    {/* clear cart */}
                    <div className="mt-4 flex items-center justify-between">
                        <p className="text-sm text-gray-500">
                            {cart?.length} item{cart?.length > 1 ? 's' : ''}
                        </p>
                        <button className=" text-red-600 hover:text-red-800 transition duration-150 ease-in-out flex items-center gap-2 text-lg cursor-pointer"
                            onClick={handleClearCart}
                        >
                            <RxCross2 className='text-red-700 cursor-pointer text-lg' />Clear Cart
                        </button>
                    </div>
                </div>

                <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                    <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                        <div className="space-y-6">
                            {
                                cart?.length > 0 && cart.map((item) => (
                                    <CartItem item={item} key={item._id} />
                                ))
                            }
                        </div>
                    </div>
                    <OrderSummary total={total} shipping={shippingCostTotal} subtotal={subtotal} to="/checkout" />
                </div>
            </div>
        </section>
    )
}

export default CartList