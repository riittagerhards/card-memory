import React from 'react';
import styles from './Game.module.css';
import MemoryCard from './Card';
import Images from '../assets/ImageData';

function Game(): JSX.Element {
  return (
    <div className={styles.game}>
      <h1> Lets play card memory 🔖</h1>
      <div className={styles.cards}>
        {Images.map((image) => (
          <MemoryCard src={image.src} key={image.key} />
        ))}
      </div>
    </div>
  );
}

export default Game;
