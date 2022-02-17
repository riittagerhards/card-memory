import React, { useState } from 'react';
import styles from './Game.module.css';
import MemoryCard from './Card';
import { Images } from '../assets/ImageData';
import CloudSun from '../assets/CloudSun.svg';

function Game(): JSX.Element {
  const [items, setItems] = useState(Images.sort(() => Math.random() - 0.5));
  const [previous, setPrevious] = useState(-1);
  const [count, setCount] = useState(0);
  const [highScore, setHighScore] = useState(100);

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
    if (previous === -1) {
      items[id].stat = 'active';
      setItems([...items]);
      setPrevious(id);
    } else {
      checkMatch(id);
    }
  }

  const evenCount = Math.round(count / 2);

  const endGame = function () {
    if (allActive) {
      const score = evenCount;
      if (score < highScore) {
        setHighScore(score);
        const saveScore = JSON.stringify(highScore);
        localStorage.setItem('gamehighscore', saveScore);
        console.log(score);
        console.log(saveScore);
        console.log(highScore);
      }
    }
  };

  endGame();

  function handleStart() {
    setCount(0);
    Images.map((item) => (item.stat = ''));
    setItems(Images.sort(() => Math.random() - 0.5));
  }

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
      {allActive ? (
        <label className={styles.gameEnd}>
          <h1>Congratulations! You won 🍨</h1>
          <h2 className={styles.restart} onClick={handleStart}>
            Start a new game
          </h2>
        </label>
      ) : (
        <h1>Go for it!</h1>
      )}
    </div>
  );
}

export default Game;
