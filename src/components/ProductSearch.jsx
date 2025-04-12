import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setSearch } from '../services/redux/slice/product.slice';
import { IoSearchOutline } from "react-icons/io5";
import useDebounce from '../hooks/useDebounce';

const ProductSearch = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");

    // Debounce the input value to avoid too many dispatches
    const debouncedInput = useDebounce(input, 500);

    useEffect(() => {
        dispatch(setSearch(debouncedInput))
    }, [debouncedInput])

    const handleSearch = (e) => {
        setInput(e.target.value)
    };

    return (
        <span className='relative'>
            <IoSearchOutline className='absolute left-3 text-gray-500 text-xl top-3' />
            <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5' placeholder='Search by title or autor' onChange={handleSearch} value={input} />
        </span>
    )
}

export default ProductSearch