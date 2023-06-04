import React, { useRef } from 'react'
import { useState } from 'react'
import {
    FaBars,

} from "react-icons/fa"
import { Link } from 'react-router-dom'
const Dashboardnew = () => {
    const [isOpen, setisOpen] = useState(false)
    const toggleMenu = () => setisOpen(!isOpen)
    const ref = useRef(null)
    const switchMode = ref.current

    // switchMode.addEventListener('change', function () {
    //     if (this.checked) {
    //         document.body.classList.add('dark');
    //     } else {
    //         document.body.classList.remove('dark');
    //     }
    // })
    return (

        <>
            <section id="sidebar" style={{ width: isOpen ? "280px" : "10px" }}>
                <div className='container2'>
                    <div className="sidebar" style={{ width: isOpen ? "280px" : "50px" }}>
                        <div className="top_section">
                            <h1 style={{ display: isOpen ? "block" : "none" }} className="logo"> <img src='https://subme.com.ng/img/subme_logo.jpeg' className='img-responsive img-fluid rounded rounded-circle mx-4 w-100' />subme</h1>
                            <div className="bars" style={{ marginLeft: isOpen ? "50px" : "0px" }}>
                                <FaBars onClick={toggleMenu} />
                            </div>
                        </div>
                        <div className="link" style={{ backgroundColor: "#007bff", borderRadius: "10px" }} activeclassName="active">
                            <div className="icon"><i className=" fa fa-tachometer" aria-hidden="true"></i></div>
                            <div className="link_text" s style={{ display: isOpen ? "block" : "none" }}> Dashboard</div>
                        </div>
                        <div className="link" activeclassName="active">
                            <div className="icon"><i className="fa fa-level-up" aria-hidden="true"></i></div>
                            <div className="link_text" style={{ display: isOpen ? "block" : "none" }}>  Become a Reseller</div>
                        </div>
                        <div className="link" activeclassName="active">
                            <i className="fa fa-history" aria-hidden="true"></i>
                            <div className="icon"></div>
                            <div className="link_text" style={{ display: isOpen ? "block" : "none" }}> e-Statement</div>
                        </div>
                        <div className="link" activeclassName="active">
                            <div className="icon"> <i className="fa fa-history" aria-hidden="true"></i></div>
                            <div className="link_text" style={{ display: isOpen ? "block" : "none" }}>Payment History</div>
                        </div>
                        <div className="link" activeclassName="active">
                            <div className="icon"><i className="fa fa-level-up" aria-hidden="true"></i></div>
                            <div className="link_text" style={{ display: isOpen ? "block" : "none" }}>  Become a Reseller</div>
                        </div>
                        <div className="link" activeclassName="active">
                            <div className="icon"> <i className="fa fa-history" aria-hidden="true"></i></div>
                            <div className="link_text" style={{ display: isOpen ? "block" : "none" }}> View Activity</div>
                        </div>
                        <div className="link" activeclassName="active">
                            <div className="icon"> <i className="fa fa-code" aria-hidden="true"></i></div>
                            <div className="link_text" style={{ display: isOpen ? "block" : "none" }}> API Documentation</div>
                        </div>
                    </div>
                </div >
                {/* <a href="#" className="brand">
                    <i className='bx bxs-smile'></i>
                    <span className="text">AdminHub</span>
                </a>
                <ul className="side-menu top">
                    <li className="active">
                        <a href="#">
                            <i className='bx bxs-dashboard' ></i>
                            <span className="text">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bxs-shopping-bag-alt' ></i>
                            <span className="text">My Store</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bxs-doughnut-chart' ></i>
                            <span className="text">Analytics</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bxs-message-dots' ></i>
                            <span className="text">Message</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bxs-group' ></i>
                            <span className="text">Team</span>
                        </a>
                    </li>
                </ul>
                <ul className="side-menu">
                    <li>
                        <a href="#">
                            <i className='bx bxs-cog' ></i>
                            <span className="text">Settings</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="logout">
                            <i className='bx bxs-log-out-circle' ></i>
                            <span className="text">Logout</span>
                        </a>
                    </li>
                </ul> */}
            </section>
            <section id="content">
                <nav>
                    <i className='bx bx-menu' ></i>
                    <form action="#">
                        <div className="form-input ms-5">
                            <input type="search" placeholder="Search..." />
                            <button type="submit" className="search-btn"><i className='bx bx-search' ></i></button>
                        </div>
                    </form>
                    <input type="checkbox" ref={ref} hidden />
                    <label for="switch-mode" className="switch-mode"></label>
                    <a href="#" className="notification">
                        <i className='bx bxs-bell' ></i>
                        <span className="num">8</span>
                    </a>
                    <a href="#" className="profile">
                        <img src="img/people.png" />
                    </a>
                </nav>
                <main>
                    <div className="head-title">
                        <div className="left">
                            <h1>Dashboard</h1>
                            <ul className="breadcrumb">
                                <li>
                                    <a href="#">Dashboard</a>
                                </li>
                                <li><i className='bx bx-chevron-right' ></i></li>
                                <li>
                                    <Link to="/">Home</Link>
                                    {/* <Link to="/" className="nav-link text-dark">Pricing</Link> */}
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-8" style={{ marginLeft: "-15px" }}>
                            <ul style={{ listStyleType: "none" }}>
                                <li className='user mt-2'>
                                    <p className='pt-3'>User Status: Starter<a href='#' style={{ backgroundColor: "#28a745", color: "white", padding: "15px 15px", fontWeight: "00", borderRadius: "12px" }}><br />"Upgrade to Reseller"</a></p>
                                </li>
                                {/* <li className='copy'><a className="dropdown-item py-2 px-4" href="#">Airtime</a></li> */}
                                <li className='copy py-3'>
                                    <span className='mx-2 '>Your Referral link:<a href='https://subme.com.ng/register?ref=f126dd'>https://subme.com.ng/register?ref=f126dd</a></span>
                                    <a className=' bg-danger text-white' style={{ fontSize: "19px" }} onClick={() => navigator.clipboard.writeText('https://subme.com.ng/register?ref=f126dd')}>copy</a><span className='refer' style={{ fontSize: "28px" }}>View Referrals |</span>
                                    {/* <span className='view' style={{ textDecoration: "none", fontSize: "28px" }}>View Referrals  |<i className='fa fa-money-check'></i></span> */}
                                </li>
                            </ul>
                        </div>
                        <a href="#" className="btn-download">
                            <i className='bx bxs-cloud-download' ></i>
                            <span className="text">Download PDF</span>
                        </a>
                    </div>
                    <ul className="box-info">
                        <li>
                            <span className='one' >
                                <i className='fas fa-money-check text-white'></i>
                            </span>
                            <span className="text">
                                <p>E-wallet Balance</p>
                                <h3> ₦ 0</h3>
                                <p> e-Statement</p>

                                <a href='#' style={{ textDecoration: "none", fontSize: "14px" }}>
                                    View-Purchases
                                </a>
                            </span>
                        </li>
                        <li>
                            <span className='two'>
                                <i className='fas fa-money-check text-white' ></i>
                            </span>
                            <span className="text">
                                <h3>Andriod App</h3>
                                <p>
                                    <a href='#' style={{ textDecoration: "none", color: "#007bff" }}>
                                        Download Now!
                                    </a>
                                </p>
                            </span>
                        </li>
                        <li>
                            <span className='three'>
                                <i className='fas fa-mobile' ></i>
                            </span>
                            <span className="text">
                                <h3>Deposit Money</h3>
                                <p>
                                    <a href='#' style={{ textDecoration: "none", color: "#007bff" }}>
                                        Click here
                                    </a>
                                </p>
                            </span>
                        </li>
                        <li>
                            <span className='four'>
                                <i className='fas fa-mobile' ></i>
                            </span>
                            <span className="text">
                                <h3>Do More</h3>
                                <p>
                                    <a href='#' style={{ textDecoration: "none", color: "#007bff" }}>
                                        Loading...
                                    </a>
                                </p>
                            </span>
                        </li>
                    </ul>
                    <div className="container4">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="info info-box">
                                    <ul className='side my-5'>
                                        <li>
                                            <i className='fas fa-wifi pe-5 text-white'></i>
                                            <h3 className='text-white'>Buy Data Bundle</h3>
                                            <a href="#" className='text-white ms-5'>
                                                Click Here
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="info1 info-box">
                                    <ul className='side py-5 my-5'>
                                        <li>
                                            <i className='fas fa-phone-volume  pe-5 text-white'></i>
                                            <h3 className='text-white'>Buy Airtime</h3>
                                            <a href="#" className='text-white  ms-5'>
                                                Click Here
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="info2 info-box">
                                    <ul className='side  py-5 my-5'>
                                        <li>
                                            <i className='fas fa-phone-volume  pe-5 text-white'></i>
                                            <h3 className='text-white'>TV Subscription</h3>
                                            <a href="#" className='text-white  ms-5'>
                                                Click Here
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="info3 info-box">
                                    <ul className='side  py-5 my-5'>
                                        <li>
                                            <i className='fas fa-tv pe-3 text-white'></i>
                                            <h3 className='text-white'>Buy Airtime</h3>
                                            <a href="#" className='text-white  ms-5'>
                                                Click Here
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="info4 info-box">
                                    <ul className='side  py-5 my-5'>
                                        <li>
                                            <i className='far fa-lightbulb pe-3 text-white'></i>
                                            <h3 className='text-white'>Electricity Bill</h3>
                                            <a href="#" className='text-white  ms-5'>
                                                Click Here
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="info5 info-box">
                                    <ul className='side  py-5 my-5'>
                                        <li>
                                            <i className='fas fa-key pe-3 text-white'></i>
                                            <h3 className='text-white'> Buy Waec Pin</h3>
                                            <a href="#" className='text-white  ms-5'>
                                                Click Here
                                            </a>

                                        </li>
                                    </ul>
                                </div>
                                <div className="info6 info-box">
                                    <ul className='side  py-5 my-5'>
                                        <li>
                                            <i className='fas fa-key pe-3 text-white '></i>
                                            <h3 className='text-white'>
                                                Buy Neco Token
                                            </h3>
                                            <a href="#" className='text-white ms-5'>
                                                Click Here
                                            </a>

                                        </li>

                                    </ul>
                                </div>
                                <div className="info7 info-box">
                                    <ul className='side  py-5 my-5'>
                                        <li>
                                            <i className='fas fa-key pe-3 text-white'></i>
                                            <h3 className='text-white'> Buy Nabteb Pin</h3>
                                            <a href="#" className='text-white ms-5'>
                                                Click Here
                                            </a>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className='' style={{ marginLeft: "43px" }}>
                                    <div className="card-header">
                                        <h3 className='card-title'>Recent Transactions</h3>
                                        <span className='adjust'>
                                            <button className='btn btn-tool' data-bs-toggle="#ope" aria-expanded="false" aria-controls='#ope'>
                                                <i className='fas fa-minus'></i>
                                            </button>
                                            <button className='btn btn-tool' data-card-widget="remove"><i className='fas fa-times'></i></button>
                                        </span>
                                    </div>
                                    <div style={{ overflowX: 'auto' }}>
                                        <div className="card-body ">
                                            <table id='#ope'>
                                                <thead>
                                                    <tr>
                                                        <th>S/N</th>
                                                        <th>Amount</th>
                                                        <th>Reference</th>
                                                        <th>Date</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <td>1</td>
                                                    <td>1000</td>
                                                    <td> MNFY|23|20230225082503|080478 </td>
                                                    <td> 2023-02-25 08:25:08.0</td>
                                                    <td><span className='badge badge-success'>Successful</span></td>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className='now'>
                                            <a href="" className='btn btn-sm btn-secondary'>View All Transactions</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </section >

        </>
    )
}

export default Dashboardnew