import Head from "next/head"
import NavbarPrincipal from "./components/NavbarPrincipal"

export default function tela_principal(){
    return(
        <>
        <Head>
             <title>IOT - Tela Principal</title>
        </Head>
        <div>
            <NavbarPrincipal />
        </div>
        </>
    )
}