import React from 'react'
import { Link } from "react-router-dom"
const Nav = () => {
    return (
        <>
            <section className="section7">
                <div className="container">
                    <div className="row">
                        <div className='okay '>
                            <span className='pl-5 px-3'>support@subme.com.ng </span>
                            <span className='px-2'>09039343220</span>
                        </div>
                    </div>
                </div>
            </section>
            <nav className="navbar navbar-expand-md">
                <div className="container-fluid col-lg-10 col-md-10">
                    <p className='brand'>
                        <a className="navbar-brand" href="#">subme<span style={{ color: "#106eea" }}>.com.ng</span></a>
                    </p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item px-3">
                                <Link to="/" className="nav-link text-dark" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link to="/" className="nav-link text-dark">About</Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link to="/" className="nav-link text-dark">Pricing</Link>
                            </li>
                            {/* <li className="nav-item px-3 dropdown">
                            <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Company</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item py-2 px-4" href="#">About Us</a></li>
                                <li><a className="dropdown-item py-2 px-4" href="#">Blog</a></li>
                                <li><a className="dropdown-item py-2 px-4" href="#">Contact Us</a></li>
                                <li><a className="dropdown-item py-2 px-4" href="#">Press & Media</a></li>
                            </ul>
                        </li> */}
                            <li className="nav-item px-3 dropdown">
                                <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Product</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item py-2 px-4" href="#">Data Bundle</a>
                                        <li><a className="dropdown-item py-2 px-4" href="#">MTN</a></li>
                                        <li><a className="dropdown-item py-2 px-4" href="#">GLO</a></li>
                                        <li><a className="dropdown-item py-2 px-4" href="#">AIRTEL</a></li>
                                        <li><a className="dropdown-item py-2 px-4" href="#">9MOBILE</a></li>
                                    </li>
                                    <li><a className="dropdown-item py-2 px-4" href="#">Airtime</a></li>
                                    <li><a className="dropdown-item py-2 px-4" href="#">TV Subsription</a></li>
                                    <li><a className="dropdown-item py-2 px-4" href="#">Bill Payment</a></li>
                                    <li><a className="dropdown-item py-2 px-4" href="#">Waec Result Pin</a></li>
                                    <li><a className="dropdown-item py-2 px-4" href="#">Neco Result Token</a></li>
                                    <li><a className="dropdown-item py-2 px-4" href="#">Nabteb Result Pin</a></li>
                                </ul>
                            </li>
                            <li className='nav-item px-3'><a className="nav-link text-dark" href="#">Contact</a></li>
                            <li className="nav-item px-3 dropdown">
                                <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Register/Login</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item py-2 px-4" href="#">Register</a></li>
                                    <li><a className="dropdown-item py-2 px-4" href="#">Login</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <nav className="navbar navbar-expand-lg" style={{
                boxShadow: "0px 2px 15px rgba(0, 0, 0, 0.1)", background: "#fff", transition: "all 0.5s"
            }}>
                <div className="container">
                    <a className="navbar-brand" href="#">subme<span style={{ color: "#106eea" }}>.com.ng</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            <li className="nav-item px-3">
                                <Link to="/" className="nav-link text-dark" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link to="/" className="nav-link text-dark">About</Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link to="/" className="nav-link text-dark">Pricing</Link>
                            </li>
                            <li className="nav-item px-3 dropdown">
                                <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Product</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item py-2 px-4" href="#">Data Bundle</a>
                                        <li><a className="dropdown-item py-2 px-4" href="#">MTN</a></li>
                                        <li><a className="dropdown-item py-2 px-4" href="#">GLO</a></li>
                                        <li><a className="dropdown-item py-2 px-4" href="#">AIRTEL</a></li>
                                        <li><a className="dropdown-item py-2 px-4" href="#">9MOBILE</a></li>
                                    </li>
                                    <li><a className="dropdown-item py-2 px-4" href="#">Airtime</a></li>
                                    <li><a className="dropdown-item py-2 px-4" href="#">TV Subsription</a></li>
                                    <li><a className="dropdown-item py-2 px-4" href="#">Bill Payment</a></li>
                                    <li><a className="dropdown-item py-2 px-4" href="#">Waec Result Pin</a></li>
                                    <li><a className="dropdown-item py-2 px-4" href="#">Neco Result Token</a></li>
                                    <li><a className="dropdown-item py-2 px-4" href="#">Nabteb Result Pin</a></li>
                                </ul>
                            </li>
                            <li className='nav-item px-3'><a className="nav-link text-dark" href="#">Contact</a></li>
                            <li className="nav-item px-3 dropdown">
                                <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Register/Login</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item py-2 px-4" href="#">Register</a></li>
                                    <li><a className="dropdown-item py-2 px-4" href="#">Login</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}

        </>
    )
}

export default Nav