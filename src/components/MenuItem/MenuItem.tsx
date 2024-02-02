import { type FC, type MouseEventHandler, useRef } from 'react';

import { type IOptionProps } from '../CustomSelect/types';

import styles from './styles.module.scss';

export const MenuItem: FC<IOptionProps> = ({ option, onClick }) => {
  const optionRef = useRef<HTMLLIElement>(null);

  const handleClick =
    (clickedValue: string): MouseEventHandler<HTMLLIElement> =>
    () => {
      onClick(clickedValue);
    };

  return (
    <li
      key={option}
      className={styles.option}
      value={option}
      onClick={handleClick(option)}
      tabIndex={0}
      ref={optionRef}
    >
      {option}
    </li>
  );
};
