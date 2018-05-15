import bar from './bar';
import _ from 'lodash';
import './style.css';
import Clock from './Clock.jsx';
import './ActionLink.js';
import { render } from 'react-dom';

let out = _.join(['Hello', 'webpack'], ' ');
document.write(out);
bar();

// render(
//     <Clock />,
//     document.getElementById('root')
// );