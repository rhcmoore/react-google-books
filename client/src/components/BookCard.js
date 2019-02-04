import React from "react";

const styles = {
    image: {
      margin: 20,
      height: "200px",
      width: "200px"
    }
}

function BookCard(props) {
  return (
    <div 
      className="col-lg-3"
      id={props.id}
      key={props.id}
      >
      <div className="img-container">
        <h5>{props.title}</h5>
        <h6>{props.authors}</h6>
        <img 
            alt={props.title} 
            src={props.image} 
            style={styles.image}
        />
        <p><a href={props.link}>LINK</a></p>
        <p onClick={() => props.handleSaveClick(props)}>SAVE</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default BookCard;