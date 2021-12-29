import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"

function Navbar() {
    return (
        <div className={styles.navbar}>
            <div>
                <Link className={styles.heading} to="/">Home</Link>
            </div>
            <div>
                <Link className={styles.heading} to="/checkout">Cart</Link>
            </div>
        </div>
    )
}

export default Navbar;