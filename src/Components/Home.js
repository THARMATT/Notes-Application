
import React from 'react'
import Notes from './Notes'
const Home = () => {
 

  return (
    <div>
      <div className="container my-3">
    <h1>Add a note</h1>
    <form className='my-3'>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Title of your Note:</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll save it for you for your future.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Description:</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form></div>
<Notes/>
    </div>
  )
}

export default Home
