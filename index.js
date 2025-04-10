const express = require('express');
const app = express(); // Declare only once
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
