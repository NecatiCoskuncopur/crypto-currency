import { styled } from 'styled-components';

const Text = ({ value, isChange = false, data }) => {
  return (
    <StyledText
      isChange={isChange}
      data={data}
    >
      {value}
    </StyledText>
  );
};

export default Text;

const StyledText = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ isChange, data }) => (isChange ? (data > 0 ? '#4ADE80' : '#EF4444') : '#ffffff')};
  letter-spacing: 1px;
`;
