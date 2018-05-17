import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { DatePicker, LocaleProvider, Button, message, notification } from 'antd';

let zhCN = null;
if (process.env.NODE_ENV === 'production') {
    let antd = require('antd'); // 生产环境
    zhCN = antd.locales.zh_CN;
} else {
    zhCN = require('antd/lib/locale-provider/zh_CN'); // 开发环境
}

export default class App extends Component {

    onChange(date, dateStr) {
        this.setState({
            date: dateStr
        });
    }

    render() {
        return (
            <LocaleProvider locale={zhCN}>
                <div>
                    <DatePicker onChange={(date, dateStr) => this.onChange(date, dateStr)} />
                    <Button type="primary" onClick={() => { message.info('message.info()' + this.state.date); }}>{this.props.name || 'message'}</Button>
                    <Button type="primary" onClick={() => { notification.open({ message: 'notification.message', description: 'notification.description' }); }}>notification</Button>
                </div>
            </LocaleProvider>
        )
    }
}

App.propTypes = {
    name: PropTypes.string
};

App.defaultProps = {
    name: 'Click Me'
}