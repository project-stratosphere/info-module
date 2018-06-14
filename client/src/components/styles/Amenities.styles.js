import styled from 'styled-components';
import { colors } from './styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.darkGrey};
  font-weight: bold;
`;

export const Title = Wrapper.extend`
  font-size: 1.5em;
  margin-bottom: 1em;
`;

export const CategoryHead = styled.div`
  font-size: 1.25em;
  margin-bottom: 0.75em;
`;

export const CategoryItemContainer = styled.div`
  font-weight: 200;
  border-bottom: solid ${colors.lighterGrey} 1px;
  margin-bottom: 0.75em;
`;

export const PreviewText = styled.div`
  font-size: 1.1em;
  width: 100%;
  margin-bottom: 0.5em;
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  flex-wrap: wrap;
  padding: 1em;
`;

export const PreviewAmenity = styled.div`
  width: 40%;
  margin: 1em 0 1em 0;
  font-weight: 200;
  text-transform: capitalize;
`;

export const ShowAll = styled.div`
  color: ${colors.blueGreen};
  margin-top: 1em;
  width: 100%;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  };
`;
