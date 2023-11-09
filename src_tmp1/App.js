import './App.css';
import ColorField from './ColorField';
import ColorInput from './ColorInput';
import { useState } from 'react';

function App() {
  const [backGroundColor, setBackGroundColor] = useState('');
  const [newColor, setNewColor] = useState('');

  return (
    <div className="App"> 
      <ColorField 
        backGroundColor={backGroundColor}
      />
      <ColorInput 
        backGroundColor={backGroundColor}
        setBackGroundColor={setBackGroundColor}
      />
    </div>
  );
}

export default App;
