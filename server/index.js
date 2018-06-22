const express = require("express");
const bodyParser = require("body-parser");

const endPoints = require('./config');

const productsController = require("./controllers/products");
const categoriesController = require("./controllers/categories");
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Test");
});

app.get("/products", productsController.getProducts);

app.get("/categories", categoriesController.getCategories);

const http = require("http").Server(app);

/* Socket.io bootstrap */

const io = require("socket.io")(http);

io.on("connection", socket => {
  console.log("a user connected");
});

/* app startup */

http.listen(endPoints.API_PORT, () => {
  console.log(`Express running on port 8079`);
});
