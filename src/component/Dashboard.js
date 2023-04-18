import React from 'react'
// import { useId } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
const Dashboard = () => {
    const toggleMenu = () => {
        let navigation = document.querySelector(".navigation");
        let container = document.querySelector(".container");
        let toggle = document.querySelector(".toggle");
        container.classList.toggle("active");

        navigation.classList.toggle("active");
        toggle.classList.toggle("active");
    };
    return (
        <>
            <Sidebar />
            <div className="toggle mb-4" onClick={toggleMenu}></div>
            <section className=" bg-white shadow shadow-md">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-md-11">
                            <div className='float-start'>
                                <ul className='dash' style={{ listStyleType: "none", display: "inline-block" }}>
                                    <li>Dashboard</li>
                                    <li>Activity</li>
                                </ul>
                                <input type="text" placeholder="search" required
                                    style={{ padding: '9px 34px', border: '1px solid gainsboro', backgroundColor: "#ced4da" }} className="mt-3 mb-4" />
                                <i class="fa fa-search fs-5" style={{ position: "relative", left: "-23px" }}></i>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-1 float-end">
                            <div className='float-end'>
                                <ul className='dash mt-4' style={{ listStyleType: "none", display: "inline-block" }}>
                                    <li className='position-relative'><i className='fa fa-bell fs-5'><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                                        23+
                                        <span class="visually-hidden">unread messages</span>
                                    </span></i></li>
                                    <li className="nav-item px-3 dropdown">
                                        <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><li> <i className='fa fa-user text-dark'></i></li></a>
                                        <ul className="dropdown-menu">
                                            <Link to="/register"> <li><a className="dropdown-item py-2 px-4" href="#">Update Profile</a></li></Link>
                                            <Link to="/signin"><li><a className="dropdown-item py-2 px-4" href="#">Change Password</a></li></Link>
                                            <Link to="/signin"><li><a className="dropdown-item py-2 px-4" href="#">
                                                Logout</a></li></Link>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container-fluid mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <span><a style={{ fontSize: "34px" }}>User Dashboard</a> </span>
                            <ul className='user' style={{ listStyleType: "none" }}>
                                <li>
                                    <span> User Status: Starter<a href='#' style={{ backgroundColor: "#28a745", color: "white", padding: "23px 9px" }}>Upgrade to Reseller</a></span>
                                </li>

                                <li><a href="https://subme.com.ng/register?ref=f126dd" onClick={() => navigator.clipboard.writeText('https://subme.com.ng/register?ref=f126dd')}>copy</a><span className="badge badge-danger copybtn" style={{ fontSize: "11px" }}></span></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul className='user' >
                                <li>
                                    <span>Your Referral link:<a href='https://subme.com.ng/register?ref=f126dd'>https://subme.com.ng/register?ref=f126dd</a></span>
                                </li>
                            </ul>
                            <ul className='user' style={{ listStyleType: "none" }}>
                                <li>
                                    <span><a href="" style={{ textDecoration: "none", fontSize: "14px" }}>View Referrals</a> <i className='fa fa-money-check'></i></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div >
            </div >
            <div className="container-fluid " style={{ width: "75vw" }} >
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="sm1">
                            <div className="row">
                                <div className="col-md-6">
                                    <span className='py-5'><i className='fas fa-money-check' style={{ fontSize: "65px", height: "150px", padding: "28px 25px", backgroundColor: "#28a745", borderRadius: "10px" }} ></i></span>
                                </div>
                                <div className="col-md-6">
                                    <p>E-wallet Balance</p>
                                    <span className='info-box-number text-success float-start'>
                                        ₦ 0
                                    </span>
                                    <span><a href='#' className='text-end' style={{ textDecoration: "none", fontSize: "19px", paddingLeft: "25px" }}>
                                        e-Statement
                                    </a></span>
                                    <h4>
                                        <a href='#' style={{ textDecoration: "none", fontSize: "14px" }}>
                                            View-Purchases
                                        </a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="sm">
                            <div className="row">
                                <div className="col-md-6">
                                    <span className='py-5'><i className='fas fa-money-check' style={{ fontSize: "65px", height: "150px", padding: "28px 25px", backgroundColor: "#dc3545", borderRadius: "10px" }} ></i></span>
                                </div>
                                <div className="col-md-6">
                                    <span>Deposit Money</span>
                                    <p>
                                        <a href='#' style={{ textDecoration: "none", color: "#007bff" }}>
                                            Click here
                                        </a>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="sm">
                            <div className="row">
                                <div className="col-md-6">
                                    <span className='py-5'><i className='fas fa-mobile' style={{ fontSize: "65px", height: "150px", padding: "28px 25px", backgroundColor: "#28a745", borderRadius: "10px" }} ></i></span>
                                </div>
                                <div className="col-md-6">
                                    <span>Andriod App</span>
                                    <p>
                                        <a href='#' style={{ textDecoration: "none", color: "#007bff" }}>
                                            Download Now!
                                        </a>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="sm">
                            <div className="row">
                                <div className="col-md-6">
                                    <span className='py-5'><i className='fas fa-level-up-alt' style={{ fontSize: "65px", height: "150px", padding: "28px 25px", backgroundColor: "#ffc107", borderRadius: "10px" }} ></i></span>
                                </div>
                                <div className="col-md-6">
                                    <span>Do More</span>
                                    <p>
                                        <a href='#' style={{ textDecoration: "none", color: "#007bff" }}>
                                            Loading...
                                        </a>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid " style={{ width: "75vw" }}>
                <div className="row">
                    <div className="col-md-4">
                        <div className="info info-box py-5">
                            <span className='info-box-icon'><i className='fas fa-wifi ps-3 text-white'></i></span>
                            <span className='buy '>Buy Data Bundle</span>
                            <span className='pull-end'><a href="#" className='text-white'>
                                Click Here
                            </a>
                            </span>
                        </div>
                        <div className="info1 info-box py-5">
                            <span className='info-box-icon'><i className='fas fa-phone-volume ps-3 text-white'></i></span>
                            <span className='buy '>
                                Buy Airtime</span>
                            <span className='pull-end'><a href="#" className='text-white'>
                                Click Here
                            </a>
                            </span>
                        </div>
                        <div className="info2 info-box py-5">
                            <span className='info-box-icon'><i className=' fas fa-signal ps-3 text-white'></i></span>
                            <span className='buy '>Buy Data Card</span>
                            <span className='pull-end'><a href="#" className='text-white'>
                                Click Here
                            </a>
                            </span>
                        </div>
                        <div className="info3 info-box py-5">
                            <span className='info-box-icon'><i className='fas fa-tv ps-3 text-white'></i></span>
                            <span className='buy '>TV Subscription</span>
                            <span className='pull-end'><a href="#" className='text-white'>
                                Click Here
                            </a>
                            </span>
                        </div>
                        <div className="info4 info-box py-5">
                            <span className='info-box-icon'><i className='far fa-lightbulb ps-3 text-white'></i></span>
                            <span className='buy '>Electricity Bill</span>
                            <span className='pull-end'><a href="#" className='text-white'>
                                Click Here
                            </a>
                            </span>
                        </div>
                        <div className="info5 info-box py-5">
                            <span className='info-box-icon'><i className='fas fa-key ps-3 text-white'></i></span>
                            <span className='buy '> Buy Waec Pin</span>
                            <span className='pull-end'><a href="#" className='text-white'>
                                Click Here
                            </a>
                            </span>
                        </div>
                        <div className="info6 info-box py-5">
                            <span className='info-box-icon'><i className='fas fa-key ps-3 text-white'></i></span>
                            <span className='buy '>
                                Buy Neco Token</span>
                            <span className='pull-end'><a href="#" className='text-white'>
                                Click Here
                            </a>
                            </span>
                        </div>
                        <div className="info7 info-box py-5">
                            <span className='info-box-icon'><i className='fas fa-key ps-3 text-white'></i></span>
                            <span className='buy '>Buy Nabteb Pin</span>
                            <span className='pull-end'><a href="#" className='text-white'>
                                Click Here
                            </a>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="card col-lg-10 collapsed-card">
                                <div className="card-header">
                                    <h3 className='card-title'>Recent Transactions</h3>
                                    <span className='adjust'>
                                        <button className='btn btn-tool' data-bs-toggle="#ope" aria-expanded="false" aria-controls='#ope'>
                                            <i className='fas fa-minus'></i>
                                        </button>
                                        <button className='btn btn-tool' data-card-widget="remove"><i className='fas fa-times'></i></button>
                                    </span>
                                </div>
                                <div className="card-tool">

                                </div>
                                <div className="card-body">
                                    <div >
                                        <table className="table-responsive table table-md w-100" id='#ope'>
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
            </div>
        </>
    )
}

export default Dashboard