import React from "react"
import locationIcon from "../images/location-icon.svg"
export default function PlaceCard(props) {
    return (
        <div className="card">
            <div className="card__background"
                style={{
                    backgroundImage: `url(${props.imageUrl})`
                }}
            >
            </div>
            <div className="card__text">
                <p className="card__text__location">
                    <img src={locationIcon} alt="location-icon"></img>
                    <span className="country-name">{props.location}</span>
                    <a href={props.googleMapsUrl} className="google-maps-link">View on Google Maps</a>
                </p>
                <div className="card__text__info">
                    <h1>{props.title}</h1>
                    <strong>{props.startDate} - {props.endDate}</strong>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}