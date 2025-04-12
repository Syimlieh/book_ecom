const PhoneInput = ({ value, onChange }) => (
    <div>
        <label htmlFor="phone-input" className="mb-2 block text-sm font-medium text-gray-900"> Phone Number* </label>
        <div className="flex items-center">
            <span className="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-sm text-gray-900">+91</span>
            <input
                type="text"
                id="phone-input"
                placeholder="9770987821"
                required
                value={value}
                onChange={onChange}
                className="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
            />
        </div>
    </div>
);

export default PhoneInput;