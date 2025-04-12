import React, { lazy, Suspense } from 'react'
import HeroSection from '../components/HeroSection';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const ProductList = lazy(() => import('../components/ProductList'));
const Home = () => {
    return (
        <>
            <HeroSection />
            <Suspense fallback={<LoadingSpinner center={true} />}>
                <ProductList />
            </Suspense>
        </>
    )
}

export default Home;