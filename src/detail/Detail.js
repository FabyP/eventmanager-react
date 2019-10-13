// Detail.js
import React, { Component } from "react";
import events from "../data/events.json";
import "./Detail.css";


//Web Components
import "@ui5/webcomponents/dist/Title";
import "@ui5/webcomponents/dist/Label";

class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = { events };
    }

    render() {
        let id = this.props.match.params.id;
        let event = events[id - 1];
        return (
            <div className="app-content column-container">
                {/*Infos*/}
                <div className="column column-left">
                    <ui5-title level="H3">{event.name}</ui5-title>
                    <br />
                    <ui5-label for="date" wrap>Datum</ui5-label>
                    <p className="detail-atrribute" id="date">{event.date}, {event.time} Uhr</p>
                    <ui5-label for="location" wrap>Ort</ui5-label>
                    <p className="detail-atrribute" id="location">{event.location}</p>
                    <ui5-label for="host" wrap>Veranstalter</ui5-label>
                    <p className="detail-atrribute" id="host">{event.host}</p>
                    <ui5-label for="description" wrap>Beschreibung</ui5-label>
                    <p className="detail-atrribute" id="description">{event.description}</p>
                </div>

                {/*Bild*/}
                <div className="column column-right">
                    <img className="event-img" src={process.env.PUBLIC_URL + event.img} alt={event.alt} />
                </div>
            </div>

        )
    }
}

export default Detail;