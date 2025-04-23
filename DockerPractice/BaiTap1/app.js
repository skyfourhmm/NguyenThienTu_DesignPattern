const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Docker!');

  // Log the request to the console
});

app.listen(3000, () => {
  console.log('App is running on port 3000');
});
