import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            lat: null,
            lng: null
        };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            },
            err => {
                this.setState({
                    errorMessage: err.message
                });
            }
        )
    }
    render(){
        return (
            <div>
                <pre>Latitude: {this.state.lat}</pre>
                <pre>Longitude: {this.state.lng}</pre>
                <pre>Error: {this.state.errorMessage}</pre>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));