import React, { useState } from 'react';
import styles from './Game.module.css';
import MemoryCard from './Card';
import { Images } from '../assets/ImageData';
import CloudSun from '../assets/CloudSun.svg';

function Game(): JSX.Element {
  const [items, setItems] = useState(Images.sort(() => Math.random() - 0.5));
  const [previous, setPrevious] = useState(-1);
  const [count, setCount] = useState(0);

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

  const allActive = Images.every((item) => item.stat === 'correct');

  function handleClick(id: number) {
    setCount(count + 1);
    console.log(count);
    if (previous === -1) {
      items[id].stat = 'active';
      setItems([...items]);
      setPrevious(id);
    } else {
      checkMatch(id);
    }
  }

  const evenCount = Math.round(count / 2);

  return (
    <div>
      <article className={styles.container}>
        <h1 className={styles.title}> Sweet memory game</h1>
        <div className={styles.tries}>
          <p className={styles.counter}> {evenCount}</p>
          <img src={CloudSun} alt="cloud" className={styles.cloud} />
        </div>
      </article>
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
      {allActive ? <h1>Congratulations! You won 🍨</h1> : <h1>Go for it!</h1>}
    </div>
  );
}

export default Game;
