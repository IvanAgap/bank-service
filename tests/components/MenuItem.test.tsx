import { render, screen, fireEvent } from '@testing-library/react';

import { MenuItem } from '../../src/components/MenuItem/MenuItem';

describe('MenuItem component', () => {
  const option = 'Option 1';
  const onClickMock = jest.fn();

  it('renders MenuItem with the correct option', () => {
    render(<MenuItem option={option} onClick={onClickMock} />);
    const menuItemElement = screen.getByText(option);
    expect(menuItemElement).toBeInTheDocument();
  });

  it('calls onClick when MenuItem is clicked', () => {
    render(<MenuItem option={option} onClick={onClickMock} />);
    const menuItemElement = screen.getByText(option);

    fireEvent.click(menuItemElement);

    expect(onClickMock).toHaveBeenCalledWith(option);
  });
});
