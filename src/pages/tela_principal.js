import Head from "next/head"
import NavbarPrincipal from "./components/NavbarPrincipal"
import {DropMenu} from "../common/dropmenu"

export default function tela_principal(){
    return(
        <>
        <Head>
             <title>IOT - Tela Principal</title>
        </Head>
        <div>
        <NavbarPrincipal/>
        </div>
        </>
    )
}