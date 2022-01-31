import React from 'react';
import styles from './Card.module.css';

type MemoryCardProps = {
  src: string;
  onClick: () => void;
};

function MemoryCard({ src, onClick }: MemoryCardProps): JSX.Element {
  return (
    <article className={styles.card}>
      <img src={src} alt="" onClick={onClick} />
    </article>
  );
}

export default MemoryCard;
