import React from 'react'
import { connect } from 'react-redux'
import Text from './Text'
import { addSymbol } from '../../redux/text-reducer'

class TextContainer extends React.Component {

    render() {
        return <Text symbols={this.props.symbols}
                     addSymbol={this.props.addSymbol}/>
    }
}

const mapStateToProps = (state) => {
    return {
        symbols: state.text.symbols
    }
}

export default connect(mapStateToProps, {addSymbol})(TextContainer)