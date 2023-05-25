import CurrencyFormat from 'react-currency-format';
import { styled } from 'styled-components';

import Text from '../Text';

const BackSide = ({ currentPrice, priceChange, priceChangePercantage, ath, atl }) => {
  return (
    <Wrapper>
      <p>
        Fiyat:
        <CurrencyFormat
          value={currentPrice}
          displayType={'text'}
          thousandSeparator={true}
          suffix={'$'}
          renderText={(value) => <Text value={value} />}
        />
      </p>

      <p>
        Değişim (24s):
        <CurrencyFormat
          value={priceChange.toFixed(2)}
          displayType={'text'}
          thousandSeparator={true}
          suffix={'$'}
          renderText={(value) => (
            <Text
              isChange={true}
              data={priceChange}
              value={value}
            />
          )}
        />
      </p>
      <p>
        Değişim (%):
        <Text
          isChange={true}
          data={priceChangePercantage}
          value={`${priceChangePercantage.toFixed(2)}%`}
        />
      </p>
      <p>
        Ath:
        <CurrencyFormat
          value={ath}
          displayType={'text'}
          thousandSeparator={true}
          suffix={'$'}
          renderText={(value) => <Text value={value} />}
        />
      </p>
      <p>
        Ath:
        <CurrencyFormat
          value={atl}
          displayType={'text'}
          thousandSeparator={true}
          suffix={'$'}
          renderText={(value) => <Text value={value} />}
        />
      </p>
    </Wrapper>
  );
};

export default BackSide;

const Wrapper = styled.div`
  p {
    display: flex;
    gap: 5px;
    color: #929aab;
    font-weight: 700;
  }
`;
