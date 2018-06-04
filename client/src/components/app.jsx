import React from 'react';
import Amenities from './Amenities.jsx';
import Description from './Description.jsx';

const fakeGeneralInfo = JSON.parse('{"id":1,"title":"Practical Fantastic Home","location":"Rosenbaummouth","home_type":"Intelligent HOUSE","owner":{"name":"Pearl","avatar_url":"https://s3.amazonaws.com/uifaces/faces/twitter/falvarad/128.jpg"},"property_features":{"guests":3,"bedrooms":0,"beds":5,"baths":4},"highlights":[{"head":"Indoor fireplace","body":""},{"head":"Self check-in","body":""},{"head":"Great check-in experience","body":""}],"short_description":"Harum perspiciatis minima tempore nobis sed.","more_description":[{"head":"The space","body":"Adipisci reprehenderit repudiandae blanditiis. Dolor assumenda consectetur fuga. Eveniet amet optio quo veniam vel at quas. Nisi et autem et magni dolorem accusamus ipsam eius laborum."},{"head":"Guest access","body":"Labore rerum sed tempore ipsa magnam odio ducimus modi error."}]}');
const fakeAmenities = JSON.parse('{"id":1,"items":[{"category_head":"Industrial","category_items":[{"amenity_description":"primary","supplemental_description":"Qui ut qui reiciendis omnis id delectus assumenda."},{"amenity_description":"Pa\'anga","supplemental_description":"Optio odio odio."},{"amenity_description":"Customer-focused","supplemental_description":"Vel sed ad optio et eligendi ab."}]}]}');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generalInfo: fakeGeneralInfo,
      amenities: fakeAmenities,
    };
  }

  render() {
    const border = { border: 'solid black 1px' };
    return (
      <div id="content">
        <div id="summary" style={border}><h1>Summary</h1>
          <div id="home-type"><h6>{this.state.generalInfo.home_type}</h6></div>
          <div id="home-title"><h2>{this.state.generalInfo.title}</h2></div>
          <div id="home-location"><h5>{this.state.generalInfo.location}</h5></div>
          <div id="owner-info"><img src={this.state.generalInfo.owner.avatar_url} alt="avatar not found" /><br />{this.state.generalInfo.owner.name}</div>
          <div id="property-features">
            Guests: {this.state.generalInfo.property_features.guests}<br />
            Bedrooms: {this.state.generalInfo.property_features.bedrooms}<br />
            Beds: {this.state.generalInfo.property_features.beds}<br />
            Baths: {this.state.generalInfo.property_features.baths}<br />
          </div>
        </div>
        <div id="highlights" style={border}><h1>Higlights</h1>
          {
            this.state.generalInfo.highlights.map(highlight => (
              <div key={highlight.head}><h5>{highlight.head}</h5></div>
            ))
          }
        </div>
        <div id="description" style={border}><h1>Description</h1>
          <div id="short-description"><p>{this.state.generalInfo.short_description}</p></div>
          <div id="more-descriptions">
            {
              this.state.generalInfo.more_description.map(description => (
                <div key={description.head}><h4>{description.head}</h4>
                  <p>{description.body}</p>
                </div>
              ))
            }
          </div>
        </div>
        <Amenities amenities={this.state.amenities} />
      </div>
    );
  }
}

