import React from 'react'
import { useId } from 'react';
const Dashboard = () => {
    const mySidenav = useId()
    const main = useId()
    function openNav() {
        // document.getElementById("mySidenav").style.width = "250px";
        // mySidenav
        // document.getElementById("main").style.marginLeft = "250px";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
    return (
        <>

            <div id={mySidenav} className="sidenav">
                <a href="javascript:void(0)" className="closebtn" onClick={() => closeNav()}>&times;</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>

            <div id={main}>
                <h2>Sidenav Push Example</h2>
                <p>Click on the element below to open the side navigation menu, and push this content to the right.</p>
                <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={() => openNav()}>&#9776; open</span>
            </div>

        </>
    )
}

export default Dashboard