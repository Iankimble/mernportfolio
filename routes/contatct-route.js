const express = require("express");
const { sendMsg } = require("../controller/contact-controller");

const router = express.Router();

router.post("/sendMsg", sendMsg);

module.exports = router;
