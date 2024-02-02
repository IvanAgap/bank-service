import { type FC } from 'react';
import styles from './styles.module.scss';

export const Spinner: FC = () => (
  <div data-testid="spinner-container" className={styles.spinner_container}>
    <div data-testid="spinner" className={styles.spinner}></div>
  </div>
);
