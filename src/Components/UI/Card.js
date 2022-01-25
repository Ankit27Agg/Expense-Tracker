import './Card.css';
import React from "react";

const Card = props => {
  const classes = 'card ' + props.className;
  //here we need to give space after card
  //eg; cardexpense-item //wrong
  //eg: card expense-item //right
  return <div className={classes}>{props.children}</div>
}
export default Card;