import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import { CustomSelect } from '../../src/components/CustomSelect/CustomSelect';

describe('CustomSelect component', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const placeholder = 'Select an option';

  it('renders CustomSelect with placeholder', () => {
    render(<CustomSelect options={options} placeholder={placeholder} selected={null} />);

    const placeholderElement = screen.getByText(placeholder);
    expect(placeholderElement).toBeInTheDocument();
  });

  it('opens and closes CustomSelect on placeholder click', async () => {
    render(<CustomSelect options={options} placeholder={placeholder} selected={null} />);

    const placeholderElement = screen.getByText(placeholder);

    fireEvent.click(placeholderElement);
    expect(screen.getByRole('list')).toBeInTheDocument();

    fireEvent.click(placeholderElement);
    await waitFor(() => {
      expect(screen.queryByRole('list')).toBeNull();
    });
  });

  it('selects an option and closes CustomSelect', async () => {
    const onChangeMock = jest.fn();

    render(<CustomSelect options={options} placeholder={placeholder} selected={null} onChange={onChangeMock} />);

    const placeholderElement = screen.getByText(placeholder);

    fireEvent.click(placeholderElement);

    const optionElement = screen.getByText(options[0]);
    fireEvent.click(optionElement);

    await waitFor(() => {
      expect(onChangeMock).toHaveBeenCalledWith(options[0]);
      expect(screen.queryByRole('list')).toBeNull();
    });
  });
});
