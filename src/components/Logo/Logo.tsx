import { type JSX } from 'react';
import styles from './styles.module.scss';

export const Logo = (): JSX.Element => (
  <div data-testid="logo-container" className={styles.title}>
    <h1>
      <strong>CAT</strong>
    </h1>
    <h2>
      currencies <br />
      academic <br />
      terms
    </h2>
  </div>
);
