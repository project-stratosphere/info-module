import styled from 'styled-components';
import { colors } from './styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  width: 90%;
  margin: 1em auto 1em auto;
  padding: 0.5em;
  box-shadow: 0 0 1px ${colors.darkGrey};
`;

export const Title = styled.div`
  color: ${colors.lightGrey};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.7em;
  margin: 1em;
`;

export const HighlightsWrapper = styled.div`
  margin: 1em;
`;
