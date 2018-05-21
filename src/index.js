import React from 'react'
import { render } from 'react-dom';
import DatePicker from './AntDatePicker'
import App from './App.js'
import Route from './route';

var root = document.createElement('div');
root.id = 'root';
document.body.insertBefore(root, document.body.firstChild);

render(<Route />, root);