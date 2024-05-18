import { Link } from 'react-router-dom'
import close from '../images/window-close.png'
import style from '../styles/Cart.module.css'

const Cart = ()=>{
    return(
        <>
        <div className={style.main}>
        <Link to='/Shop'><img  className={style.close} src={close} alt="" /></Link>
        <div ></div>

        <div className={style.checkout}>
        <p>Total: 0$</p>
        <button className={style.btn}>Purchase</button>
        </div>
        </div>
        </>
    )
}
export default Cart