import React from 'react';
import ReactLoading from 'react-loading';
import $ from 'jquery';
import styled from 'styled-components';
import Amenities from './Amenities';
import Description from './Description';
import Highlights from './Highlights';
import Summary from './Summary';
import ContactHost from './ContactHost';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Raleway', sans-serif;
  justify-content: center;
`;

const Loading = styled.div`
  margin: auto;
  width: 50%;
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.id = window.location.pathname.match(/[0-9]+/) || [1];
    this.state = {
      generalInfo: null,
      amenities: null,
    };
  }

  componentDidMount() {
    this.getGeneralInfo();
    this.getAmenities();
  }

  getGeneralInfo() {
    $.ajax({
      url: `/api/rooms/${this.id[0]}/general`,
      type: 'GET',
      success: data => this.setState({
        generalInfo: JSON.parse(data),
      }),
    });
  }

  getAmenities() {
    $.ajax({
      url: `/api/rooms/${this.id[0]}/amenities`,
      type: 'GET',
      success: data => this.setState({
        amenities: JSON.parse(data),
      }),
    });
  }
  render() {
    if (this.state.generalInfo === null || this.state.amenities === null) {
      return (
        <Loading>
          <ReactLoading
            color="rgb(252, 91, 98)"
            type="bubbles"
            height={100}
            width={100}
          />
        </Loading>
      );
    }
    return (
      <Wrapper>
        <Summary
          title={this.state.generalInfo.title}
          location={this.state.generalInfo.location}
          home_type={this.state.generalInfo.home_type}
          owner={this.state.generalInfo.owner}
          property_features={this.state.generalInfo.property_features}
        />
        <Highlights
          highlights={this.state.generalInfo.highlights}
        />
        <Description
          short_description={this.state.generalInfo.short_description}
          more_description={this.state.generalInfo.more_description}
        />
        <ContactHost />
        <Amenities
          amenities={this.state.amenities}
          displayModal={this.state.displayModal}
          onAmenitiesDisplay={this.state.handleAmenitiesDisplay}
          onAmenitiesHide={this.state.handleAmenitiesHide}
        />
      </Wrapper>
    );
  }
}
