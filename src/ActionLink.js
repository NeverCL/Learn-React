import React, { Component } from 'react'
import { render } from 'react-dom'

function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }

    return (
        <a href="#" onClick={handleClick}>
            Click me
        </a>
    );
}

class LoggingButton extends Component {
    handleClick() {
        console.log('this is:', this);
    }

    render() {
        return (
            <button onClick={e => this.handleClick(e)}>
                Click me
            </button>
        );
    }
}

render(
    <LoggingButton />,
    document.getElementById('root')
)