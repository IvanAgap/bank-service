import { type FC, type MouseEventHandler, useEffect, useRef, useState } from 'react';

import { MenuItem } from '../MenuItem/MenuItem';

import { type ISelectProps } from './types';

import styles from './styles.module.scss';

export const CustomSelect: FC<ISelectProps> = ({
  options = [],
  placeholder,
  selected,
  onChange,
  onClose,
  isFetching,
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleClick = (event: MouseEvent): void => {
      const { target } = event;
      if (target instanceof Node && !rootRef.current?.contains(target)) {
        isOpen && onClose?.();
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [isOpen, onClose]);

  const handleOptionClick = (value: string): void => {
    setIsOpen(false);
    onChange?.(value);
  };
  const handlePlaceHolderClick: MouseEventHandler<HTMLDivElement> = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div ref={rootRef} className={styles.select_wrapper}>
      <img onClick={handlePlaceHolderClick} src="/chevron-down.svg" alt="chevron down" />
      <div
        className={styles.placeholder}
        ref={placeholderRef}
        data-selected={!!selected?.id}
        onClick={handlePlaceHolderClick}
        role="button"
        tabIndex={0}
      >
        {selected?.id || placeholder}
      </div>
      {isOpen &&
        (isFetching ? (
          <div className={styles.spinner_wrapper}>
            <Spinner />
          </div>
        ) : (
          <ul className={styles.select}>
            {options.map((option) => (
              <MenuItem key={option} option={option} onClick={handleOptionClick} />
            ))}
          </ul>
        ))}
    </div>
  );
};
