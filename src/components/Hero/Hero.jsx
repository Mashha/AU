import React from 'react'
import "./hero.css"

function Hero() {
    return (
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
    )
}

export default Hero