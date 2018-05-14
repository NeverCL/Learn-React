import bar from './bar';
import _ from 'lodash';
import './style.css';

let out = _.join(['Hello', 'webpack'], ' ');
document.write(out);
bar();