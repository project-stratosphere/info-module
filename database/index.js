const mongoose = require('mongoose');
const Promise = require('bluebird');

let dbURI = 'mongodb://localhost/properties';

if (process.env.USER && process.env.PASSWORD) {
  dbURI = `mongodb://${process.env.USER}:${process.env.PASSWORD}@ds016718.mlab.com:16718/airbnc`;
}

mongoose.connect(dbURI);

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
