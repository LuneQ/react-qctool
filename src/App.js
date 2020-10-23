import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <p className='title'>Input your code here</p>
        <textarea></textarea>
        <p>Choose The Account</p>
        <form>
          <input type="radio" name='Standard' />
          <label for='Standard'>Standard</label>
          <input type="radio" name='Amazon' />
          <label for='Amazon'>Amazon</label>
          <input type="radio" name='Loreal' />
          <label for='Loreal'>L’Oréal</label>
          <input type="radio" name='OnStar' />
          <label for='OnStar'>OnStar</label>
          <br/>
          <input type='submit' value='Submit'/>
        </form>
      </div>
    </div>
  );
}

export default App;
