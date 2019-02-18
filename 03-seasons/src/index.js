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
            if(this.state.errorMessage && ) {

            }
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));