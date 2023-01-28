import React from 'react';
import Element from './Element';
import './App.css';

function App() {
  // managing the state
  const [open, setopen] = React.useState(false);

  // the array which has to be iterated and the data of which has to be shown
  const arr = ["games","jobs","jokes", "james", "jake", "project", "apple"];

  function handleOpen(){
    setopen((prevState)=>{
      return !prevState;
    })
  }

  function handleClose(){
    setopen(false);
  }

  return (
    <div className="App" >
      <h2>Click on the button</h2>
      <button className='hovering' onClick={handleOpen} >Hover over this button</button>

      {/* conditional rendering */}
      {open && <div className="element"  >
        <Element arr={arr} disappear={handleClose} />
      </div>}
    </div>
  );
}

export default App;
