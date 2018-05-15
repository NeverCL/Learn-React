import bar from './bar';
import _ from 'lodash';
import './style.css';
import Clock from './Clock.jsx';
import './ActionLink.js';
import { render } from 'react-dom';
import { DatePicker, LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

let out = _.join(['Hello', 'webpack'], ' ');
document.write(out);
bar();

render(
    <LocaleProvider locale={zhCN}>
        <DatePicker />
    </LocaleProvider>,
    document.getElementById('root')
);