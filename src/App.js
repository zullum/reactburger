import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = props => {
    const [personsState, setPersonsState] = useState({
        persons: [
            { name: "Max", age: 28 },
            { name: "Manu", age: 25 },
            { name: "Pete", age: 36 }
        ]
    });

    const switchNameHandler = () => {
        console.log("Was clicked!");
        // DON'T DO THIS!!! this.state.persons[0].name = "Maaximilian";
        setPersonsState({
            persons: [
                { name: "Maximilian", age: 28 },
                { name: "Manu", age: 25 },
                { name: "Pete", age: 100 }
            ]
        });
    };

    const [otherState, setOtherState] = useState("some other val");

    console.log(personsState, otherState);

    return (
        <div className="App">
            <h1>Hi, I am a react App!</h1>
            <p>This is really working</p>
            <button onClick={switchNameHandler} className="btn btn-success">
                Swith name
            </button>
            <Person
                name={personsState.persons[0].name}
                age={personsState.persons[0].age}
            />
            <Person
                name={personsState.persons[1].name}
                age={personsState.persons[1].age}
            />
            <Person
                name={personsState.persons[2].name}
                age={personsState.persons[2].age}
            />
        </div>
    );
};

export default app;
