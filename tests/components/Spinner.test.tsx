import { render, screen } from '@testing-library/react';

import { Spinner } from '../../src/components/Spinner/Spinner';

describe('Spinner component', () => {
  it('renders Spinner component', () => {
    render(<Spinner />);

    const spinnerContainer = screen.getByTestId('spinner-container');
    expect(spinnerContainer).toBeInTheDocument();

    const spinnerElement = screen.getByTestId('spinner');
    expect(spinnerElement).toBeInTheDocument();
  });
});
