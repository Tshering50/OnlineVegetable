
const express = require('express');
const app = express();
const path = require("path");
const viewRoutes = require("./router/viewsroutes");
const dotenv = require('dotenv')
dotenv.config({ path: './.env' })

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
const mongoose = require('mongoose')



app.use("/",viewRoutes);

const local_DB = process.env.DATABASE_LOCAL

mongoose.connect(local_DB).then((con) => {
  // console.log(con.connections)
  console.log('DB local connection successful')
}).catch(error => console.log(error));


const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});