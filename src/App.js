import React from 'react';
import './App.css';
import ListItems from './ListItem';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      items:[],
      currentItem: {
        text: '',
        key: ''
      }
    }
    this.handleInput= this.handleInput.bind(this);
    this.addItem= this.addItem.bind(this);
  }
  handleInput(e){
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    this.items = newItem;
    if(newItem!==""){
      const newItems = [...this.state.items,newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: ""
        }
      })
    }
  }
  render() {
    return (
        <div className="App"> 
        <header>
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Enter text"
          value={this.state.currentItem.text}
          onChange= {this.handleInput}/>
          <button type="Submit" > Add Item</button>
        </form>
      </header>
      <ListItems items= {this.state.items} > </ListItems>
      </div>
    )
    };
  }


export default App;
