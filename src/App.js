import React from "react"
import Navbar from "./components/Navbar"
import PlaceCard from "./components/PlaceCard"
import journalData from "./journalData"
import "./style.css"

export default function App() {
    return (
        <>
            <Navbar />
            <section>
                <PlaceCard />
                <PlaceCard />
            </section> 
        </>
    )
}