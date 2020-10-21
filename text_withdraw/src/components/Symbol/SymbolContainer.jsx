import React from 'react'
import Symbol from './Symbol'

class SymbolContainer extends React.Component {

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({behavior: 'smooth'})
    }

    componentDidMount() {
        this.scrollToBottom()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.scrollToBottom()
    }

    render() {
        return <div>
            <Symbol symbol={this.props.symbol}/>
            <div style={{float: 'left', clear: 'both'}}
                 ref={(e) => {
                     this.messagesEnd = e
                 }}>
            </div>
        </div>

    }
}

export default SymbolContainer
