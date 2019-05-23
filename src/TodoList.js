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

    componentDidUpdate() {
        this.props.inputElement.current.focus()
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.props.addItem}>
                        <input
                            placeholder="Task"
                            ref={this.props.inputElement}
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
