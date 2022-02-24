import React, { useState } from 'react';
import Game from './components/Game';
import styles from './App.module.css';
import Popup from './components/Popup';

function App(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <Game />
      <p className={styles.information} onClick={togglePopup}>
        ℹ️ Photos
      </p>
      {isOpen && <Popup handleClick={togglePopup} />}
    </div>
  );
}

export default App;
