import React, { Component } from "react";

import "./UserOutput.css";

export default class UserOutput extends Component {
    render() {
        return (
            <div className="UserOutput">
                <p>Hello from output</p>
                <p>My username is {this.props.username}</p>
            </div>
        );
    }
}
