import LoginCard from "./components/LoginCard"
import styles from '@/styles/Login.module.css'
import Input from "./components/input"
import Button from "./components/button"

  export default function Login(){
   return(
      <div className={styles.styles}>
      <div className={styles.background}>
      <div className= "background-image"></div>
         <LoginCard titulo="Login">
            <form className={styles.form}>
               <label>CPF</label>
               <Input type="number" placeholder="Enter a value"/>
               <label>Password</label>
               <Input type="password" placeholder="Show"/>
               <Button>Entrar</Button>
            </form>
           </LoginCard>
      </div>
   </div>
   )
  }