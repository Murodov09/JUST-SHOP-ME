import './App.css'
import Shop from './Pages/Shop'
import Shopcategory from './Pages/Shopcategory'
import Product from './Pages/Prodyct'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignUp'
import Footer from './Components/Footer/Footer'
import men_banner from './Components/Asset/banner_mens.png'
import women_banner from './Components/Asset/banner_women.png'
import kid_banner from './Components/Asset/banner_kids.png'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'

function App() {


  return (
    <div>
      
    <BrowserRouter>
 <Navbar/>

    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<Shopcategory banner={men_banner} category="men"/>}/>
      <Route path='/womens' element={<Shopcategory banner={women_banner} category="women"/>}/>
      <Route path='/kids' element={<Shopcategory banner={kid_banner} category="kid"/>}/>
      <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
    </Routes>
    
    <Footer/>
    </BrowserRouter>
  </div>
  )
}

export default App
