import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
import logo from '../images/panda.png'
import cart from '../images/cart.png'
import '../styles/Shop.css'

export default function Shop() {
    return (
        <>
            <Outlet />
            <nav>

                <Link to='/' className='link'>
                    <img src={logo} alt="" className='logo' />
                    <h2>Panda Store</h2>
                </Link>
                <div className='links'>
                    <Link to='Shop' className='link'> Shop</Link>
                    <Link to='Cart'><img src={cart} alt="" className='cart' /></Link>
                </div>
            </nav>
            
        </>
    )
}