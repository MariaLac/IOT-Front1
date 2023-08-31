import React, { useState } from 'react';
import LoginCard from "./components/LoginCard"
import styles from '@/styles/Login.module.css'
import Input from "./components/input"
import Button from "./components/button"
import NavbarLogin from "./components/NavbarLogin"

  export default function Login(){
   const [passwordVisible, setPasswordVisible] = useState(false);
   return(
      <div className={styles.styles}>
         <NavbarLogin/>
      <div className={styles.background}>
      <div className= "background-image"></div>
         <LoginCard titulo="Login">
            <form className={styles.form}>
               <label>CPF</label>
               <Input type="number" placeholder="Enter a value"/>
               <label>Password</label>
               
                  <Input
                  type={passwordVisible ? 'text' : 'password'}
                  placeholder="Enter your password"
                   />
  
                  <button
                   type="button"
                   onClick={() => setPasswordVisible(!passwordVisible)}
                   >
                   {passwordVisible ? 'Ocultar Senha' : 'Mostrar Senha'}
                   </button>
               <Button>Entrar</Button>
            </form>
           </LoginCard>
      </div>
   </div>
   )
  }

