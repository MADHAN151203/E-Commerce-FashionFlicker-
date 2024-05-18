import { useContext } from "react";
import {ShopContext} from '../context/Shopcontext'
import { useParams } from "react-router-dom";
import Breadcrum from "../components/Breadcrums/breadcrums";
import Productdisplay from "../components/productdisplay/productdisplay";
import Descriptionbox from "../components/descriptionbox/descriptionbox";
import Relatedproducts from "../components/Relatedproducts/relatedproducts";

const Product=()=>{
    const {all_product} = useContext(ShopContext)
    const {productId} = useParams();
    const product = all_product.find((e)=> e.id ===Number(productId))
    return(
        <div>
            <Breadcrum product={product}/>
            <Productdisplay product={product}/>
            <Descriptionbox/>
            <Relatedproducts/>
        </div>
    );
}
export default Product;