import React from 'react';
import ProductsCategories from '../ProductsCategories/ProductsCategories';
import ProductsDetails from '../ProductsDetails/ProductsDetails';

const ProductsBody = () => {
    return (
        <div className='grid grid-cols-3 mt-20'>
        <div className='col-span-1'>
            <ProductsCategories/>
        </div>
        <div className='col-span-2'>
            <ProductsDetails/>
        </div>
        
    </div>
    );
};

export default ProductsBody;