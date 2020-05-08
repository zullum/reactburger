import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
    state = {
        persons: [
            { name: "Max", age: 28 },
            { name: "Manu", age: 29 },
            { name: "Stephanie", age: 26 }
        ],
        otherState: "some other value",
        username: "zullum"
    };

    switchNameHandler = newName => {
        // console.log('Was clicked!');
        // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
        this.setState({
            persons: [
                { name: newName, age: 28 },
                { name: "Manu", age: 29 },
                { name: "Stephanie", age: 27 }
            ]
        });
    };

    nameChangeHandler = (index) => (event) => {

        let personsCopy = JSON.parse(JSON.stringify(this.state.persons));
        personsCopy[index].name = event.target.value;

        this.setState({
            persons: personsCopy
        });
        console.log(index);
        console.log(event);
    };

    usernameChangeHandler = event => {
        this.setState({
            username: event.target.value
        });
    };

    render() {
        const style = {
            backgroundColor: "white",
            font: "inherit",
            border: "1px solid blue",
            padding: "8px",
            cursor: "pointer",
            color: "#ddd"
        };

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button
                    style={style}
                    onClick={() => this.switchNameHandler("Maximilian!!")}
                    className="btn btn-success"
                >
                    Switch Name
                </button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    changed={this.nameChangeHandler(0)}
                />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, "Max!")}
                    changed={this.nameChangeHandler(1)}
                >
                    My Hobbies: Racing
                </Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                    changed={this.nameChangeHandler(2)}
                />
                <UserInput
                    username={this.state.username}
                    changeusername={this.usernameChangeHandler}
                />
                <UserOutput username={this.state.username} />
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;
