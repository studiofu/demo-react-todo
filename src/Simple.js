import React, { Component } from 'react'

class Simple extends Component {

    constructor(props) {
        super(props)

        this.state = {
            requiredStatus: '[status]',
        }
    }

    render() {
        return (
            <div className='simple'>this is simple... {this.state.requiredStatus}</div>
        )
    }
}

export default Simple