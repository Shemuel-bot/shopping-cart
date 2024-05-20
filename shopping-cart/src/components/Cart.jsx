import { Link, useOutletContext } from 'react-router-dom'
import close from '../images/window-close.png'
import style from '../styles/Cart.module.css'

const Cart = ()=>{
    const [price, products] = useOutletContext();
    const children = [];


    for (let i = 0; i < products.length; i++) {
      children.push(
        <div key={products[i].title} className={style.just_product_div}>
            <img className={style.product_div_image}src={products[i].image} alt="" />
            <h3>{products[i].title}</h3>
            
            <p>Qauntity: {products[i].quantity}</p>
        </div>
      )
    }

    return(
        <>
        <div className={style.main}>
        <Link to='/Shop'><img  className={style.close} src={close} alt="" /></Link>
        <div className={style.products}>
            {children}
        </div>

        <div className={style.checkout}>
        <p>Total: ${price}</p>
        <button className={style.btn}>Purchase</button>
        </div>
        </div>
        </>
    )
}
export default Cart