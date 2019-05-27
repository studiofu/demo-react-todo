import React, { Component } from 'react'
import CustomLink from './CustomLink'

class Menu extends Component {

    menus = ['about', 'services', 'portfolio']

    constructor(props) {
        super(props)

        this.state = {
            enabled: true
        }

        //this.onClick = this.onClick.bind(this);
    }

    createMenu() {
        let result = this.menus.map((v,i) => {
            return (
                <div key={i}>                    
                    <CustomLink label={v}/>
                </div>
            )
        })

        return result;
    }


    render() {
        return (
            <div>
                {this.createMenu()}
            </div>
        )
    }

}

export default Menu;