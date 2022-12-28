import React, { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
    product: IProduct
}

export const Product = ({ product }: ProductProps) => {
    const [isOpenText, setOpenText] = useState(false);

    return (
        <div className='product-card border py-2 px-4 rounded flex flex-col items-center mb-2'>
            <img className='w-1/6' src={product.image} alt={product.title}/>
            <div>{product.title}</div>
            <div>price {product.price} $</div>
            <button
                className='py-2 px-4 border bg-yellow-400'
                onClick={() => setOpenText(!isOpenText)}
            >
                {isOpenText ? 'hide text' : 'show text'}
            </button>
            { isOpenText && <div>{product.description}</div> }
        </div>
    )
}
