const http = require("http");
const path = require("path");
const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
  }
});

const dataRoute = require("./api/routes/weatherdata");
const dataRouteCainta = require("./api/routes/cainta");

app.use("/weatherdata", dataRoute);
app.use("/cainta", dataRouteCainta);

// Serve static assets in production

if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(port, () => console.log(`Server started on port ${port}`));
