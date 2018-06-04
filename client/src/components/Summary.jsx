import PropTypes from 'prop-types';
import React from 'react';

const Summary = props => (
  <div id="summary" style={props.border}><h1>Summary</h1>
    <div id="home-type"><h6>{props.home_type}</h6></div>
    <div id="home-title"><h2>{props.title}</h2></div>
    <div id="home-location"><h5>{props.location}</h5></div>
    <div id="owner-info"><img src={props.owner.avatar_url} alt="avatar not found" /><br />{props.owner.name}</div>
    <div id="property-features">
      Guests: {props.property_features.guests}<br />
      Bedrooms: {props.property_features.bedrooms}<br />
      Beds: {props.property_features.beds}<br />
      Baths: {props.property_features.baths}<br />
    </div>
  </div>
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
  border: PropTypes.shape({
    border: PropTypes.string,
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
  border: {
    border: 'solid black 1px',
  },
};

export default Summary;
