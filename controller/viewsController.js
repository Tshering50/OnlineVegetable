const path = require("path");
const axios = require('axios');

exports.getIndex = (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "index.html"));
};
