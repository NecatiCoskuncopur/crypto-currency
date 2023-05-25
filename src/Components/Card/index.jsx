import { useState } from 'react';
import { styled } from 'styled-components';
import ReactCardFlip from 'react-card-flip';
import { FiRotateCw, FiRotateCcw } from 'react-icons/fi';

import { colors, device } from '../../theme';
import FrontSide from './FrontSide';
import BackSide from './BackSide';

const Card = ({ image, name, currentPrice, priceChange, priceChangePercantage, ath, atl }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleHover = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Container>
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="horizontal"
      >
        <Wrapper onClick={handleHover}>
          <FrontSide
            image={image}
            name={name}
          />
          <Button onClick={handleHover}>
            <FiRotateCw size={20} />
          </Button>
        </Wrapper>
        <Wrapper onClick={handleHover}>
          <BackSide
            currentPrice={currentPrice}
            priceChange={priceChange}
            priceChangePercantage={priceChangePercantage}
            ath={ath}
            atl={atl}
          />
          <Button onClick={handleHover}>
            <FiRotateCcw size={20} />
          </Button>
        </Wrapper>
      </ReactCardFlip>
    </Container>
  );
};

export default Card;
const Container = styled.article`
  flex-basis: calc(25% - 16px);
  @media ${device.laptop} {
    flex-basis: calc(33.333333% - 20px);
  }
  @media ${device.tablet} {
    flex-basis: calc(50% - 20px);
  }
  @media ${device.phone} {
    flex-basis: 100%;
  }
`;

const Wrapper = styled.div`
  background-color: ${colors.ebonyClay};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 200px;
  transition: 0.3s;
  border-radius: 4px;
  &:hover {
    scale: 1.07;
  }
`;

const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  color: ${colors.main};
  margin-top: 30px;
`;
