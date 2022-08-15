// Import express
const express = require("express");

const router = express.Router();
const auth = require("../middleware/auth");
const likeCtrl = require("../controllers/likes");

router.post("/:id/like", auth, likeCtrl.likeStatus);

module.exports = router;
