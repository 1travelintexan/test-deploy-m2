const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});
router.get("/profile", (req, res) => {
  console.log("sess profile page", req.session);
  res.render("profile", { user: req.session.currentUser });
});

module.exports = router;
