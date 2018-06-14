import styled, { keyframes } from 'styled-components';
import { colors } from './styles';

const slideDown = keyframes`
  from {
    top: -40px;
    opacity: 0;
  }

  to {
    top: 0px;
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  margin: 1em;
  padding-bottom: 1em;
  color: ${colors.darkGrey};
`;

export const ShortDescription = styled.div`
  margin-bottom: 1.5em;
  font-weight: 200;
  position: relative;
`;

export const MoreDescription = styled.div`
  flex-direction: column;
  overflow: hidden;
`;

export const DescriptionContainer = styled.div`
  margin-bottom: 1.5em;
  padding-top: 1em;
  position: relative;
  animation: ${slideDown} 0.5s ease 1;
`;
export const DescriptionHead = styled.div`
  font-size: 0.9em;
  margin-bottom: 0.75em;
`;
export const DescriptionBody = styled.div`
  font-weight: 200;
`;

export const Clickable = styled.div`
  color: ${colors.blueGreen};
  width: 50%;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  };
`;
