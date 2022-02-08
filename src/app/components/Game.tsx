import React, { useState } from 'react';
import styles from './Game.module.css';
import MemoryCard from './Card';
import { Images } from '../assets/ImageData';

function Game(): JSX.Element {
  const [items, setItems] = useState(Images.sort(() => Math.random() - 0.5));

  function handleClick(id: number) {
    alert(id);
    setItems([...items]);
  }

  return (
    <div className={styles.game}>
      {items.map((item, index) => (
        <MemoryCard
          key={index}
          item={item}
          id={index}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

export default Game;
