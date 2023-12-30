import React, { useState } from 'react';
import "./Navbar.css";


// define the interface of the navProps
interface NavProps {
    toogle: Boolean,
    handleToogle: () => void;
}

const Navbar: React.FC<NavProps> = ({ toogle, handleToogle }) => {

    //   deine the array of objects for the navlinks
    const navLinks = [
        { name: "Home" },
        { name: "About" },
        { name: "Contact" },
        { name: "Blog" }
    ]

    return (


        // main div that wraps the whole navbar
        <div className="container-fluid" style={{
            backgroundColor: toogle ? "#080B2F" : "orange"
        }} >


            {/* main nav tag for the nav bar */}
            <nav className="navbar container navbar-expand-lg  p-3">
                <div className="container-fluid">

                    {/* Logo or title of the navbar */}
                    <a className={`navbar-brand fs-3 fw-bold ${toogle ? "text-light" : "text-dark"}`} href="/">TODO's_AREA</a>

                    {/* button for toogling the navbar */}
                    <button className="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">


                        {/* list of the navlinks */}
                        <ul className={`navbar-nav me-auto mb-2 mb-lg-0 `}>

                            {/* map over the navlinks array */}
                            {navLinks?.map((item, i) => {
                                return (
                                    <li className="nav-item mx-3 mx-sm-0" key={i}>
                                        <a className={`nav-link active ${toogle ? "text-light" : "text-dark"}`} aria-current="page" href="/">{item.name}</a>
                                    </li>
                                )
                            })}

                        </ul>
                        {/* list is end here */}

                        {/* div for the dark or light theme button */}
                        <div>
                            <label className="switch-button" >
                                <div className="switch-outer">
                                    <input onClick={handleToogle} id="switch" type="checkbox" />
                                    <div className="button">
                                        <span className="button-toggle"></span>
                                        <span className="button-indicator"></span>
                                    </div>
                                </div>
                            </label>
                        </div>
                        {/* div for the dark and light theme is end here */}
                    </div>
                </div>
            </nav>
            {/* nav tag is end here */}
        </div>
        // main div for the navbar is end here
    );
}

export default Navbar;
