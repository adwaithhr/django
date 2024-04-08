import React from 'react';
// import { Link } from 'react-router-dom'
import '../Style/landing.css'; 
// Your React components and other JavaScript code go here
function landing() {
  const handleSubmit = () => {
  //   // Redirect to the next page
    window.location.href = '/Bill.js';
  };
  return (
    <div className='land'>
      <div className='title'>
          billMate
      </div>
      <div className="mb-3">
          <label for="formFile" className="form-label">Upload Your Bill Here</label>
          <input className="form-control" type="file" id="formFile"/>
          {/* <Link to='./Bill.js'><button className='button'>Submit</button></Link> */}
          <button type="button" className="button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
    
  )
}

export default landing
