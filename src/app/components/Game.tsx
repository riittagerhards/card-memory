import React, { useState } from 'react';
import styles from './Game.module.css';
import MemoryCard from './Card';
import { Images } from '../assets/ImageData';

function Game(): JSX.Element {
  const [items, setItems] = useState(Images.sort(() => Math.random() - 0.5));

  const [previous, setPrevious] = useState(-1);

  function checkMatch(current: number) {
    if (items[current].id == items[previous].id) {
      items[current].stat = 'correct';
      items[previous].stat = 'correct';
      setItems([...items]);
      setPrevious(-1);
    } else {
      items[current].stat = 'wrong';
      items[previous].stat = 'wrong';
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = '';
        items[previous].stat = '';
        setItems([...items]);
        setPrevious(-1);
      }, 100);
    }
  }

  function handleClick(id: number) {
    if (previous === -1) {
      items[id].stat = 'active';
      setItems([...items]);
      setPrevious(id);
    } else {
      checkMatch(id);
    }
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
