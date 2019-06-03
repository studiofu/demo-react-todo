import React, { Component } from 'react'
class TodoList extends Component {

    /**
     * props input
     * 
        addItem={this.addItem}
        inputElement={this.inputElement}
        handleInput={this.handleInput}
        currentItem={this.state.currentItem}

        =>
        this.props.addItem
        this.props.inputElement
        this.props.handleInput
        this.props.currentItem

    */

    referInput = React.createRef();

    componentDidUpdate() {
        //this.props.inputElement.current.focus()
        //if(this.referInput != null) 
            this.referInput.current.focus()

    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.props.addItem}>
                        <input
                            placeholder="Task"
                            ref={this.referInput}
                            value={this.props.currentItem.text}
                            onChange={this.props.handleInput}
                        />
                        <button type="submit"> Add Task </button>                        
                    </form>
                </div>

                
            </div>
        )
    }
}
export default TodoList
