import React from "react"
import Navbar from "./components/Navbar"
import PlaceCard from "./components/PlaceCard"
import journalData from "./journalData"
import "./style.css"

export default function App() {
    const cards = journalData.map(card => {
        return <PlaceCard key = {card.id} {...card} />
    })

    return (
        <>
            <Navbar />
            <main>
                {cards}
            </main> 
        </>
    )
}