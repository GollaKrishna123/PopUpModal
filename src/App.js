import { Modal } from 'bootstrap';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import PopUpModal from './components/PopUpModel';

// Here we are using react-bootstrap package for modal instead of using bootstrap because for modal react bootstrap is better 

const App = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [points,setPoints] = useState(0);
  let totalPoints=100;
  const incrementHandler = ()=>{
    if(points<100)
    setPoints(points+10);
  }
 
  return (
    <div>
      {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button> */}

      <PopUpModal
        show={points===totalPoints}
        onHide={() => setModalShow(false)}
      />
      <h1>{points}/{totalPoints}</h1>
      <button onClick={incrementHandler}>Increase</button>
    </div>
  )
}

export default App
