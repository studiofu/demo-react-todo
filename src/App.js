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

  componentWillMount() {

    console.log('compoent will mount')
    // simple testing of consuming the rest api
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      //console.log(data)
      this.setState({ contacts: data })
      //console.log(this.state.contacts)
    })
    .catch(console.log)    
  

  }

  // logic that will be processed when the component is created.
  componentDidMount() {

    console.log('component did mount')

    // simple testing of consuming the rest api
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      //console.log(data)
      this.setState({ contacts: data })
      //console.log(this.state.contacts)
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

    let contactsItem = ''

    if(this.state.contacts) {
      //this.state.contacts.map(x=> console.log(x))
      contactsItem = this.state.contacts.map((x,i) => {
        return <div key={i}>{x.name}</div>
      }) 
    }

    //console.log(this.state.contacts);
    //let contactsItem = 'a';

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
        {contactsItem}
      </div>
    )
  }
}

export default App;
