import './Hero.css'
import hand_icon from '../assests/hand_icon.png'
import arrow_icon from '../assests/arrow.png'
import hero_image from '../assests/hero_image.png'
const Hero =()=>{
    return(
        <div className="hero">
            <div className='hero-left'>
                <h2>New Arrivals Only</h2>
                <div>
                    <div className='hero-hand-icon'>
                        <p>New</p>
                        <img src={hand_icon} alt=''/>
                    </div>
                    <p>Collections</p>
                    <p>For Everyone</p>
                </div>
                <div className='herp-latest-btn'>
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt=''/>

                </div>

            </div>
            <div className='hero-right'>
                <img src={hero_image} alt=''/>
            </div>
        </div>
    );
}
export default Hero