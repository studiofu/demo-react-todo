import React, { Component } from 'react'

class Simple extends Component {

    constructor(props) {
        super(props)

        this.state = {
            requiredStatus: '[status]',
        }

        // bind this to the onClick function scope
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        console.log(e)
        this.setState({requiredStatus: this.state.requiredStatus + '>' })

        this.props.strongChange();
    }

    render() {
        return (
            <div className='simple' onClick={this.onClick}>
                this is simple... {this.state.requiredStatus}
            </div>
        )
    }
}

export default Simple