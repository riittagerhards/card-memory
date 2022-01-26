import React from 'react';
import styles from './Card.module.css';

type MemoryCardProps = {
  src: string;
};

function MemoryCard({ src }: MemoryCardProps): JSX.Element {
  return (
    <article className={styles.card}>
      <img src={src} alt="" />
    </article>
  );
}

export default MemoryCard;
