import React, { useEffect } from 'react'
import ProductItem from './ProductItem';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, setSearch } from '../services/redux/slice/product.slice';
import { useApiRequest } from '../hooks/useApiRequest';
import LoadingSpinner from './ui/LoadingSpinner';
import ProductSearch from './ProductSearch';
import { BOOK_API } from '../services/api/routes';

const ProductList = () => {
    // get base url from config
    const URL = BOOK_API.GET_ALL;

    const { value: products, searchTerm } = useSelector((state) => state.products) || [];
    const dispatch = useDispatch();

    const { data, loading, error } = useApiRequest(URL);

    useEffect(() => {
        if (data && data?.data) {
            const records = data?.data?.records ?? [];
            dispatch(addProduct(records));
            dispatch(setSearch(""));
        }
    }, [data])

    useEffect(() => {
        if (error) {
            toast.error("Failed while fetching products.");
        }
    }, [error]);

    // adding filtering for search functionality
    const filteredProducts = products.filter(
        (product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div id="products" className='flex flex-col gap-20 items-center pt-24 relative'>
            <div className='absolute top-8 md:top-16 right-8'>
                <ProductSearch />
            </div>
            {
                loading ? <LoadingSpinner /> : (
                    <>
                        <h2 className='text-3xl font-secondary md:text-5xl font-bold text-violet-500'>Popular Products</h2>
                        <div className='flex gap-8 max-w-6xl flex-wrap w-full'>
                            {filteredProducts?.length > 0 ? (
                                filteredProducts.map((item) => (
                                    <ProductItem key={item._id} item={item} />
                                ))
                            ) : (
                                <p className="text-gray-500">No products found.</p>
                            )}
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default ProductList;