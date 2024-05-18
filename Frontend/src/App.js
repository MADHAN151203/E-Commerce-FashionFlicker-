import './App.css';
// import Navbar from './components/Navbar/Navbar';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './pages/shop';
import Shopcategory from './pages/shopcategory';
import Product from './pages/product';
import Cart from './pages/Cart';
import Loginsignup from './pages/loginsignup';
import Footer from './components/footer/footer';
import men_banner from './components/assests/banner_mens.png'
import women_banner from './components/assests/banner_women.png'
import kids_banner from './components/assests/banner_kids.png'
import Login from './pages/login';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/mens' element={<Shopcategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<Shopcategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<Shopcategory banner={kids_banner} category="kid"/>}/>
        <Route path='product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/' element={<Loginsignup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
