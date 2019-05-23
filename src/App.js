import React, { Component } from 'react';
import './App.css';
import './TodoList';
import TodoList from './TodoList';
import TodoItems from './TodoItems';
import Simple from './Simple';

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: { text: 'this is item', key: '' },
    }
    this.inputElement = React.createRef();
  }

  // simple testing of consuming the rest api
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      //console.log(data)
      this.setState({ contacts: data })
      console.log(this.state.contacts)
    })
    .catch(console.log)    
    
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
        <Simple />
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
