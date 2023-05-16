const path = require("path");
const axios = require('axios');

exports.getIndex = (req, res) => {
  res.render("index");
};

