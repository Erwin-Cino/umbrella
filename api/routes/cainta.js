const axios = require("axios");
const express = require("express");
const router = express.Router();
//https://api.openweathermap.org/data/2.5/weather?id=1728930&appid=145b2c4a907313f560eab59b966a5a64
//874560
const cainta = axios
  .get(
    "https://api.openweathermap.org/data/2.5/weather?id=1720841&appid=145b2c4a907313f560eab59b966a5a64"
  )
  .then(response => {
    // handle success
    router.get("/", (req, res, next) => {
      res.status(200).json(response.data);
    });
  })
  .catch(error => {
    // handle error
    //console.log(error);
  });

module.exports = router;
