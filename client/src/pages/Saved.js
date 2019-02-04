import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";

class Saved extends Component {

    render() {
        return (
            <div className="container-fluid">
                <Jumbotron />
                <h3>This is the saved page.</h3> 
            </div>
        )
    }
}

export default Saved;

// Snippet for handline button click

// handleBtnClick = event => {
//     // Get the data-value of the clicked button // (we want the id or key)
//     const btnType = event.target.attributes.getNamedItem("data-value").value;
//     // Clone this.state to the newState object
//     // We'll modify this object and use it to set our component's state
//     const newState = { ...this.state };

//     if (btnType === "pick") {
//       // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
//       newState.match = 1 === Math.floor(Math.random() * 5) + 1;

//       // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
//       newState.matchCount = newState.match
//         ? newState.matchCount + 1
//         : newState.matchCount;
//     } else {
//       // If we thumbs down'ed the dog, we haven't matched with it
//       newState.match = false;
//     }
//     // Replace our component's state with newState, load the next dog image
//     this.setState(newState);
//     this.loadNextDog();
//   };