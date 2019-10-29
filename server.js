const http = require("http");
const path = require("path");
const express = require("express");
const app = express();

const dataRoute = require("./api/routes/weatherdata");

app.use("/weatherdata", dataRoute);

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
