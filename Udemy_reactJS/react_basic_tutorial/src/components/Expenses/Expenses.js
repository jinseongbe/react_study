import React, { useState } from 'react';
import ExpenseList from "./ExpenseList";
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');
  const filterChangeHandler = selecedYear => {
    setFilteredYear(selecedYear);
  }
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/> 
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses}/>
      </Card>
    </li>
  )
}

export default Expenses;