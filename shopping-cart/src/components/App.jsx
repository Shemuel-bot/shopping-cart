import '../styles/App.css'
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
        </div>
        
      </nav>

      <div id='about'>
        <h1>About</h1>
        <div>
        <p>Every product we have is locally sourced panda meat or fur. No pandas were harmed in the making of these products and were all paid well!</p>
        </div>
        
      </div>
    </>
  )
}

export default App
