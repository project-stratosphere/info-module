import styled from 'styled-components';

export const Wrapper = styled.div`
  order: 3;
  display: flex;
  flex-direction: column;
  margin: 1em;
  padding-bottom: 2em;
  border-bottom: solid #cccccc 1px;
`;

export const ShortDescription = styled.div`
  order: 1;
  color: #4d4d4d;
  margin-bottom: 1.5em;
  font-weight: lighter;
`;

export const MoreDescription = styled.div`
  order: 2;
  flex-direction: column;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5em;
`;
export const DescriptionHead = styled.div`
  order: 1;
  color: #404040;
  font-weight: bold;
  font-size: 0.9em;
  margin-bottom: 0.75em;
`;
export const DescriptionBody = styled.div`
  order: 2;
  color: #4d4d4d;
  font-weight: lighter;
`;

export const Clickable = styled.div`
  order: 3;
  color: #009999;
  font-weight: bold;
  width: 50%;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  };
`;
