import React, { useState } from 'react'
import "./header.css"
import logo from "../../assets/logo.png"

function Header() {

    const [showNav, setShowNav] = useState(false)

    function handleClick() {
        setShowNav(!showNav)
    }
    return (
        <>
            <div className="nav">
                <a href="#" className="logo">
                    <img src={logo} alt="" />
                </a>
                <div className="menu-container">
                    <div className="menu-button" onClick={handleClick}>
                        {showNav ? (<span><i class="fa-solid fa-xmark"></i></span>)
                            : (<span><i class="fa-solid fa-bars"></i></span>)}

                    </div>
                    <div className={showNav ? "nav-content show" : "nav-content"}>
                        <div className="flex">
                            <div className='nav-container closed'>
                                <div className="nav-container-inner">
                                    <div className="menu-name">
                                        <a href="#">who we are</a>
                                    </div>
                                    <div className="icon">
                                        <span>
                                            <i class="fa-solid fa-chevron-right"></i>
                                        </span>
                                    </div>
                                </div>
                                <ul className="list"></ul>
                            </div>
                            <div className='nav-container closed'>
                                <div className="nav-container-inner">
                                    <div className="menu-name">
                                        <a href="#">what we do</a>
                                    </div>
                                    <div className="icon">
                                        <span>
                                            <i class="fa-solid fa-chevron-right"></i>
                                        </span>
                                    </div>
                                </div>
                                <ul className="list"></ul>
                            </div>
                            <div className='nav-container closed'>
                                <div className="nav-container-inner">
                                    <div className="menu-name">
                                        <a href="#">issues</a>
                                    </div>
                                    <div className="icon">
                                        <span>
                                            <i class="fa-solid fa-chevron-right"></i>
                                        </span>
                                    </div>
                                </div>
                                <ul className="list"></ul>
                            </div>
                            <div className='nav-container closed'>
                                <div className="nav-container-inner">
                                    <div className="menu-name">
                                        <a href="#">get involved</a>
                                    </div>
                                    <div className="icon">
                                        <span>
                                            <i class="fa-solid fa-chevron-right"></i>
                                        </span>
                                    </div>
                                </div>
                                <ul className="list"></ul>
                            </div>
                            <div className='nav-container closed'>
                                <div className="nav-container-inner">
                                    <div className="menu-name">
                                        <a href="#">resources</a>
                                    </div>
                                    <div className="icon">
                                        <span>
                                            <i class="fa-solid fa-chevron-right"></i>
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
            <div className="hero-section">
                <div className="overlay">
                    <div className="text" data-text="compassion">
                        <h1>choose <span>compassion</span></h1>
                        <p>Help us put a stop to animal abuse and suffering</p>
                        <div className="cta">
                            <button>Why Vegan?</button>
                            <button>Donate</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header