import styled from 'styled-components';
import { colors } from './styles';

export const Wrapper = styled.div`
  margin-bottom: 1.5em;
  color: ${colors.darkGrey};
`;

export const BaseContainer = styled.div`
  display: flex;
  color: ${colors.lighterGrey};
  flex-direction: row;
  padding: 0.5em;
  height: 20px;
  align-items: center;
  justify-content: left;
`;

export const Clickable = BaseContainer.extend`
  &:hover {
    color: ${colors.blueGreen};
    cursor: pointer;
    path {
      stroke: ${colors.blueGreen};
      fill: ${colors.blueGreen};
    }
  }
`;

export const HelpfulText = styled.div`
  font-weight: 200;
  margin-right: 0.5em;
  padding-top: 0.2em;
`;

export const HighlightText = styled.div`
  .main {
    font-weight: bold;
    padding-right: 0.5em;
  }
  .description {
    font-weight: lighter;
    padding-left: 0.5em;
  }
`;
