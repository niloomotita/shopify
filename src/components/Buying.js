import React, { Component } from "react";
import "../styles/buying.css";

class Buying extends Component {
  
  
  render() {    
    return (
      <div className="container">
        <ul className="buy">
          {this.props.items && this.props.items.map((item, i) => {
            return (
                <li key={i} className="buying">
                  <input type="checkbox" checked={this.props.checked} id={item.id} name={item.id} className="input-check"  onChange = {()=>this.props.onChecked && this.props.onChecked(item)}/>
                  <label htmlFor={item.id} className={this.props.strike}>{item.name}</label>
                  <span id="number" className={this.props.strike}>{item.quantity} </span>
                  <button className="delete" onClick = {()=>this.props.onRemove(item)}>X</button>
                </li>   
            );
          })}
        </ul>
      </div>
     
    );
  }
}

export default Buying;
