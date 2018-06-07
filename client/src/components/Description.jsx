import PropTypes from 'prop-types';
import React from 'react';
import {
  Wrapper,
  ShortDescription,
  MoreDescription,
  DescriptionContainer,
  DescriptionHead,
  DescriptionBody,
} from './styles/Description.styles';

const Description = props => (
  <Wrapper>
    <ShortDescription>{props.short_description}</ShortDescription>
    <MoreDescription>
      {
        props.more_description.map(description => (
          <DescriptionContainer key={description.head}>
            <DescriptionHead>{description.head}</DescriptionHead>
            <DescriptionBody>{description.body}</DescriptionBody>
          </DescriptionContainer>
        ))
      }
    </MoreDescription>
  </Wrapper>);

Description.propTypes = {
  short_description: PropTypes.string,
  more_description: PropTypes.arrayOf(PropTypes.shape({
    head: PropTypes.string,
    body: PropTypes.string,
  })),
};

Description.defaultProps = {
  short_description: 'Short Description',
  more_description: [
    {
      head: 'String',
      body: 'String',
    },
  ],
};

export default Description;
