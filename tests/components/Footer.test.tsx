import { render } from '@testing-library/react';

import { Footer } from '../../src/components/Footer/Footer';

describe('Footer component', () => {
  it('renders with the provided name', () => {
    const { getByText } = render(<Footer name="Your Name" />);
    expect(getByText('Your Name')).toBeInTheDocument();
  });
});
