import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

  const saveExpenseData = (expData) => {
    // console.log(expData);
    props.appdata(expData);
  }

  return (
    <div className='new-expense'>
      <ExpenseForm saveData={saveExpenseData}/>
    </div>
  );
};

export default NewExpense;