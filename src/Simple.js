import React, { Component } from 'react'

class Simple extends Component {

    constructor(props) {
        super(props)

        this.state = {
            requiredStatus: '[status]',
        }

        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        console.log(e)
        this.setState({requiredStatus: this.state.requiredStatus + '>' })

        this.props.strongChange();
    }

    render() {
        return (
            <div className='simple' onClick={e => this.onClick(e)}>this is simple... {this.state.requiredStatus}</div>
        )
    }
}

export default Simple