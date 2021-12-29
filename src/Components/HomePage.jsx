import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { saveToCart } from "../utils/localStorage";
import { getProducts } from "./api";
import styles from "./HomePage.module.css"

const handleAdd = (details) => {
    console.log(details)
    saveToCart("product", details);
}

function Product({id, name, country, image, description, price}){
    
    var details = {
        id,
        name,
        country,
        description,
        price
    }

    return (
        <div className={styles.product}>
            <div className={styles.image}>
                <img src={image}/>
            </div>
            <div className={styles.info}>
                <h3>{name}</h3>
                <p>{description}</p>
                <div style={{display:"flex"}}>
                    <div>{country}</div>
                    <div>{price}</div>
                </div>
                <button className={styles.button} onClick={handleAdd(details)}>Buy Now</button>
            </div>
        </div>
    )
}

export default function Homepage(){
    const dispatch = useDispatch();

    const {products, isLoading, isError} = useSelector(
        (state) => state,
        shallowEqual
    )

    useEffect(() => {
        // dispatch(getProducts());
        getProducts(dispatch)
    }, [])

    return <div>
        {isLoading && <h3>Loading...</h3>}
        {isError && <h3>Something went wrong</h3>}
        {products.map((item) => (
            <Product key={item.id} {...item}/>
        ))}
    </div>
}