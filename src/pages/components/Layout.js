import Navbar from './Navbar'
import Footer from './Footer'

import Head from 'next/head'

export default function Layout({children}){
    return(
        <>
        <Navbar />
        <main className="main-container">{children}</main>
        <Footer />
        </>
    )
}