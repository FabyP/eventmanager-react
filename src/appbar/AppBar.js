// AppBar.js
import React, { Component } from "react";
import profile from "../img/profile.jpg";
import logo from "../img/favicon.svg";

import { setTheme } from "@ui5/webcomponents-base/src/Theming";
import "@ui5/webcomponents/dist/ThemePropertiesProvider";


class AppBar extends Component {

    constructor(props) {
        super(props);
        this.appBar = React.createRef();
        this.themeSwitch = React.createRef();
    }

    // Bind for the ui5-shellbar profileClick event
    componentDidMount() {
        this.appBar.current.addEventListener("profileClick", this.onProfileClicked);
        this.themeSwitch.current.addEventListener("change", this.onThemeSwitchPressed.bind(this));
    }

    // Open the ui5-popover
    onProfileClicked(event) {
        window["profile-popover"].openBy(event.detail.targetRef);
    }
    
    // Use the setTheme method to switch to HCB theme
    onThemeSwitchPressed(event) {
        setTheme(event.target.checked ? "sap_belize_hcb" : "sap_fiori_3");
    }

    render() {
        return (
            <div className="app-bar" role="banner">
                <ui5-shellbar
                    ref={this.appBar}
                    primary-title="Stadtverwaltung"
                    show-co-pilot
                    profile={profile}
                    logo={logo}>
                </ui5-shellbar>

                <ui5-popover
                    id="profile-popover"
                    hide-header
                    placement-type="Bottom"
                    horizontal-align="Right">
                    <div className="profile-header centered">
                        <img src={profile} alt="Profilbild von Fabienne Pipping" className="profile-img" />
                        <ui5-title level="3">Fabienne Pipping</ui5-title>
                        <ui5-label>Bachelorand</ui5-label>
                    </div>
                    <div className="profile-content">
                        <ui5-list separators="None">
                            <ui5-li-custom type="Inactive">
                                <div className="profile-hcb-switch centered">
                                    <ui5-li icon="sap-icon://palette" type="Inactive">High Contrast Black</ui5-li>
                                    <ui5-switch ref={this.themeSwitch}></ui5-switch>
                                </div>
                            </ui5-li-custom>
                            <ui5-li icon="sap-icon://settings">Settings</ui5-li>
                            <ui5-li icon="sap-icon://sys-help">Help</ui5-li>
                            <ui5-li icon="sap-icon://log">Sign out</ui5-li>
                        </ui5-list>
                    </div>
                </ui5-popover>
            </div>
        );
    }
}

export default AppBar;