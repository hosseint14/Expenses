import { useState } from "react";
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id:'e1',
      date: new Date(2021, 8, 12),
      title: "TV",
      amount: "298.12",
    },
    {
      id:'e2',
      date: new Date(2020, 11, 8),
      title: "Laptop",
      amount: "328.14",
    },
    {
      id:'e3',
      date: new Date(2019, 4, 23),
      title: "Desk",
      amount: "450.25",
    },
  ];

  const [newData,setNewData]=useState(expenses)
const addData=(expenses)=>{
setNewData((prevExpenses)=>{
  return(
    [expenses,...prevExpenses]
  )
})
}

  return (
    <div className="App">
      <NewExpense onAddData={addData}/>
      <Expenses items={newData} />
    </div>
  );
}

export default App;
