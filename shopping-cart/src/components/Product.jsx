    import style from '../styles/Product.module.css'

export default function Product(Props){
    return(
        <>
        <div className={style.main}>
            <img className={style.img} src={Props.img} alt="" />
            <div className={style.div}>
                <h2 className={style.p}>{Props.name}</h2>
                <div className={style.cost}>
                <p className={style.p}>${Props.price}</p>
                <button className={style.btn}>Add</button>
                </div>
            </div>
        </div>
        </>
    )
}