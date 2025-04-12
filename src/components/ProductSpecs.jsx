import React from 'react'
import SpecItem from './SpecsItem';

const ProductSpecs = ({
    brand, category, dimensions, availabilityStatus,
    shippingInformation, returnPolicy, warrantyInformation, tags
}) => {
    return (
        <div className="mt-6 sm:gap-4 flex-col">
            <h3 className="text-2xl text-gray-700 font-semibold">Product specification</h3>
            <ul className="mt-2 flex flex-col items-start gap-2">
                {brand && <SpecItem label="Brand" value={brand} />}
                {category && <SpecItem label="Category" value={category} />}
                {dimensions?.height && <SpecItem label="Height" value={dimensions.height} />}
                {dimensions?.width && <SpecItem label="Width" value={dimensions.width} />}
                {dimensions?.depth && <SpecItem label="Depth" value={dimensions.depth} />}
                {availabilityStatus && <SpecItem label="Availability" value={availabilityStatus} />}
                {shippingInformation && <SpecItem label="Shipping Info" value={shippingInformation} />}
                {returnPolicy && <SpecItem label="Return Policy" value={returnPolicy} />}
                {warrantyInformation && <SpecItem label="Warranty" value={warrantyInformation} />}
                {tags?.length && <SpecItem label="Tags" value={tags.join(", ")} />}
            </ul>
        </div>
    );
};

export default ProductSpecs