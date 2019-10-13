import React, { Component } from "react";

class FilterBar extends Component {
    constructor(props) {
        super(props);
        this.dialog = React.createRef();
        this.nameInput = React.createRef();
        this.dateInput = React.createRef();
        this.timeInput = React.createRef();
        this.locationInput = React.createRef();
        this.imgInput = React.createRef();
        this.altInput = React.createRef();
        this.descriptionInput = React.createRef();
        this.hostInput = React.createRef();
        this.categoryInput = React.createRef();
        this.searchInput = React.createRef();
    }

    componentDidMount() {
        this.searchInput.current.addEventListener('input', event => {
            const value = event.target.value;

            this.props.filter(value);
        });
    }

    openDialog() {
        this.dialog.current.open();
    }

    createEvent() {
        const newEntry = {
            name: this.nameInput.current.value,
            date: this.dateInput.current.value,
            time: this.timeInput.current.value,
            location: this.locationInput.current.value,
            img: this.imgInput.current.value,
            alt: this.altInput.current.value,
            description: this.descriptionInput.current.value,
            host: this.hostInput.current.value,
            category: [].filter.call(this.categoryInput.current.children, el => el.selected)[0].textContent
        }

        this.props.createEvent(newEntry);
        this.dialog.current.close();
    }

    closeDialog() {
        this.dialog.current.close();
    }

    render() {
        return (
            <div className="events-page-filter-bar" role="region" aria-label="FilterBar">
                <ui5-title level="H3">Events</ui5-title>

                <div className="events-page-filter-bar-actions">
                    <form role="search">
                    <ui5-label class="hidden" for="searchInput">Suche</ui5-label>
                    <ui5-input id="searchInput" aria-label="Suche" class="events-page-searchfield" placeholder="Suche" ref={this.searchInput}>
                        <ui5-icon id="searchIcon" slot="icon" src="sap-icon://search" aria-hidden="true"></ui5-icon>
                    </ui5-input>
                    </form>

                    <ui5-button role="button" onClick={this.openDialog.bind(this)} design="Transparent" title="Event erstellen" aria-label="Event erstellen">Erstellen</ui5-button>
                    <ui5-button class="events-page-filter-bar-overflow" onClick={this.props.sortDesc.bind(this)} icon="sap-icon://sort-descending" design="Transparent" title="Absteigend nach Datum sortieren" aria-label="Absteigend nach Datum sortieren">
                        <span class="hidden">Absteigend nach Datum sortieren</span>
                    </ui5-button>
                    <ui5-button class="events-page-filter-bar-overflow" onClick={this.props.sortAsc.bind(this)} icon="sap-icon://sort-ascending" design="Transparent" title="Aufsteigend nach Datum sortieren" aria-label="Aufsteigend nach Datum sortieren">
                        <span class="hidden">Aufsteigend nach Datum sortieren</span>
                    </ui5-button>
                </div>

                <ui5-dialog header-text="Neues Event erstellen" ref={this.dialog}>
                    <div className="dialog-content">

                        <div className="dialog-section">
                            <ui5-label for="nameInput">Eventname:</ui5-label>
                            <ui5-input id="nameInput" ref={this.nameInput}></ui5-input>
                        </div>

                        <div className="dialog-section">
                            <ui5-label for="dateInput">Datum:</ui5-label>
                            <ui5-datepicker id="dateInput" ref={this.dateInput}></ui5-datepicker>
                        </div>

                        <div className="dialog-section">
                            <ui5-label for="timeInput">Uhrzeit:</ui5-label>
                            <ui5-input id="timeInput" ref={this.timeInput}></ui5-input>
                        </div>

                        <div className="dialog-section">
                            <ui5-label for="locationInput">Ort:</ui5-label>
                            <ui5-textarea id="locationInput" ref={this.locationInput} show-exceeded-text max-length="100"></ui5-textarea>
                        </div>

                        <div className="dialog-section">
                            <ui5-label for="descriptionInput">Beschreibung:</ui5-label>
                            <ui5-textarea id="descriptionInput" ref={this.descriptionInput} show-exceeded-text max-length="100"></ui5-textarea>
                        </div>

                        <div className="dialog-section">
                            <ui5-label for="categoryInput">Kategorie:</ui5-label>

                            <ui5-select id="categoryInput" ref={this.categoryInput}>
                                <ui5-option>Party</ui5-option>
                                <ui5-option>Familie</ui5-option>
                                <ui5-option>Markt</ui5-option>
                                <ui5-option>Sonstiges</ui5-option>
                            </ui5-select>
                        </div>

                        <div className="dialog-section">
                            <ui5-label for="imgInput">Bild URL:</ui5-label>
                            <ui5-input id="imgInput" ref={this.imgInput} type="URL" placeholder="https://..."></ui5-input>
                        </div>

                        <div className="dialog-section">
                            <ui5-label for="altInput">Bildbeschreibung:</ui5-label>
                            <ui5-textarea id="altInput" ref={this.altInput} show-exceeded-text max-length="100"></ui5-textarea>
                        </div>

                        <div className="dialog-section">
                            <ui5-label for="hostInput">Veranstalter:</ui5-label>
                            <ui5-input id="hostInput" ref={this.hostInput}></ui5-input>
                        </div>

                    </div>

                    <div slot="footer" className="dialog-footer">
                        <ui5-button design="Emphasized" onClick={this.createEvent.bind(this)}>OK</ui5-button>
                        <ui5-button onClick={this.closeDialog.bind(this)}>Abbrechen</ui5-button>
                    </div>
                </ui5-dialog>

            </div>
        )
    }
}

export default FilterBar;