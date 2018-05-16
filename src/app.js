import React, { Component } from 'react'
import { render } from 'react-dom';
import { DatePicker, LocaleProvider, Button, message, notification } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

export default class App extends Component {
    render() {
        return (
            <div>
                <LocaleProvider locale={zhCN}>
                    <div>
                        <DatePicker />
                        <Button type="primary" onClick={() => { message.info('message.info()'); }}>message</Button>
                        <Button type="primary" onClick={() => { notification.open({ message: 'notification.message', description: 'notification.description' }); }}>notification</Button>
                    </div>
                </LocaleProvider>
            </div>
        )
    }
}