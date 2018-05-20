// input + btn
// connect
import React, { Component } from 'react';
import { createStore, bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';

// 方式1：
class Todo extends Component {
    render() {
        let todo = this.props.todo;
        // console.log(this.props)
        return (
            <div>
                <div>{todo}</div>
                <button onClick={this.props.clickTodo}>Click</button>
            </div>
        )
    }
}

// 方式2：
// function Todo(props) {
//     // let todo = props.todo;
//     return (
//         <div>
//             <div>{todo}</div>
//             <button onClick={props.clickTodo}>Click</button>
//         </div>
//     )
// }

// mapDispatch方式1：
var WarpTodo = connect(state => ({ todo: state.todo }),
    dispatch => ({ clickTodo: () => dispatch({ type: 'click' }) }))(Todo);

// mapDispatch方式2：
// let actions = {
//     clickTodo: () => ({
//         type: 'click'
//     })
// }
// var WarpTodo = connect(state => ({ todo: state.todo }),
//     dispatch => bindActionCreators(actions, dispatch))(Todo);

function clickReduce(state = { todo: 1 }, action) {
    switch (action.type) {
        case 'click':
            return Object.assign({}, state, { todo: state.todo + 1 });
        default:
            return state;
    }
}

let store = createStore(clickReduce);

export default function () {
    return (
        <Provider store={store}>
            <div>
                <WarpTodo />
            </div>
        </Provider>
    )
}