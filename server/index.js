const express = require('express');
const path = require('path');
const db = require('../database');

const app = express();

app.use(/(\/rooms\/100|\/rooms\/[1-9][0-9]|\/rooms\/[1-9])\b/, express.static(path.join(__dirname, '../client/dist/')));

app.get('/api/rooms/:id/general', (req, res) => {
  const { id } = req.params;
  db.getGeneralInfo(id)
    .then((data) => {
      res.statusCode = 200;
      res.type = 'json';
      res.end(JSON.stringify(data[0]));
    })
    .catch((err) => {
      res.end(JSON.stringify(err));
    });
});

app.get('/api/rooms/:id/amenities', (req, res) => {
  const { id } = req.params;
  db.getAmenities(id)
    .then((data) => {
      res.end(JSON.stringify(data[0]));
    })
    .catch((err) => {
      res.statusCode = 200;
      res.type = 'json';
      res.end(JSON.stringify(err));
    });
});

app.listen(3003);
