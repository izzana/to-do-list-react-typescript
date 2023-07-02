import React from 'react';
import Home from './screens/Home';
import { FormsTaskProvider } from './hooks/FormTask';
import './App.css';
import './index.css';
function App() {
  return (
    <div className='container border-radius'>
      <FormsTaskProvider>
        <Home/>
      </FormsTaskProvider>
     
    </div>
  );
}

export default App;
