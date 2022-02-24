import React from 'react';
import styles from './Popup.module.css';

type PopupProps = {
  handleClick: () => void;
};

function Popup({ handleClick }: PopupProps): JSX.Element {
  return (
    <label className={styles.popup}>
      <div className={styles.closeIcon} onClick={() => handleClick()}>
        x
      </div>
      Pictures by: Alisha Mishra, Anna Tukhfatullina, Hafidzajusaf, Sharon
      McCutcheon, Andrea G. Glasche, Tim Gouw, Tima Miroshinichenko, Brittany
      Forbes, all from https://www.pexels.com/
    </label>
  );
}

export default Popup;
