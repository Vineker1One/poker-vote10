import React from 'react';
import Button from './components/Button';
import { ReactComponent as GreenIcon } from './Green.svg';
import { ReactComponent as RedIcon } from './RED.svg';
import './styles/style.css';

const App = () => {
  return (
    <div className="app">
      <h1>Сделай ставку</h1>
      <div className="buttons-container">
        <Button onClick={() => alert('Ваш голос учтен')}>
          <GreenIcon />
        </Button>
        <Button onClick={() => alert('Ваш голос учтен')}>
          <RedIcon />
        </Button>
      </div>
    </div>
  );
};

export default App;
