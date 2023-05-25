import { styled } from 'styled-components';

import Card from '../Card';

const Cards = ({ data }) => {
  return (
    <Wrapper>
      {data.map((item) => (
        <Card
          key={item.id}
          image={item.image}
          name={item.name}
          currentPrice={item.current_price}
          priceChange={item.price_change_24h}
          priceChangePercantage={item.price_change_percentage_24h}
          ath={item.ath}
          atl={item.atl}
        />
      ))}
    </Wrapper>
  );
};

export default Cards;

const Wrapper = styled.section`
  width: 80%;
  margin: 36px auto 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
