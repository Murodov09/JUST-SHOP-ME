import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Asset/logo.png'
import cart_icon from '../Asset/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Asset/drp_down.png'

const Navbar = () => {
    const [menu,setmenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

  const dropdown_toggle = (e)=>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>JUST</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setmenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop" ? <hr/> : <></>}</li>
        <li onClick={()=>{setmenu("mens")}}><Link style={{textDecoration: 'none'}} to='/mens'>Men</Link>{menu==="mens" ? <hr/> : <></>}</li>
        <li onClick={()=>{setmenu("womens")}}><Link style={{textDecoration: 'none'}} to='/womens'>Women</Link>{menu==="womens" ? <hr/> : <></>}</li>
        <li onClick={()=>{setmenu("kids")}}><Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link>{menu==="kids" ? <hr/> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link style={{textDecoration: 'none'}} to='/login'><button>Login</button></Link>
       <Link style={{textDecoration: 'none'}} to='/cart'><img src={cart_icon} alt="" /></Link> 
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar