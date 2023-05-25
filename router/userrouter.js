const express = require("express")
const router = express.Router();
 const User = require("../model/user")


router.post('/register', async (req, res) => {
    try {
      // Create a new user
        const user = new User({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phoneno: req.body.phoneno,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword,
        
      });
  
      // Save the user to the database
      await user.save();
      res.render("index");
  
      res.status(200).send('User created successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while creating the user');
    }
  });
  module.exports = router