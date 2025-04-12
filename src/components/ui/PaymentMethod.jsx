import { PAYMENT_METHODS } from "../../utils/constants";

const PaymentOption = ({ selected, onChange }) => (
    <div className="space-y-4 mt-4">
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4">
            <div className="flex items-start">
                <input
                    id="upi"
                    type="radio"
                    value={PAYMENT_METHODS.UPI}
                    checked={selected === PAYMENT_METHODS.UPI}
                    onChange={onChange}
                    className="h-4 w-4 border-gray-300 text-primary-600 focus:ring-2 focus:ring-primary-600"
                />
                <div className="ms-4 text-sm">
                    <label htmlFor="upi" className="font-medium text-gray-900">UPI</label>
                    <p className="mt-1 text-xs text-gray-500">Fast and secure</p>
                </div>
            </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4">
            <div className="flex items-start">
                <input
                    id="cash"
                    type="radio"
                    value={PAYMENT_METHODS.PAY_ON_DELIVERY}
                    checked={selected === PAYMENT_METHODS.PAY_ON_DELIVERY}
                    onChange={onChange}
                    className="h-4 w-4 border-gray-300 text-primary-600 focus:ring-2 focus:ring-primary-600"
                />
                <div className="ms-4 text-sm">
                    <label htmlFor="cash" className="font-medium text-gray-900">Cash on Delivery</label>
                    <p className="mt-1 text-xs text-gray-500">+$3 processing fee</p>
                </div>
            </div>
        </div>
    </div>
);

export default PaymentOption;