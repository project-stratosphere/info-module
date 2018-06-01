const mongoose = require('mongoose');
const Promise = require('bluebird');
const path = require('path');
const fs = require('fs');

mongoose.connect('mongodb://localhost/properties');
mongoose.Promise = Promise;

const db = mongoose.connection;
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

