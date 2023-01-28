import React from 'react';
import Element from './Element';
import './App.css';

function App() {
  const [open, setopen] = React.useState(false);
  const arr = ["games","jobs","jokes", "james", "jake"];

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
      {open && <div className="element"  >
        <Element arr={arr} disappear={handleClose} />
      </div>}
    </div>
  );
}

export default App;
