import './offers.css'
import { Link } from 'react-router-dom';
import exclusive_image from '../assests/exclusive_image.png'
const Offers =()=>{
    return(
        <div className="offers">
            <div className='offers-left'>
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>Only One The Best Sellers Products</p>
                <Link to='/womens'><button>Check Now</button></Link>
            </div>
            <div className='offers-right'>
                <img src={exclusive_image} alt=''/>
            </div>
            
        </div>
    );
}
export default Offers