import React from "react";
import "../styles/buying.css";
import sortBy from 'sort-by';

function Buying(props) {
	props.items.sort(sortBy('name'))	
  return (
    <div className="container">
      <ul className="buy">
        <h3>{props.titre}</h3>
        {props.items &&
          props.items.map((item, i) => {
            return (
              <li key={i} className="buying">
                <input
                  type="checkbox"
                  checked={props.checked}
                  id={item.id}
                  name={item.id}
                  className="input-check"
                  onChange={() => props.onChecked && props.onChecked(item)}
                />
                <label
                  htmlFor={item.id}
                  className={`${props.checked === true ? "strike" : ""}`}
                >
                  {item.name}
                </label>
                <span
                  id="number"
                  className={`${props.checked === true ? "strike" : ""}`}
                >
                  {item.quantity}
                </span>
                <button className="delete" onClick={() => props.onRemove(item)}>
                  X
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Buying;
