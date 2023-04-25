import React, { useState } from 'react'
import {
    FaBars,

} from "react-icons/fa"
// import { NavLink } from 'react-router-dom'
const Sidebar = () => {
    const [isOpen, setisOpen] = useState(false)
    const toggleMenu = () => setisOpen(!isOpen)

    return (
        <>
            <div className='container2'>
                <div className="sidebar" style={{ width: isOpen ? "280px" : "50px" }}>
                    <div className="top_section">
                        <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Logo</h1>
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
        </>
    )
}
export default Sidebar