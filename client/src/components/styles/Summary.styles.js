import styled from 'styled-components';
import { colors } from './styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  margin: 0.3em;
  font-weight: bold;
`;

export const HomeType = styled.div`
  text-transform: uppercase;
  font-size: 0.75em;
  color: ${colors.darkRed};
  cursor: pointer;
`;

export const HomeTitle = styled.div`
  font-size: 2em;
  margin: 0.25em 0 0.25em 0;
  color: ${colors.darkGrey};
`;

export const HomeLocation = styled.div`
  font-size: 1em;
  font-weight: 200;
  color: ${colors.darkGrey};
  cursor: pointer;
`;

export const Features = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1em;
  font-weight: 200;
  font-size: 0.9em;
  color: ${colors.darkGrey};
`;

export const Feature = styled.div`
  margin-right: 1em;
`;

export const StyledImage = styled.img`
  width: 4em;
  height: auto;
  border-radius: 100%;
  cursor: pointer;
`;

export const OwnerName = styled.div`
  color: ${colors.darkGrey};
  text-align: center;
  font-weight: 200;
  font-size: 0.8em;
`;

export const SVGContainer = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 0.1em;
`;
