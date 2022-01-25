import './Expenses.css';
import React from "react";
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = (props) => { //in this case prop is an object and it is containing an array which is containing objects
  return (
    <Card className="expenses">
    
      {
        props.items.map(
            data => (<ExpenseItem 
              title={data.title} 
              date={data.date} 
              price={data.amount} />
            ) //since we have to return something acc. to map method so we use ().
            //() -> it is used to return multiple statement as a one.
        )
      }

      {/* instead of using below code, we need to use above code for dynamic data printing  */}
{/* 
      <ExpenseItem 
        title={props.items[1].title} 
        date={props.items[1].date} 
        price={props.items[1].amount} />

      <ExpenseItem 
        title={props.items[2].title} 
        date={props.items[2].date} 
        price={props.items[2].amount} />
        
      <ExpenseItem 
        title={props.items[3].title} 
        date={props.items[3].date} 
        price={props.items[3].amount} /> */}
    </Card>
  );
}

export default Expenses;
