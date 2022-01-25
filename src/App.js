import Expenses from "./Components/Expenses/Expenses";
import React, {useState} from "react";
import NewExpense from "./Components/New Expense/NewExpense";

let dummy_items = [
  {
    id: 1,
    title: 'School',
    amount: 2000 ,
    date: new Date(2022, 1, 12) //don't write '0'(zero)before any number in months //and indexing for months is 0-11
  },
  {
    id: 2,
    title: 'college',
    date: new Date(2021, 4, 22),
    amount: 3000 
  },
  {
    id: 3,
    title: 'House Rent',
    date: new Date(2019, 1, 12),
    amount: 40000 
  },
  {
    id: 4,
    title: 'Grocery',
    date: new Date(2022, 11, 11),
    amount: 5000 
  }
]



const App = () => {
  // let expenseTitle = 'school fee';
  // let expenseDate = new Date(2022, 2, 28);
  // let expenseAmount = 3000;
  const [expenses, setExpenses] = useState(dummy_items);
  
  const appExpenseData = (appExpData) => {
    // console.log(appExpData);
    setExpenses([appExpData, ...expenses]);
  }


  return (
    <div>
    
      {/* <ExpenseItem title={expenseTitle} date={expenseDate} price={expenseAmount} /> */}
      <NewExpense appdata={appExpenseData}/>
      <Expenses items={expenses}/>
      {/* Props are arguments passed into React components. props stands for properties. */}
    </div>
  );
}

export default App;