import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './Redux/redux-store'

const renderApp = () => {
    ReactDOM.render(<App store={store}/>,document.getElementById('root'))
}
renderApp()

store.subscribe(renderApp)