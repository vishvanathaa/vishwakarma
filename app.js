/* eslint-disable */
var express = require('express');
var path = require('path');

var port = process.env.PORT || 5000;
var app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (_req, res) => {
  res.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=None");
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server started port: ${port}`);
  }
});
