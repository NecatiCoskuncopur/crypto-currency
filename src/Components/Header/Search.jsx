import { styled } from 'styled-components';
import { BiSearch } from 'react-icons/bi';

import { colors } from '../../theme';

const Search = ({ setsearch }) => {
  return (
    <Wrapper>
      <span>
        <BiSearch size={20} />
      </span>
      <input
        type="text"
        placeholder="Arama Yapın"
        onChange={(e) => setsearch(e.target.value)}
      />
    </Wrapper>
  );
};

export default Search;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;

  input {
    width: 100%;
    background-color: transparent;
    height: 40px;
    color: ${colors.main};
    width: 100%;
    border-radius: 4px;
    height: 40px;
    padding: 0 32px;
    border: 1px solid ${colors.mainLight};
    &:focus {
      border: 1px solid ${colors.main};
    }
  }
  span {
    position: absolute;
    top: 10px;
    left: 10px;
    margin-right: 12px;
    color: ${colors.mainLight};
  }
`;
