const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve the static files for the app
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
