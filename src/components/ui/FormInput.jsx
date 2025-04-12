
const FormInput = (
    { id, label, type = "text", value, onChange, placeholder, required = false }
) => (
    <div>
        <label htmlFor={id} className="mb-2 block text-sm font-medium text-gray-900">{label}</label>
        <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
        />
    </div>
);

export default FormInput;