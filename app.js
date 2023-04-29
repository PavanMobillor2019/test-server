const express = require('express');
require('dotenv').config();
var app = express();
var port = process.env.PORT;

app.get('/', (req, res) => {
  res.json({
    status: 200,
    msg: 'This is the first time build... v2',
  });
});

app.listen(port, () => {
  console.log(`Server is listning on port ${port}`);
});
