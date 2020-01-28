const router = require("express").Router();
let Excercise = require("../models/exercise.model");

router.route("/").get((req, res) => {
  Excercise.find()
    .then(excercises => res.json(excercises))
    .catch(err => res.status(400).json("Error" + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const duration = Number(req.body.duration);
  const description = req.body.description;
  const date = Date.parse(req.body.date);
  const newExcercise = new Excercise({ username, duration, description, date });
  newExcercise
    .save()
    .then(excercises => res.json("Excercise added"))
    .catch(err => res.status(400).json("Error" + err));
});

router.route("/:id").get((req, res) => {
  Excercise.findById(req.params.id)
    .then(excercise => {
      res.json(excercise);
    })
    .catch(err => {
      res.status(400).json("Error" + err);
    });
});

router.route("/:id").delete((req, res) => {
  Excercise.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json("excercise deleted");
    })
    .catch(err => {
      res.status(400).json("Error" + err);
    });
});

router.route("/update/:id").post((req, res) => {
  Excercise.findById(req.params.id)
    .then(excercise => {
      excercise.username = req.body.username;
      excercise.duration = Number(req.body.duration);
      excercise.description = req.body.description;
      excercise.data = Date.parse(req.body.date);

      excercise
        .save()
        .then(excercises => res.json("Excercise Updated"))
        .catch(err => res.status(400).json("Error" + err));
    })
    .catch(err => {
      res.status(400).json("Error" + err);
    });
});

module.exports = router;
