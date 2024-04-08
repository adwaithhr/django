import React, { useState } from 'react';
import landing from './landing';
import '../Style/Bill.css'

function Bill() {
  // Define state for table data
  const [tableData, setTableData] = useState([]);

  // Define state for input fields
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [count, setCount] = useState('');


  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add new row to tableData state
    setTableData([...tableData, { id, name, age, count, total: Number(count)*Number(age)}]);
    // Clear input fields
    setId('');
    setName('');
    setAge('');
    setCount('');
  };
  // fetch('localhost:8000/b')

  return (
    <div className='table-container'>
      {/* Form to input data */}
      
      {/* Table to display data */}
      <table className="table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Count</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.count}</td>
              <td>{row.total}</td>
            </tr>
          ))}
        </tbody>
      </table>


      <form className='form-container' onSubmit={handleSubmit}>
        <input className="form-container-input"  type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="Item" />
        <input className="form-container-input"  type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Type" />
        <input className="form-container-input"  type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Amount" />
        <input className="form-container-input"  type="text" value={count} onChange={(e) => setCount(e.target.value)} placeholder="Count" />
        

        <button type="submit">Add Row</button>
      </form>
      
    </div> 
    
  );
}

export default Bill;
