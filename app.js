
const express = require('express');
const app = express();
const path = require("path");
const viewRoutes = require("./router/viewsroutes");

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));



app.use("/",viewRoutes);



const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});