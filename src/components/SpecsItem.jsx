const SpecItem = ({ label, value }) => (
    <li className="flex items-center gap-2">
        <b className="text-gray-700 text-medium">{label}:</b>
        <p className="text-sm text-gray-500 font-semibold">{value}</p>
    </li>
);

export default SpecItem;