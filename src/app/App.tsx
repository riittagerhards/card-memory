import React from 'react';
import Game from './components/Game';
import styles from './App.module.css';

function App(): JSX.Element {
  return (
    <div className={styles.container}>
      <h1> 🍩Sweet memory game🍧</h1>
      <Game />
    </div>
  );
}

export default App;
