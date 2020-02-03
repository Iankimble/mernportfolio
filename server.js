const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
dotenv.config();

const app = express();

//Routes
const contactRoute = require("./routes/contatct-route");

//Middleware
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use("/", contactRoute);
app.use(express.static(path.join(__dirname, "client", "build")));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Port
const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
