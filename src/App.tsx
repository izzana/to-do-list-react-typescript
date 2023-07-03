import React from 'react';
import Home from './screens/Home';
import { TaskProvider } from './hooks/Task';
import './App.css';
import './index.css';
function App() {
  return (
    <div className='container border-radius'>
      <TaskProvider>
        <Home/>
      </TaskProvider>
    </div>
  );
}

export default App;
