import React, { Component } from "react";

import "./UserInput.css";

export default class UserInput extends Component {
    render() {
        const style = {
            backgroundColor: "linear-gradient(60deg, #ffa726, #fb8c00)"
        };
        return (
            <div className="UserInput" style={style}>
                <input
                    onChange={this.props.changeusername}
                    type="text"
                    value={this.props.username}
                />
            </div>
        );
    }
}
