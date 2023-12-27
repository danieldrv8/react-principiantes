import React from "react";

const wishes = [
    {text: 'Travel to the moon', done: false},
    {text: 'Pay the gym', done: true},
    {text: 'Going to the gym', done: false}
]

const App = () => (
    <div>
        <h1>My wishlist app</h1>
        <fieldset>
            <legend>New wish</legend>
            <input placeholder="Enter your wish"/>
            <ul>
                {wishes.map(({text, done}, i) => (
                <li>
                    <label htmlFor={`wish${i}`}>
                        <input id={`wish${i}`} type="checkbox" checked={done}></input>
                        {text}
                    </label>
                    </li>
                ))}
            </ul>
            <button type="button" >Archive done</button>
        </fieldset>
    </div>
)

export default App;