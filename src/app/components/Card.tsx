import React from 'react';
import styles from './Card.module.css';

type MemoryCardProps = {
  item: { id: number; src: string; stat: string };
  id: number;
  handleClick: (id: number) => void;
};

function MemoryCard({ item, handleClick, id }: MemoryCardProps): JSX.Element {
  return (
    <article className={styles.card} onClick={() => handleClick(id)}>
      <img src={item.src} alt="" />
    </article>
  );
}

export default MemoryCard;
