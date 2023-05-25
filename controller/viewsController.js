const path = require("path");
const axios = require('axios');

exports.getIndex = (req, res) => {
  res.render("index");
};

exports.getRegisterform = (req, res) => {
  res.render("register");
};