import { type FC, useState } from 'react';

import { useGetCurrenciesQuery } from '../../store/currencies/currencies.api';
import { CustomSelect } from '../../components/CustomSelect/CustomSelect';
import { Logo } from '../../components/Logo/Logo';
import { Footer } from '../../components/Footer/Footer';

import { type IOption } from '../../components/CustomSelect/types';

import styles from './styles.module.scss';

const StartLayout: FC = () => {
  const { data, isFetching, isError } = useGetCurrenciesQuery('currencies');
  const [currency, setCurrency] = useState<string>('');
  const startedOptions = data?.data.map((currency: IOption) => currency.id) ?? [''];

  const selectedCurrency = data?.data?.find((item: IOption) => item?.id === currency);
  const handleCurrencySelect = (currency: string): void => {
    setCurrency(currency);
  };

  return (
    <main>
      <div className={styles.content}>
        <Logo />
        <img src="/kitten.png" alt="black cat" className={styles.cat_img} />
        {isError && <div className={styles.error}>Data loading error...</div>}
        <CustomSelect
          options={startedOptions}
          selected={selectedCurrency || null}
          onChange={handleCurrencySelect}
          isFetching={isFetching}
          placeholder="Choose currency"
        />
      </div>
      <Footer name={selectedCurrency?.name} />
    </main>
  );
};

export default StartLayout;
