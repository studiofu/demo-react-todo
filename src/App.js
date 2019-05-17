import React, { Component } from 'react';
import './App.css';
import './TodoList';
import TodoList from './TodoList';
import TodoItems from './TodoItems';

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: { text: 'abcd', key: '' },
    }
    this.inputElement = React.createRef();
  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }  

  handleInput = e => {
    //console.log('Hello Input');
    //console.log(this.state.currentItem);

    const itemText = e.target.value
    console.log('itemText: ' + e.target.value);

    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }

  addItem = e => {

    e.preventDefault();

    console.log('Hello Add Item')

    const newItem = this.state.currentItem;

    if (newItem.text !== '') {
      console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
    }

  }


  render() {
    return (
      <div className="App">
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <TodoItems entries={this.state.items} deleteItem={this.deleteItem} />
      </div>
    )
  }
}

export default App;
