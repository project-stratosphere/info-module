const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

mongoose.connect('mongodb://localhost/properties');

const db = mongoose.connection;
const generalInfoSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  title: String,
  location: String,
  home_type: String,
  owner: Object,
  property_features: Object,
  highlights: Array,
  short_description: String,
  more_description: Array,
});
const amenitiesSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  items: Array,
});
const GeneralInfo = mongoose.model('GeneralInfo', generalInfoSchema);
const Amenities = mongoose.model('Amenity', amenitiesSchema);

GeneralInfo.remove({}, () => {});
Amenities.remove({}, () => {});

fs.readFile(path.resolve(__dirname, 'fakeData.txt'), 'utf8', (readError, data) => {
  if (readError) {
    throw readError;
  } else {
    const fakeData = JSON.parse(data);
    GeneralInfo.collection.insert(fakeData.general, (insertError) => {
      if (insertError) {
        throw insertError;
      }
      Amenities.collection.insert(fakeData.amenity, (err) => {
        if (err) {
          throw insertError;
        }
        db.close();
      });
    });
  }
});
