import React, { Component } from 'react'
import { render } from 'react-dom';
import { DatePicker, LocaleProvider, Button, message, notification } from 'antd';

let zhCN = null;
if (process.env.NODE_ENV === 'production') {
    var antd = require('antd'); // 生产环境
    zhCN = antd.locales.zh_CN;
} else {
    zhCN = require('antd/lib/locale-provider/zh_CN'); // 开发环境
}

export default class App extends Component {
    render() {
        return (
            <LocaleProvider locale={zhCN}>
                <div>
                    <DatePicker />
                    <Button type="primary" onClick={() => { message.info('message.info()'); }}>message</Button>
                    <Button type="primary" onClick={() => { notification.open({ message: 'notification.message', description: 'notification.description' }); }}>notification</Button>
                </div>
            </LocaleProvider>
        )
    }
}