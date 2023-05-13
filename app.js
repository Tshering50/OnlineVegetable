
const express = require('express');
const app = express();
const path = require("path");
const viewRoutes = require("./routers/viewRouter");

app.set("view engine", "html");

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods', ['GET', 'POST', 'PUT', 'DELETE']);
  next();
})


app.use("/",viewRoutes);

app.use(express.static(path.join(__dirname, "views")));


const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});