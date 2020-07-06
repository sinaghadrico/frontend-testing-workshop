import React from 'react';
import Counter from './examples/counter';
import CounterHook from './examples/counter-hook';
import Login from './examples/login';

import './App.css';

function App() {
  return (
    <div className="App">
       <Counter/>
       <CounterHook/>
       <Login/>
    </div>
  );
}

export default App;
