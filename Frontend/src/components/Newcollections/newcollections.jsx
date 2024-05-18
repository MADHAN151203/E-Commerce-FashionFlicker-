import './newcollections.css'
import new_collections from '../assests/new_collections'
import Item from '../items/items';
const Newcollections =()=>{
    return(
        <div  className='new-collections'>
            <h1>New Collections</h1>
            <hr />
            <div className='collections'>
                {new_collections.map((item,i)=>{
                    return <Item key={item} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>

                })}
            </div>


        </div>
    );
}
export default Newcollections