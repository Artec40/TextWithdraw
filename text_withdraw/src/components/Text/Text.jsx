import React from 'react'
import SymbolContainer from '../Symbol/SymbolContainer'

let Text = ({symbols, addSymbol}) => {

    document.onkeyup = (e) => {
        if (e.key.match(/^[a-zA-ZА-Яа-я]$/) !== null) {
            addSymbol(e.key)
        }
    }

    let text = symbols.map(s => <SymbolContainer key={s.id} symbol={s.value}/>)

    return <div>
        {text}
    </div>
}

export default Text