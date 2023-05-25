
const express = require('express');
const path = require("path");
const viewRoutes = require("./router/viewsroutes");
const dotenv = require('dotenv')
dotenv.config({ path: './.env' })
const mongoose = require('mongoose')
const user = require("./router/userrouter")
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));




app.use("/",viewRoutes);

const local_DB = process.env.DATABASE_LOCAL

mongoose.connect(local_DB).then((con) => {
  // console.log(con.connections)
  console.log('DB local connection successful')
}).catch(error => console.log(error));

app.get('/', (req, res)=>{
  try{
     res.render('index') 
  }catch(err){
      res.render('register', { error: err.message });
  }
})




const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});