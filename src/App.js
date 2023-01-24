
import './App.css';
import { useState } from 'react';

function App() {

  const [backgroundColor, setBackgroundColor] = useState('red');
  

  const handleClick = () => {
    if (backgroundColor === 'red') {
      setBackgroundColor('blue');  
    }
    else {
      setBackgroundColor("red");
    }
  }

  return (
    <div className="App">
      <button
        onClick={handleClick}
        style={{ backgroundColor: backgroundColor, color: "#fff" }}
      >
        Change to {backgroundColor === 'red' ? 'blue' : 'red'}
      </button>
    </div>
  );
}

export default App;
