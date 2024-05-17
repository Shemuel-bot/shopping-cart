import '../styles/App.css'
import cart from '../images/cart.png'
import logo from '../images/panda.png'
import { Link } from "react-router-dom";

function App() {

  return (
    <>
      <nav>
        
        <Link className='link'>
        <img src={logo} alt="" className='logo'/>
          <h2>Panda Store</h2>
          </Link>
        <div className='links'>
        <Link to='Shop' className='link'> Shop</Link>
        <Link ><img src={cart} alt="" className='cart'/></Link>
        </div>
        
      </nav>

      <div id='about'>
        <h1>About</h1>
        <div>
        <p>lor</p>
        </div>
        
      </div>
    </>
  )
}

export default App
