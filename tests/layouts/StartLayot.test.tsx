import { render, screen, waitFor } from '@testing-library/react';

import StartLayout from '../../src/layouts/StartLayout/StartLayout';

jest.mock('../../src/store/currencies/currencies.api', () => ({
  useGetCurrenciesQuery: jest.fn(() => ({
    data: {
      data: [
        { id: 'usd', name: 'US Dollar' },
        { id: 'eur', name: 'Euro' },
      ],
    },
    isFetching: false,
    isError: false,
  })),
}));

describe('StartLayout component', () => {
  it('displays a placeholder if no currency is selected', async () => {
    render(<StartLayout />);
    await waitFor(() => {
      expect(screen.getByText(/Choose currency/i)).toBeInTheDocument();
    });
  });

  it('displays the cat image', async () => {
    render(<StartLayout />);
    await waitFor(() => {
      expect(screen.getByAltText(/black cat/i)).toBeInTheDocument();
    });
  });

  it('отображает сообщение об ошибке при ошибке загрузки данных', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(global, 'fetch').mockImplementationOnce(async () => {
      throw new Error('Ошибка загрузки');
    });

    render(<StartLayout />);

    jest.restoreAllMocks();
  });
});
