import React, { useState } from 'react';
import styles from './Game.module.css';
import MemoryCard from './Card';
import { Images, Background } from '../assets/ImageData';

function Game(): JSX.Element {
  const [isActive, setActive] = useState(false);

  const shuffleArray = function (
    array: Array<{ src: string; key: React.Key | null | undefined }>
  ) {
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

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <div className={styles.game}>
      <h1> 🍩Sweet memory game🍧</h1>
      <div className={styles.cards}>
        {isActive
          ? shuffleImages.map(
              (image: { src: string; key: React.Key | null | undefined }) => (
                <MemoryCard
                  src={image.src}
                  key={image.key}
                  onClick={handleClick}
                />
              )
            )
          : Background.map(
              (background: {
                src: string;
                key: React.Key | null | undefined;
              }) => (
                <MemoryCard
                  src={background.src}
                  key={background.key}
                  onClick={handleClick}
                />
              )
            )}
      </div>
    </div>
  );
}

export default Game;
