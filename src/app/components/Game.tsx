import React from 'react';
import styles from './Game.module.css';
import MemoryCard from './Card';

function Game(): JSX.Element {
  return (
    <div className={styles.game}>
      <h1> Lets play card memory 🔖</h1>
      <MemoryCard />
    </div>
  );
}

export default Game;
