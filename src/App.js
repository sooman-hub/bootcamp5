import React, {useState} from 'react';
import './App.css';
import Parent from './Parent'
import counterContext from './CounterContext';

function App() {

   let countState  = useState(1) // [count, SetCount] 

  return (
    <counterContext.Provider value={countState}>
    <div>
      <Parent />
    </div>
    </counterContext.Provider> 
  );
}

export default App;
