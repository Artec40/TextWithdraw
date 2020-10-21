import { combineReducers, createStore } from 'redux'

import textReducer from './text-reducer'

let reducers = combineReducers({
    text: textReducer
})

let store = createStore(reducers)

window.store = store
export default store