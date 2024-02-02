import { type FC } from 'react';

import { type IFooterProps } from './types';

export const Footer: FC<IFooterProps> = ({ name }) => (
  <footer>
    <span>
      <strong>{name ?? 'CURRENCY'}</strong>
    </span>
  </footer>
);
