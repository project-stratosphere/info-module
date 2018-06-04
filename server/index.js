const express = require('express');
const path = require('path');

const app = express();

app.use(/(\/rooms\/100|\/rooms\/[1-9][0-9]|\/rooms\/[1-9])\b/, express.static(path.join(__dirname, '../client/dist/')));

app.get('/api/rooms/:id/general', (req, res) => {
  const { id } = req.params;

  res.end(id);
});

app.get('/api/rooms/:id/amenities', (req, res) => {
  const { id } = req.params;
  res.end(id);
});

app.listen(3003);
