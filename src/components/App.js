import React, { Component } from "react";
import "../styles/App.css";
import AddItem from "./AddItems";
import Buying from "./Buying";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [
        {name:'Milk',
        quantity:'3',
        id:'milk'},
  
        {name:'Chocolate',
        quantity:'2',
        id:'chocolate'},
  
        {name:'Green Tea',
        quantity:'3',
        id:'greentea'},
  
        {name:'Cheese',
        quantity:'13',
        id:'cheese'},
      ],
      checkedItems:[],
    };
  }
  

  addItemToList = item => {
      this.setState({
        items: this.state.items.concat([ item ])
      })
  }
 
  removeItems = item => {
    this.setState({
      items: this.state.items.filter(t => t.id !== item.id),
      checkedItems:this.state.checkedItems.filter(t=>t.id !== item.id)
    });
  };

  checkedItem = item =>{
    this.setState({
      checkedItems:this.state.checkedItems.concat(this.state.items.filter(t=>t.id=== item.id)),
      items:this.state.items.filter(t=>t.id !== item.id)
    });
  };

  reCheckItem = item =>{
    this.setState({
      items:this.state.items.concat(this.state.checkedItems.filter(t=>t.id=== item.id)),
      checkedItems:this.state.checkedItems.filter(t=>t.id !== item.id)
    });
  };
  render() {
    return (
      <div className="App">
        <div className="head">
          <h2>Shoppinglist</h2>
          <p>Organize your thoughts and make your life easier </p>
        </div>
        <AddItem onAddItem = {this.addItemToList}/>
        <div>
          <h3> Need to buy:</h3>
          <Buying checked={false} items={this.state.items} onRemove={this.removeItems} onChecked = {this.checkedItem}/>
        </div>
        <div >
          <h3>Archived:</h3>
          <Buying checked={true}  items={this.state.checkedItems} onRemove={this.removeItems} onChecked = {this.reCheckItem}/>  
        </div>
       
      </div>
    );
  }
}

export default App;
