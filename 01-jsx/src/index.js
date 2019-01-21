import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    return (
        <div>
            <ul>
                <li className="hello">hello!</li>
            </ul>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#root"));