import React from 'react'
import { render } from 'react-dom';
import DatePicker from './AntDatePicker'
// import Clock from './Clock'

var root = document.createElement('div');
root.id = 'root';
document.body.insertBefore(root, document.body.firstChild);

render(
    <DatePicker />,
    root
);