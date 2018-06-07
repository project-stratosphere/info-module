import React from 'react';
import Enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Amenities from '../../../../client/src/components/Amenities.jsx';

Enzyme.configure({ adapter: new Adapter() });

const amenities = {
  id: 1,
  items: [
    {
      category_head: 'Mock Category Head',
      category_items: [
        {
          amenity_description: 'Mock Category Item',
          supplemental_description: 'Mock Supplemental Description',
        },
      ],
    },
  ],
};

describe('Description', () => {
  it('should render correctly', () => {
    const output = Enzyme.shallow(<Amenities
      amenities={amenities}
    />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
