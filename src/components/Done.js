import React, { Component } from "react";
import '../styles/done.css'

class Done extends Component{
    render(){
        return (
            <div className= 'container'>           
                <div className="show-hide" id="show-btn">
                    <span className="arc"> Archived items</span> 
                    <span id="show-hide-btn" className="minus">-</span> 
                </div>
                <div className="done" id="archive">      
                </div>
            </div>
        );
    }
}

export default Done;