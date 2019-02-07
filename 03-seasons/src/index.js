import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render(){
        var that = this;
        window.navigator.geolocation.getCurrentPosition(
            (position) => that.setState({"latitude": position.coords.latitude}),
            (err) => console.log(err)
        )
        return (
            <h1>...{this.state.latitude}</h1>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));