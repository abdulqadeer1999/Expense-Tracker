import { useContext, useState } from 'react';
import {TransactionContext} from './transContext'

// import Child from './Child'

function Child() {

// let transactions = [
//     {amount:500, desc: "Cash"},
//     {amount:-40, desc: "Book"},
//     {amount:-200, desc: "Camera"}
// ]

let {transactions,addTransaction} = useContext(TransactionContext)
let [newDesc,setDesc] = useState(0);
let [newAmount,setAmount] = useState()
const handleAddition = (event) => {
    event.preventDefault();
    addTransaction ({
        amount:newAmount,
        desc : newDesc,
    })
}

  return (
    <div className = "container">
      <h1 className = "text-center">Expense Tracker</h1>
      <h3>Your Balance   <br />$260</h3>
      <div className = "expense-container" >
          <h3>INCOME <br />$500</h3>
          <h3>EXPENSE <br />$250</h3>
      </div>

       <h3>History</h3>
       <hr />
       <ul className = "transaction-list">
          {transactions.map((transObj,ind)=>{
              return( <li key = {ind}>
                <span>{transactions.desc}</span>
                <span>{transObj.amount}</span>
            </li>
            )
          })}
  {/* <li>
      <span>Cash</span>
      <span>+500</span>
  </li>
  <li>
      <span>Cash</span>
      <span>+500</span>
  </li>
  <li>
      <span>Cash</span>
      <span>+500</span>
  </li> */}
  
       </ul>

       <h3>Add New Transaction</h3>

       <hr />
       <form className = "transaction-form" onSubmit = {handleAddition}>
           <label>Enter Description  <br />
           <input type = "text" required onChange = {(ev)=>setDesc(ev.target.value)} />

           </label>
           <br />
           <label>Enter Amount <br />
           <input type = "number" required onChange = {(ev)=>setAmount(ev.target.value)} />

           </label>
           <br />
           <input type = "submit" value = "Add Transaction" />
       </form>

    </div>
  );
}

export default Child;