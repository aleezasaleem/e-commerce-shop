'use client'
import { useShoppingCart } from 'use-shopping-cart'
import { Button } from './ui/button'
import { urlFor } from '@/lib/sanity';
export interface ProductCart{
    name:string;
    description:string;
    price:number;
    currency:string;
    image:any
}
const AddToBag = ({name,currency,description,image,price}:ProductCart) => {
    const {addItem,handleCartClick}=useShoppingCart()
    const product={
        name:name,
        description:description,
        price:price,
        currency:currency,
        image:urlFor(image).url(),
        id:'talha'
    }
  return (
    <Button onClick={()=>{
        addItem(product),handleCartClick()
    }}>Add To Cart</Button>
  )
}

export default AddToBag
