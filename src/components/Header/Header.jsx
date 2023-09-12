import React, { useState } from 'react'
import "./header.css"
import logo from "../../assets/logo.png"
import { NavLink } from 'react-router-dom'

function Header() {

    const [showNav, setShowNav] = useState(false)
    const [showList, setShowList] = useState(false)

    function handleClick() {
        setShowNav(!showNav)
    }

    return (
        <>
            <div className="nav">
                <NavLink to="/AU/" className="logo">
                    <img src={logo} alt="" />
                </NavLink>
                <div className="menu-container">
                    <div className="menu-button" onClick={handleClick}>
                        {showNav ? (<span><i className="fa-solid fa-xmark"></i></span>)
                            : (<span><i className="fa-solid fa-bars"></i></span>)}

                    </div>
                    <div className={showNav ? "nav-content show" : "nav-content"}>
                        <div className="flex">
                            <div className='nav-container closed'>
                                <div className="nav-container-inner" id='first'>
                                    <div className="menu-name">
                                        <NavLink to="/who-we-are" onClick={handleClick}>who we are</NavLink>
                                    </div>
                                    <div className="icon" id='iconOne'>
                                        <span>
                                            <i className="fa-solid fa-chevron-right"></i>
                                        </span>
                                    </div>
                                </div>
                                <ul className="list"></ul>
                            </div>
                            <div className='nav-container closed'>
                                <div className="nav-container-inner" id='sec'>
                                    <div className="menu-name">
                                        <NavLink to="/what-we-do" onClick={handleClick}>what we do</NavLink>
                                    </div>
                                    <div className="icon">
                                        {showList ? (<span><i className="fa-solid fa-angle-down"></i></span>) :
                                            (<span><i className="fa-solid fa-chevron-right"></i>
                                            </span>)}
                                    </div>
                                </div>
                                <ul className="list"></ul>
                            </div>
                            <div className='nav-container closed'>
                                <div className="nav-container-inner" id='third'>
                                    <div className="menu-name">
                                        <NavLink to="/issues" onClick={handleClick}>issues</NavLink>
                                    </div>
                                    <div className="icon">
                                        {showList ? (<span><i className="fa-solid fa-angle-down"></i></span>) :
                                            (<span><i className="fa-solid fa-chevron-right"></i>
                                            </span>)}
                                    </div>
                                </div>
                                <ul className={showList ? "list show" : "list"}>
                                    <li><a href="#">Meat</a></li>
                                    <li><a href="#">Dairy</a></li>
                                    <li><a href="#">Eggs</a></li>
                                    <li><a href="#">Fish</a></li>
                                </ul>
                            </div>
                            <div className='nav-container closed'>
                                <div className="nav-container-inner">
                                    <div className="menu-name">
                                        <NavLink to="/get-involved" onClick={handleClick}>get involved</NavLink>
                                    </div>
                                    <div className="icon">
                                        <span>
                                            <i className="fa-solid fa-chevron-right"></i>
                                        </span>
                                    </div>
                                </div>
                                <ul className="list"></ul>
                            </div>
                            <div className='nav-container closed'>
                                <div className="nav-container-inner">
                                    <div className="menu-name">
                                        <NavLink to="/resources" onClick={handleClick}>resources</NavLink>
                                    </div>
                                    <div className="icon">
                                        <span>
                                            <i className="fa-solid fa-chevron-right"></i>
                                        </span>
                                    </div>
                                </div>
                                <ul className="list"></ul>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='donate-btn'>donate</button>
            </div>
        </>
    )
}

export default Header