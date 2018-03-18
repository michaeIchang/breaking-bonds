import React from 'react';
import '../Clock.css';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString().split(",")[1]
        };

    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
            time: new Date().toLocaleString().split(",")[1],
        });
    }
    render () {
        return (
            <p className="App-clock">
                {this.state.time}
            </p>
        );
    }
}

export default Clock;
