import React, { Component } from 'react';
import './App.css';
import './TodoList';
import TodoList from './TodoList';
import TodoItems from './TodoItems';
import Simple from './Simple';
import Menu from './Menu';

class App extends Component {

  constructor() {
    super(); // remember to call super
    this.state = {
      items: [],
      currentItem: { text: 'this is item', key: '' },
    }

    // create an input reference that will be used to 
    // refer to the input element created in another class
    this.inputElement = React.createRef();
  }

  componentWillMount() { // execute will mount and then did mount
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)    
  }

  componentDidMount() { // logic that will be processed when the component is created.
    // simple testing of consuming the rest api
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)      
  }

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key; // so the matched item will not be return...
    })
    this.setState({
      items: filteredItems,
    })
  }  

  handleInput = (e) => {
    //console.log('Hello Input');
    //console.log(this.state.currentItem);

    const itemText = e.target.value
    console.log('itemText: ' + e.target.value);

    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }

  strongChange = () => {
    this.setState(
      {currentItem: {text:'strong change!', key: Date.now()}}
    )
  }

  addItem = (e) => {
    e.preventDefault(); // not submit the form
    const newItem = this.state.currentItem;
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem]
      //const items = this.state.items.push(newItem);
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
    } 

  }

  choosePerson(name) {
    this.setState({
      currentItem: {text: name, key: Date.now()}
    })
  }

  render() {
    let contactsItem = ''
    if(this.state.contacts) {
      contactsItem = this.state.contacts.map((x,i) => {
        return (
          <div key={i} className="contacts" onClick={()=>{this.choosePerson(x.name)}} >
            {x.name}
          </div>
        )
      }) 
    }

    //console.log(this.state.contacts);
    //let contactsItem = 'a';

    // the main concept and logic for this 
    // application is to pass the handler and state
    // to the child tag through the properites

    return (
      <div className="App">
        <Menu />
        <Simple strongChange={this.strongChange} />
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
