// 各种Demo 可临时在此处测试
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'

// reducer, 纯函数签名： (state, action) => state.
function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

// state
let store = createStore(counter, applyMiddleware(createLogger)); // 会调用
console.log(store.getState())

// 可以手动订阅更新，也可以事件绑定到视图层。
store.subscribe(() =>
    console.log(store.getState())
);

// 修改state
store.dispatch({ type: 'INCREMENT' });