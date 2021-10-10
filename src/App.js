import Box from './components/Box.js';
import './App.css';
import { useState } from 'react';

function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  function toggle() {
    setIsEnabled(!isEnabled);
  }
  return (
    <div className="App">
      <div className="button_container">
        <button onClick={toggle}>
          {isEnabled ? 'Disable' : 'Enable'}
        </button>
      </div>
      <Box enabled={isEnabled} />
    </div>
  );
}

export default App;
