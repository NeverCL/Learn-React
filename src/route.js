import React from 'react'
import App from './App.js'
import Clock from './Clock'

import {
    HashRouter as Router,
    Route,
    Link,
    NavLink,
    Redirect,
    Switch
} from 'react-router-dom'

function Nav() {
    return (
        <div>
            <div>
                <NavLink to={{ pathname: '/app' }} activeStyle={{ color: 'red' }}>ToApp</NavLink>
            </div>
            <div>
                <NavLink to={{ pathname: '/clock' }} activeStyle={{ color: 'red' }}>ToClock</NavLink>
            </div>
            <Link to={{ pathname: '/' }}>toDemo</Link>
        </div>
    )
}


export default function () {
    return (
        <Router>
            <div>
                <Route component={Nav} />
                <Switch>
                    <Route exact path='/' component={() => (<div>hello</div>)} />
                    <Route path='/app' component={App} />
                    <Route path='/clock' component={Clock} />
                </Switch>
            </div>
        </Router>
    )
}