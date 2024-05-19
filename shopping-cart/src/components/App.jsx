import '../styles/App.css'
import cart from '../images/cart.png'
import logo from '../images/panda.png'
import { Link } from "react-router-dom";

function App() {

  return (
    <>
      <nav>
        
        <Link to='/' className='link'>
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
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi doloremque deserunt et velit vitae soluta! Cupiditate sed nulla veniam unde atque! Recusandae possimus fuga veritatis. Distinctio aliquid nesciunt repellat tempore.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum maiores dolor cum enim dolorem aut tempore, eum ullam sapiente. Tempora laudantium aliquid ad debitis ipsam deleniti saepe. Tempore, nostrum delectus.</p>
        </div>
        
      </div>
    </>
  )
}

export default App
