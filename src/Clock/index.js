import React, { Component } from 'react'
import Loadable from 'react-loadable';
// import Loading from './clock';

function Loading() {
    return (
        <div>Loading</div>
    )
}

const Clock = Loadable({
    loader: () => import('./clock'),
    loading: Loading,
})

export default class LoadableClock extends React.Component {
    render() {
        return <Clock />;
    }
}