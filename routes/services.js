const express = require("express");
const router = express.Router();
const { Service } = require("../models/service");

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
      res.status(500).send("not stored in database");
    });
});

//GET:find the  service
router.get("/", (req, res) => {
  Service.find()
    .then((serveces) => res.send(serveces))
    .catch((error) => {
      res.status(500).send("something went wrong");
    });
});

//GET:service by ID
router.get("/:serviceid", (req, res) => {
  Service.findById(req.params.serviceid)
    .then((service) => {
      if (service) res.send(service);
      res.status(404).send("service not found");
    })
    .catch((error) => {
      res.status(500).send("ERROR FOUND");
    });
});

//Update data
router.put("/:serviceid", async (req, res) => {
  const updatedService = await Service.findByIdAndUpdate(
    req.params.serviceid,
    {
      name: req.body.bookName,
      author: {
        name: req.body.authorName,
        age: req.body.authorAge,
      },
      genre: req.body.genre,
    },
    { new: true }
  );
  if (!updatedService) res.status(404).send("id not found");
  res.send(updatedService);
});

//delete service
router.delete("/:serviceid", async (req, res) => {
  const service = await Service.findByIdAndRemove(req.params.serviceid);
  if (!service) res.status(404).send("service with id not found");
  res.send(service);
});

module.exports = router;
