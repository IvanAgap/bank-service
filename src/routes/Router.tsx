import { type FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import StartLayout from '../layouts/StartLayout/StartLayout';
import { NotFoundPage } from '../layouts/NotFoundPage/NotFoundPage';

export const Router: FC = () => (
  <Routes>
    <Route path="/" element={<StartLayout />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);
