import Link from 'next/link'
import styles from '../../styles/NavbarInicial.module.css'

export default function Navbar(){
    return (
      <nav className={styles.navbar}>
        <div>
          <h1>IOT</h1>
        </div>
      <ul className={styles.link_items}>
        <li>
        <Link href="/">
          Home
          </Link>
      </li>
      <li>
        <Link href="/login">
           Login
          </Link>
      </li>
      <li>
        <Link href="/cadastro">
          Cadastro  
          </Link>
      </li>
    </ul>
    </nav>
)
}