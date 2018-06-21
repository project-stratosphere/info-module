const mongoose = require('mongoose');
const Promise = require('bluebird');

let dbURI = 'mongodb://georgina:tennis203@ds263590.mlab.com:63590/airbnb-properties';

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

const postGeneralInfo = (data) => 
  new Promise((resolve, reject) => {
    GeneralInfo.insertMany((data), (err, results) => {
      if(err) {
        reject(err);
      } else {
        resolve(results);
      }
    })
  });

const patchGeneralInfo = (data) => {
  new Promise((resolve, reject) => {
    GeneralInfo.updateMany((data), (err, results) => {
      if(err) {
        reject(err);
      } else {
        resolve(results);
      }
    })
  })
}

const deleteGeneralInfo = (data) => {
  new Promise((resolve, reject) => {
    GeneralInfo.deleteMany((data), (err, results) => {
      if(err) {
        reject(err);
      } else {
        resolve(results);
      }
    })
  })
}


module.exports.getGeneralInfo = getGeneralInfo;
module.exports.getAmenities = getAmenities;
module.exports.postGeneralInfo = postGeneralInfo;
module.exports.updateGeneralInfo = updateGeneralInfo;
module.exports.deleteGeneralInfo = deleteGeneralInfo;
