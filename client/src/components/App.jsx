import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import Amenities from './Amenities.jsx';
import Description from './Description.jsx';
import Highlights from './Highlights.jsx';
import Summary from './Summary.jsx';

const fakeGeneralInfo = JSON.parse('{"id":1,"title":"Practical Fantastic Home","location":"Rosenbaummouth","home_type":"Intelligent HOUSE","owner":{"name":"Pearl","avatar_url":"https://s3.amazonaws.com/uifaces/faces/twitter/falvarad/128.jpg"},"property_features":{"guests":3,"bedrooms":0,"beds":5,"baths":4},"highlights":[{"head":"Indoor fireplace","body":""},{"head":"Self check-in","body":""},{"head":"Great check-in experience","body":""}],"short_description":"Harum perspiciatis minima tempore nobis sed.","more_description":[{"head":"The space","body":"Adipisci reprehenderit repudiandae blanditiis. Dolor assumenda consectetur fuga. Eveniet amet optio quo veniam vel at quas. Nisi et autem et magni dolorem accusamus ipsam eius laborum."},{"head":"Guest access","body":"Labore rerum sed tempore ipsa magnam odio ducimus modi error."}]}');
const fakeAmenities = JSON.parse('{"id":1,"items":[{"category_head":"Industrial","category_items":[{"amenity_description":"primary","supplemental_description":"Qui ut qui reiciendis omnis id delectus assumenda."},{"amenity_description":"Pa\'anga","supplemental_description":"Optio odio odio."},{"amenity_description":"Customer-focused","supplemental_description":"Vel sed ad optio et eligendi ab."}]},{"category_head":"Industrial2","category_items":[{"amenity_description":"primary","supplemental_description":"Qui ut qui reiciendis omnis id delectus assumenda."},{"amenity_description":"Pa\'anga","supplemental_description":"Optio odio odio."},{"amenity_description":"Customer-focused","supplemental_description":"Vel sed ad optio et eligendi ab."}]}]}');

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.id = window.location.pathname.match(/[0-9]+/) || [1];
    this.state = {
      generalInfo: fakeGeneralInfo,
      amenities: fakeAmenities,
    };
  }

  componentDidMount() {
    this.getGeneralInfo();
    this.getAmenities();
  }

  getGeneralInfo() {
    $.ajax({
      url: `/api/room/${this.id[0]}/general`,
      type: 'GET',
      success: data => this.setState({
        generalInfo: JSON.parse(data),
      }),
    });
  }

  getAmenities() {
    $.ajax({
      url: `/api/room/${this.id[0]}/amenities`,
      type: 'GET',
      success: data => this.setState({
        amenities: JSON.parse(data),
      }),
    });
  }

  render() {
    return (
      <Wrapper>
        <Summary
          title={this.state.generalInfo.title}
          location={this.state.generalInfo.location}
          home_type={this.state.generalInfo.home_type}
          owner={this.state.generalInfo.owner}
          property_features={this.state.generalInfo.property_features}
        />
        <Highlights highlights={this.state.generalInfo.highlights} />
        <Description
          short_description={this.state.generalInfo.short_description}
          more_description={this.state.generalInfo.more_description}
        />
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
