import React from 'react';
import Game from './components/Game';
import styles from './App.module.css';

function App(): JSX.Element {
  return (
    <div className={styles.container}>
      <Game />
    </div>
  );
}

export default App;
