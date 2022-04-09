import React from 'react';
import useProducts from '../hooks/useProducts';

const Orders = () => {
    const [products, serProducts] = useProducts()
    return (
        <div>
            <h2>This is order section:{products.length}</h2>
        </div>
    );
};

export default Orders;