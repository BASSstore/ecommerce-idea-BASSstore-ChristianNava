  
  import React from 'react'
  //import NavBar from './Components/NavBar';
  import logo1 from './img/logo1.png';
  import carrito from './img/cart.png';  

  //import './css/core-style.css'
  //import './style.css'  
 // import './css/core-style.css'
  //import './style.css'    
  import './css/core-style.css';
  import './style.css';    
  //import styles from './css/core-style.css';
  //import styles from './style.css';
/*
  import './css/core-style.css'
  import './style.css'
  
  import './js/jquery/jquery-2.2.4.min.js'
  import './js/popper.min.js'
  import './js/bootstrap.min.js'
  import './js/plugins.js'
  import './js/active.js'
*/
//import 'bootstrap/dist/css/bootstrap.min.css';

    import 'bootstrap/dist/css/bootstrap.css';
    //import 'bootstrap/dist/js/bootstrap.js';
 
  
  const NavBar = () => {
    return (
    <>
    <div>
        <header className="header-area clearfix">
            
            <div className="nav-close">
                <i className="fa fa-close" aria-hidden="true"></i>
            </div>
            
            <div className="logo">
                <a href="index.html"><img src={logo1} alt="" /></a>
            </div>
            
            <nav className="amado-nav">
                <ul>
                    <li className="active"><a href="index.html">Inicio</a></li>
                    <li><a href="shop.html">Tienda</a></li>
                    <li><a href="checkout.html">Comprar</a></li>
                </ul>
            </nav>

            <div className="cart-fav-search mb-100">
                <a href="cart.html" class="cart-nav"><img src={carrito} alt="" /> Carrito <span>(0)</span></a>
            </div>          

        </header>    

    </div>
    </> 
    )
  }
  
  export default NavBar


 