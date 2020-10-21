const ADD_SYMBOL = 'ADD_SYMBOL'

let initialState = {
    symbols: []
}

const textReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SYMBOL: {
            return {
                ...state,
                symbols: [...state.symbols, {
                    id: state.symbols.length,
                    value: action.value
                }]
            }
        }
        default:
            return state
    }
}

export const addSymbol = (value) => ({type: ADD_SYMBOL, value})

export default textReducer