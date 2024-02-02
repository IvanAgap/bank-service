import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { NotFoundPage } from '../../src/layouts/NotFoundPage/NotFoundPage';

describe('NotFoundPage component', () => {
  it('renders a link to the main page', () => {
    render(
      <Router>
        <NotFoundPage />
      </Router>
    );
    const linkElement = screen.getByRole('link', { name: /Go to Main/i });
    expect(linkElement).toBeInTheDocument();
  });

  it('navigates to the main page when the link is clicked', () => {
    render(
      <Router>
        <NotFoundPage />
      </Router>
    );
    const linkElement = screen.getByRole('link', { name: /Go to Main/i });
    expect(linkElement).toHaveAttribute('href', '/');
  });
});
