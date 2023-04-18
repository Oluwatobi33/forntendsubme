import React from 'react'

const Sidebar = () => {
    return (
        <>

            <div className="navigation">
                <p className='mb-5 ms-5'><a href="" className='py-4 w-100' style={{ borderBottom: "5px solid #fff" }}><img src='https://subme.com.ng/img/subme_logo.jpeg' className='img-responsive img-fluid w-80 rounded rounded-circle' /><span className='brand-text font-weight-bold fs-5 text-white'>Subme.</span></a></p>
                <h5><a href="" className='text-white fs-4'>Welcome</a></h5>
                <ul>
                    <li>
                        <a>
                            <span className="icon">
                                <i className=" fa fa-tachometer" aria-hidden="true"></i>
                            </span>
                            <span className="title text-uppercase mt-5">
                                Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span className="icon">
                                <i className="fa fa-level-up" aria-hidden="true"></i>
                            </span>
                            <span className="title">
                                Become a Reseller
                            </span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span className="icon">
                                <i className="fa fa-history" aria-hidden="true"></i>
                            </span>
                            <span className="title">
                                e-Statement
                            </span>
                        </a>
                    </li>
                    <li>

                        <a>
                            <span className="icon">
                                <i className="fa fa-history" aria-hidden="true"></i>
                            </span>
                            <span className="title text-uppercase">
                                Payment History
                            </span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span className="icon">
                                <i className="fa fa-eye" aria-hidden="true"></i>
                            </span>
                            <span className="title text-uppercase">
                                View Referrals</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span className="icon">
                                <i className="fa fa-history" aria-hidden="true"></i>
                            </span>
                            <span className="title text-uppercase">
                                View Activity</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span className="icon">
                                <i className="fa fa-code" aria-hidden="true"></i>
                            </span>
                            <span className="title text-uppercase">API Documentation</span>
                        </a>
                    </li>
                    <li className='nav-header'> <a href="">SELF-SERVICE</a></li>
                    <li>
                        <a>
                            <span className="icon">
                                <i className="fa fa-user" aria-hidden="true"></i>
                            </span>
                            <span className="title text-uppercase">
                                Verify Data/Airtime Status
                            </span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span className="icon">
                                <i className="fa fa-comment" aria-hidden="true"></i>
                            </span>
                            <span className="title text-uppercase">
                                Resolve Paystack Funding</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span className="icon">
                                <i className="fa fa-comment" aria-hidden="true"></i>
                            </span>
                            <span className="title text-uppercase">Resolve Monnify Funding</span>
                        </a>
                    </li>
                    <li className='nav-header'>PRODUCTS</li>
                    <li>
                        <a>
                            <span className="icon">
                                <i className="fa fa-wifi" aria-hidden="true"></i>
                            </span>
                            <span className="title text-uppercase">
                                Data Bundle</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span className="icon">
                                <i className="fa fa-wifi" aria-hidden="true"></i>
                            </span>
                            <span className="title text-uppercase">
                                Airtime
                            </span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span className="icon">
                                <i className="fa fa-tv" aria-hidden="true"></i>
                            </span>
                            <span className="title text-uppercase">
                                TV Subscription</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span className="icon">
                                <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
                            </span>
                            <span className="title text-uppercase">
                                Bill Payment</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span className="icon">
                                <i className="fa fa-key" aria-hidden="true"></i>
                            </span>
                            <span className="title text-uppercase">
                                Waec Pin</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span className="icon">
                                <i className="fa fa-key" aria-hidden="true"></i>
                            </span>
                            <span className="title text-uppercase">Neco Token</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span className="icon">
                                <i className="fa fa-key" aria-hidden="true"></i>
                            </span>
                            <span className="title text-uppercase">
                                Nabteb Pin</span>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar