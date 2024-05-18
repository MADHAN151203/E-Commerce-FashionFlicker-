import Hero from "../components/Hero/Hero";
import Newcollections from "../components/Newcollections/newcollections";
import Offers from "../components/Offers/offers";
import Popular from "../components/Popular/popular";
import Newsletters from "../components/newsletters/newsletters";

const Shop=()=>{
    return(
        <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <Newcollections/>
        <Newsletters/>
        </div>
    );

}
export default Shop