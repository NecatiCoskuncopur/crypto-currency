import { styled } from 'styled-components';
import { BsListCheck } from 'react-icons/bs';
import { BiDialpad } from 'react-icons/bi';

import { colors, device } from '../../theme';
import Search from './Search';

const Header = ({ listFormat, handleListFormat, setsearch }) => {
  return (
    <Wrapper>
      <Search setsearch={setsearch} />
      <Button
        onClick={handleListFormat}
        title={listFormat === 'card' ? 'Table' : 'Card'}
      >
        {listFormat === 'card' ? <BsListCheck size={30} /> : <BiDialpad size={30} />}
      </Button>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 20px auto;
  @media ${device.phone} {
    width: 100%;
    padding: 0 10px;
  }
`;

const Button = styled.button`
  background-color: ${colors.ebony};
  border: 1px solid ${colors.mainLight};
  color: ${colors.main};
  padding: 5px;
  border-radius: 10px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: ${colors.ebonyClay};
  }
`;
