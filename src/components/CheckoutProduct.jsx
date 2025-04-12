import React, { useState } from 'react'
import OrderSummary from './OrderSummary'
import { useDispatch, useSelector } from 'react-redux'
import { setCheckoutDetails } from '../services/redux/slice/checkout.slice'
import toast from 'react-hot-toast';
import FormInput from './ui/FormInput';
import StateSelect from './ui/StateSelect';
import PhoneInput from './ui/PhoneInput';
import PaymentOption from './ui/PaymentMethod';

const CheckoutProduct = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [state, setState] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');

    const { cart } = useSelector(store => store.products) || [];

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const shippingCostTotal = cart.reduce((acc, item) => {
        return acc + (item.shippingCost || 0);
    }, 0);

    const total = subtotal + shippingCostTotal;

    const handleSubmit = (e) => {
        e.preventDefault();
        // check if all fields are filled
        if (!name || !email || !state || !phone || !address || !paymentMethod) {
            toast.error('Please fill all the fields');
            return;
        }
        dispatch(setCheckoutDetails({
            name,
            email,
            state,
            phone,
            address,
            paymentMethod
        }));
        toast.success('Details saved successfully');
    }

    return (
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
                    <form className="min-w-0 flex-1 space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold text-gray-900">Delivery Details</h2>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <FormInput id="your_name" label="Your name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Bonnie Green" />
                                <FormInput id="your_email" label="Your email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="shoppy@ecom.com" />
                                <StateSelect value={state} onChange={(e) => setState(e.target.value)} />
                                <PhoneInput value={phone} onChange={(e) => setPhone(e.target.value)} />
                                <FormInput id="address" label="Full Address" value={address} onChange={(e) => setAddress(e.target.value)} required placeholder="123 Street" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-900">Payment</h3>

                            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4">
                                <h3 className="text-xl font-semibold text-gray-900">Payment</h3>
                                <PaymentOption selected={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} />
                            </div>
                        </div>
                        <button className="bg-violet-600 w-full text-center flex justify-center gap-2 items-center rounded-lg px-5 py-2.5 text-sm font-medium text-white hover:bg-violet-700 cursor-pointer"
                            onClick={handleSubmit}
                        >
                            Save details
                        </button>
                    </form>
                    <OrderSummary total={total} shipping={shippingCostTotal} subtotal={subtotal} to="/final" />
                </div>
            </div>
        </section>
    )
}

export default CheckoutProduct