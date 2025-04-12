const StateSelect = ({ value, onChange }) => (
    <div>
        <label htmlFor="state" className="block text-sm font-medium text-gray-900 mb-2"> State* </label>
        <select
            id="state"
            value={value}
            onChange={onChange}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
        >
            <option value="">Select an option</option>
            <option value="ML">Meghalaya</option>
            <option value="AP">Andhra Pradesh</option>
            <option value="AS">Assam</option>
            <option value="BR">Bihar</option>
            <option value="DL">Delhi</option>
            <option value="GJ">Gujarat</option>
            <option value="KA">Karnataka</option>
            <option value="KL">Kerala</option>
            <option value="MH">Maharashtra</option>
        </select>
    </div>
);

export default StateSelect;