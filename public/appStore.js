import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "./store/sportStore"
import App from "./action/sportAction"

let _id = (i) => document.getElementById(i);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    _id("redux_app")
)