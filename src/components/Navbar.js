import React from "react"
import logo from "../images/logo.svg"

export default function Navbar() {
    return (
        <nav>
                <div className="logo">
                <img 
                    src={logo}
                    alt="journal-logo"
                />
                my travel journal.
            </div>
        </nav>
    )
}