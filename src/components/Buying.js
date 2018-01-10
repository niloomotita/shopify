import React from "react";
import "../styles/buying.css";

function Buying(props) {
  return (
    <div className="container">
      <ul className="buy">
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
                  onChange={() =>
                    props.onChecked && props.onChecked(item)
                  }
                />
                <label htmlFor={item.id} className={props.strike}>
                  {item.name}
                </label>
                <span id="number" className={props.strike}>
                  {item.quantity}{" "}
                </span>
                <button
                  className="delete"
                  onClick={() => props.onRemove(item)}
                >
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
