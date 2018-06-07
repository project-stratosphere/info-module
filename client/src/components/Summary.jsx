import PropTypes from 'prop-types';
import React from 'react';
import {
  Wrapper,
  HomeType,
  HomeTitle,
  HomeLocation,
  Features,
  Feature,
  StyledImage,
  OwnerName,
} from './styles/Summary.styles';

const Summary = props => (
  <Wrapper direction="row">
    <Wrapper direction="column">
      <HomeType>{props.home_type}</HomeType>
      <HomeTitle>{props.title}</HomeTitle>
      <HomeLocation>{props.location}</HomeLocation>
      <Features>
        <Feature>Guests: {props.property_features.guests}</Feature>
        <Feature>Bedrooms: {props.property_features.bedrooms}</Feature>
        <Feature>Beds: {props.property_features.beds}</Feature>
        <Feature>Baths: {props.property_features.baths}</Feature>
      </Features>
    </Wrapper>
    <Wrapper direction="column">
      <StyledImage src={props.owner.avatar_url} alt="avatar not found" />
      <OwnerName>{props.owner.name}</OwnerName>
    </Wrapper>
  </Wrapper>
);

Summary.propTypes = {
  home_type: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.string,
  owner: PropTypes.shape({
    name: PropTypes.string,
    avatar_url: PropTypes.string,
  }),
  property_features: PropTypes.shape({
    guests: PropTypes.number,
    bedrooms: PropTypes.number,
    beds: PropTypes.number,
    baths: PropTypes.number,
  }),
};

Summary.defaultProps = {
  home_type: 'PropTypes.string',
  title: 'PropTypes.string',
  location: 'PropTypes.string',
  owner: {
    name: 'PropTypes.string',
    avatar_url: 'PropTypes.string',
  },
  property_features: {
    guests: 'PropTypes.number',
    bedrooms: 'PropTypes.number',
    beds: 'PropTypes.number',
    baths: 'PropTypes.number',
  },
};

export default Summary;
