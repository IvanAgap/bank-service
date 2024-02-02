import { type FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

export const NotFoundPage: FC = () => (
  <div className={styles.wrapper}>
    <h1>Page not found</h1>
    <Link to={'/'}>Go to Main</Link>
  </div>
);
