const express = require("express");
const router = express.Router();
const Service = require("../models/service");

//Post:creat new service
router.post("/", (req, res) => {
  service = new Service({
    name: req.body.bookName,
     author: {
       name: req.body.authorName,
      age: req.body.authorAge,
    },
    genre: req.body.genre,
  });

  service
    .save()
    .then((service) => {
      res.send(service);
    })
    .catch((error) => {
      res.status(500).send("not stored in bd");
    });
});

module.exports = router;
