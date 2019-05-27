import React, { Component } from 'react';
import './App.css';
import './TodoList';
import TodoList from './TodoList';
import TodoItems from './TodoItems';
import Simple from './Simple';
import Menu from './Menu';
import Force from './Force';

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: { text: 'this is item', key: '' },
      contacts: []
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

  // this is one way binding and extra event handler is required to 
  // capture the change when user input the data and 
  // set the value to the state
  handleInput = e => {
    //console.log('Hello Input');
    //console.log(this.state.currentItem);
    //console.log('itemText: ' + e.target.value);

    // the current textbox value
    const itemText = e.target.value
    
    const currentItem = { text: itemText, key: Date.now() }

    this.setState({
      currentItem,
    })
  }

  addItem = e => {

    e.preventDefault();

    console.log('Add Item')

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

    //if(this.state.contacts) {
      //this.state.contacts.map(x=> console.log(x))
      contactsItem = this.state.contacts.map((x,i) => {
        return <div key={i}>{x.name}</div>
      }) 
    //}

    //console.log(this.state.contacts);
    //let contactsItem = 'a';

    return (
      <div className="App">
        <Menu />
        <Simple />
        <Force>
          <div>this is child</div>
        </Force>
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
