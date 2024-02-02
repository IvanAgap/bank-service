import { type FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import StartLayout from '../layouts/StartLayout/StartLayout';

export const Router: FC = () => (
  <Routes>
    <Route path="/" element={<StartLayout />} />
  </Routes>
);
