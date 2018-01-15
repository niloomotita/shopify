import React, { Component } from "react";
import "../styles/additem.css";
import serializeForm from "form-serialize";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	name: "",
		quantity: "",
    };
  }

  handleSubmit = e => {
    e.preventDefault();
	const values = serializeForm(e.target, { hash: true });
	values.id = Date.now();
    if (this.state.name === "") {
      return;
    }
	this.props.onAddItem && this.props.onAddItem(values);
    this.setState({
      name: "",
      quantity: ""
    });
  };

  updateName = name => {
    this.setState({ name: name.trim() });
  };

  updateNum = quantity => {
    this.setState({ quantity: quantity.trim() });
  };

  render() {
	  const {name, quantity} = this.state
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <h3>Make your shoppinglist</h3>
        <input
          type="text"
          value={name}
          name="name"
          placeholder="want to buy ..."
          className="new-item"
          id={name}
          onChange={event => this.updateName(event.target.value)}
        />
        <input
          type="text"
          value={quantity}
          name="quantity"
          placeholder="quantity"
          className="quantity"
          id="quantity"
          onChange={event => this.updateNum(event.target.value)}
        />
        <button type="submit" className="add" id="add">
          Add
        </button>
      </form>
    );
  }
}
export default AddItem;
