import React, {useState} from 'react';
import { Button } from '@wow/common/dist/components/Button';
import './App.scss';

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="sectionContainer">
      <h2 className="centeredText">Welcome to RN</h2>

      <Button outline={true} onPress={() => setCounter(prev => --prev)}>-</Button>
      <h3 className="centeredText">{counter}</h3>
      <Button isBig={true} onPress={() => setCounter(prev => ++prev)}>+</Button>
    </div>
  );
}

export default App;
