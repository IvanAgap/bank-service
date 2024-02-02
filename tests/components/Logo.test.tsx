import { render, screen } from '@testing-library/react';

import { Logo } from '../../src/components/Logo/Logo';

describe('Logo component', () => {
  it('renders the Logo component correctly', () => {
    render(<Logo />);

    const logoContainer = screen.getByTestId('logo-container');
    expect(logoContainer).toBeInTheDocument();

    const catHeader = screen.getByText('CAT');
    expect(catHeader).toBeInTheDocument();

    const catSubHeader = screen.getByText(/currencies academic terms/i);
    expect(catSubHeader).toBeInTheDocument();
    expect(catSubHeader.tagName).toBe('H2');
  });
});
