const express = require("express");
const router = express.Router();
const User = require("../INIT/config");

router.get("/", (req, res) => {
  return res.render("hai");
});

router.post("/honghaine", async (req, res) => {
  let date = new Date();
  let day = date.getDate().toString();
  let month = (date.getMonth() + 1).toString();
  let year = date.getFullYear().toString();
  let dateSave = day.concat("-", month, "-", year);
  let data = req.body;

  let userQuestions = {
    "Date": dateSave,
    "Question": data.question
  }

  await User.add(userQuestions);
  return res.redirect("/");
});

module.exports = router;
