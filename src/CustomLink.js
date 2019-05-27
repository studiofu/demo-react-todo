import React, { Component } from 'react'

class CustomLink extends Component {

    constructor(props) {
        super(props)

        this.state = {
            enabled: true
        }
    }


    render() {
        let url = "/" + this.props.label

        return (
            <a href={url}>{this.props.label}</a>
        )
    }

}
export default CustomLink
