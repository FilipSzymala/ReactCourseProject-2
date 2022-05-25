import React from "react"
import locationIcon from "../images/location-icon.svg"
export default function Navbar() {
    return (
        <div className="card">
            <div className="card__background"></div>
            <div className="card__text">
                <p className="text__location">
                    <img src={locationIcon} alt="location-icon"></img>
                    <span className="country-name">JAPAN</span>
                    <a href="#" className="google-maps-link">View on Google Maps</a>
                </p>
                <div className="text__info">
                    <h1>Mount Fuji</h1>
                    <b>12 Jan, 2021 - 24 Jan, 2021</b>
                    <p>
                        Mount Fuji is the tallest mountain in Japan, standing at 3,776
                        meters (12,380 feet). Mount Fuji is the single most popular tourist
                        site in Japan, for both Japanese and foreign tourists.
                    </p>
                </div>
            </div>
        </div>
    )
}