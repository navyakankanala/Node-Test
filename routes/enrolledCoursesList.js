const express = require("express");
const cors = require("cors");

const router = new express.Router();
const dataBaseConnection = require("./dataBaseConnection");
const collections = require("../constants").collections;
const ObjectID = require("mongodb").ObjectID;
const { findAll } = require("./data");

dataBaseConnection().then((dbs) => {
  router.get("/enrolledCoursesList", cors(), async (req, res, next) => {
    try {
      console.log("getAll");
      // findAll(dbs, collections.kot).then(result => res.status(200).send(result));
      findAll(dbs, collections.bookmarksList).then((result) =>
        res.status(200).send(result)
      );
      //console.log("sam",result)
    } catch (error) {
      console.log(error);
    }
  });
});
module.exports = router;
