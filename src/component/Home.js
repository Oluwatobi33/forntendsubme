import React from 'react'
// import { Link } from 'react-router-dom'
import SubmeBann from './SubmeBann'
import Nav from './Nav'
import About from './About'
import Price from './Price'
import Frequent from './Frequent'
import Happy from './Happy'
import Contact from './Contact'
import New from './New'
import Footer from './Footer'
import { useState, useEffect } from 'react'
// import Register from './Register'
const Home = () => {
    const [backTop, setbackTop] = useState(false)
    const [isloading, setisLoading] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setbackTop(true)
            } else {
                setbackTop(false)
            }
        })
    }, [])
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <>
            <Nav />
            <SubmeBann />
            <About />
            <Price />
            <Frequent />
            <Happy />
            <Contact />
            <New />
            <Footer />
            {Home && (
                <button className='border-0' style={{ position: "fixed", backgroundColor: "#106EEA", color: "#FFFFFF", bottom: "100px", right: "50px", height: "50px", width: "50px", fontSize: "50px" }} onClick={scrollUp}>^</button>
            )}
        </>
    )
}

export default Home