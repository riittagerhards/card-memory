import React from 'react';
import styles from './Game.module.css';
import MemoryCard from './Card';
import Images from '../assets/ImageData';

function Game(): JSX.Element {
  const shuffleArray = function (array) {
    let currentIndex = array.length;
    while (0 !== currentIndex) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      const tmp = Images[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = tmp;
    }
    return array;
  };

  const shuffleImages = shuffleArray(Images);
  console.log(shuffleImages);

  return (
    <div className={styles.game}>
      <h1> 🍩Sweet memory game🍧</h1>
      <div className={styles.cards}>
        {shuffleImages.map((image) => (
          <MemoryCard src={image.src} key={image.key} />
        ))}
      </div>
    </div>
  );
}

export default Game;
