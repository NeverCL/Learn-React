import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.tickId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.tickId);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                Time: {this.state.date.toLocaleString()}
            </div>
        )
    }
}