import React from 'react'
import './App.css'
import TextContainer from './components/Text/TextContainer'
import { Provider } from 'react-redux'
import store from './redux/redux-store'

function App() {
    return (
        <div className="App">
            <TextContainer/>
        </div>
    )
}

const MyApp = () => {
    return <Provider store={store}>
        <App/>
    </Provider>
}

export default MyApp
