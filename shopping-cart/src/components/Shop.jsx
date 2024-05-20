import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
import style from "../styles/Product.module.css"
import logo from '../images/panda.png'
import cart from '../images/cart.png'
import '../styles/Shop.css'
import { useEffect, useState } from "react"
import { calculatePrice, checkIfProductExist } from "../javaScripts/CalculateCartPrice"



export default function Shop() {
    const [products, setProducts] = useState([]);
    const [productsInCart, setProductsInCart] = useState({ products: [] });
    const [totalPrice, setTotalPrice] = useState(0);
    const children = []

   useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json));

    fetch('https://fakestoreapi.com/carts/1')
            .then(res=>res.json())
            .then(json=>{
                const a = json;
                a.products = [];
                setProductsInCart(a)})
   }, [])



   for (let i = 0; i < products.length; i++) {
    if(products[i] !== undefined){
        children.push(
            <div key={products[i].title} className={style.main}>
            <img className={style.img} src={products[i].image} alt="" />
            <div className={style.div}>
                 <h2 className={style.p}>{products[i].title}</h2>
                <input type="number" id={products[i].title} className={style.qnt} placeholder='Qnty'/>
                <div className={style.cost}>
                <p className={style.p}>${products[i].price}</p>
                <button className={style.btn} onClick={()=>{
                    let duck = productsInCart;

                    if(!checkIfProductExist(products[i].id, duck, document.getElementById(products[i].title).value).bool){
                        products[i].quantity = parseFloat(document.getElementById(products[i].title).value)
                        duck.products.push(products[i]);
                    }
                    setProductsInCart(duck);
                    setTotalPrice(calculatePrice(productsInCart));
                    
                    
                    
                    }}>Add</button>
                </div>
            </div>
        </div>
        );
       }
   }
   


    return (
        <>
            <Outlet context={[totalPrice, productsInCart.products]}/>
            <nav >
                
                <Link to='/' className='link'>
                    <img src={logo} alt="" className='logo'  />
                    <h2>Panda Store</h2>
                </Link>
                <div className='links'>
                    <Link to='Shop' className='link'> Shop</Link>
                    <Link to='Cart'><img src={cart} alt="" className='cart' /></Link>
                </div>
            </nav>
            
            <div id="products" >
                {children}
            </div>
        </>
    )
}