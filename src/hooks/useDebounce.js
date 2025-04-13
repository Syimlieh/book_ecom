import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
    const [searchValue, setSearchValue] = useState(value);

    useEffect(() => {
        const searchTimeOut = setTimeout(() => {
            setSearchValue(value)
        }, delay)

        return () => {
            clearTimeout(searchTimeOut)
        }
    }, [value])
    return searchValue;
}

export default useDebounce;