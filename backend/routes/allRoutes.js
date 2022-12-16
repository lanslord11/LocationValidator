const express = require("express");
const {newEntry,deleteEntry ,getAllEntries} = require("../controllers/allControllers");
const router = express.Router();


router.route("/dataEntry").get(getAllEntries).post( newEntry).delete(deleteEntry);

module.exports = router;