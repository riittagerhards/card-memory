import React, { useState } from 'react';
import styles from './Card.module.css';

type MemoryCardProps = {
  src: string;
};

function MemoryCard({ src }: MemoryCardProps): JSX.Element {
  const [isFlipped, setIsFlipped] = useState(true);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    console.log('Card is flipped');
  };

  return (
    <article className={styles.card} onClick={handleClick}>
      {isFlipped ? (
        <div className={styles.background}></div>
      ) : (
        <img src={src} alt="" />
      )}
    </article>
  );
}

export default MemoryCard;
