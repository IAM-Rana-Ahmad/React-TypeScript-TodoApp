import React, { useState } from 'react';
import "./Navbar.css";
interface NavProps{
    toogle:Boolean,
    handleToogle:()=>void;
}

const Navbar: React.FC<NavProps> = ({toogle, handleToogle}) => {
  
  
    const navLinks=[
        {name:"Home"},
        {name:"About"},
        {name:"Contact"},
        {name:"Blog"}
    ]
    return (
        <div className="container-fluid" style={{
            backgroundColor:toogle? "#080B2F":"orange"
        }} >
            <nav className="navbar container navbar-expand-lg  p-3">
                <div className="container-fluid">
                    <a className={`navbar-brand ${toogle?"text-light":"text-dark"}`} href="/">Navbar</a>
                    <button className="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className={`navbar-nav me-auto mb-2 mb-lg-0 `}>
                           {navLinks?.map((item,i)=>{
                            return(
                                <li className="nav-item mx-3 mx-sm-0" key={i}>
                                <a className={`nav-link active ${toogle?"text-light":"text-dark"}`} aria-current="page" href="/">{item.name}</a>
                            </li>
                            )
                           })}
                          
                        </ul>


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
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
