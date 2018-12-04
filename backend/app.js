var express = require('express');
const app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

const OrdersRoutes = require('./routes/orders');

mongoose.connect("mongodb+srv://ortal:fG0G6i3rx8oLGcau@cluster0-4attw.mongodb.net/project?retryWrites=true")
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('connection failed!');
  });

var port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });
  

app.use("/orderlist", OrdersRoutes);
app.use("/create", OrdersRoutes);

module.exports = app;

app.listen(port, function() {
    console.log('app listening on port: ' + port);
})


