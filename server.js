const http = require("http");
const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

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

const port = process.env.PORT || 8080;

const server = http.createServer(app);

server.listen(port, () => console.log(`Server started on port ${port}`));
