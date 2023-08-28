import Link from "next/link";
import styles from '../../styles/NavbarPrincipal.module.css'
import Button from "./button";

export default function NavbarPrincipal(){
    return(
        <nav className={styles.navbar}>
            <div>
                <h1 className={styles.tex}>IOT</h1>
            </div>
            <ul className={styles.link_items}>
                <li>
                    <Link href="/">
                        Sair
                    </Link>
                </li>
            </ul>
        </nav>
    )
}