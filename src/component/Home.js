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
// import Register from './Register'
const Home = () => {

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
            {/* <Register /> */}
        </>
    )
}

export default Home