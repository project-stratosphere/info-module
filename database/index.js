const mongoose = require('mongoose');
const Promise = require('bluebird');

mongoose.connect('mongodb://localhost/properties');
mongoose.Promise = Promise;

const generalInfoSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  title: String,
  home_type: String,
  owner: Object,
  property_features: Object,
  highlights: Array,
  short_description: String,
  more_description: Array,
});
const amenitiesSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  head: String,
  items: Array,
});
const GeneralInfo = mongoose.model('GeneralInfo', generalInfoSchema);
const Amenities = mongoose.model('Amenity', amenitiesSchema);

const getGeneralInfo = id =>
  new Promise((resolve, reject) => {
    GeneralInfo.find({ id }, (err, generalInfo) => {
      if (err) {
        reject(err);
      } else {
        resolve(generalInfo);
      }
    });
  });

const getAmenities = id =>
  new Promise((resolve, reject) => {
    Amenities.find({ id }, (err, amenityInfo) => {
      if (err) {
        reject(err);
      } else {
        resolve(amenityInfo);
      }
    });
  });

module.exports.getGeneralInfo = getGeneralInfo;
module.exports.getAmenities = getAmenities;
