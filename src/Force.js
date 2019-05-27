import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Force extends Component {

    text = '>'

    constructor(props) {
        super(props)
        this.state = {
            test: true
        }
    }

    componentDidMount() {
        console.dir(ReactDOM.findDOMNode(this))
    }
    
    onClick = (e) => {
        this.text = this.text+'>'
        this.forceUpdate()
    }

    onMouseOver = (e) => {
        this.text = 'mouse is over!!!'
        this.forceUpdate()
    }

    render() {

        return (
            <div onClick={e=>this.onClick(e)} onMouseOver={e=>this.onMouseOver(e)}>
                {this.props.children} <br />
                {this.text}
            </div>
        )
    }
}

export default Force

