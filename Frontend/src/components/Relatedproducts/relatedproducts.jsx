import './realtedproducts.css'
import Item from '../items/items';
import data_product from '../assests/data'
const Relatedproducts =()=>{
    return(
        <div className="relatedproducts">
            <h1>Related Products</h1>
            <hr />
            <div className='relatedproducts-item'>
                {data_product.map((item,i)=>{
                    return <Item key={item} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}

            </div>
        </div>
    );
}
export default Relatedproducts