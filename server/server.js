const express = require("express");
const { executeQuery } = require("../config/db");
const port = process.env.PORT || 9000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/spt", async (req, res) => {
  try {
    let sptData = await executeQuery("select * from spt");
    res.status(200).json(sptData);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get("/spt/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let sptData = await executeQuery(
      "select * from spt where spt_id=?",
      [id]
    );
    res.status(200).json(sptData);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.post("/saveSpt", async (req, res) => {
  try {
    const { spt_day, spt_name, spt_set_morning, spt_morning, spt_set_sleep, spt_sleep, spt_siesta, spt_kor, spt_eng, spt_math, spt_science, spt_community, spt_kh, spt_study, spt_livetime, spt_break, spt_break_action} = req.body;
    let sptData = await executeQuery(
      "insert into spt(spt_day, spt_name, spt_set_morning, spt_morning, spt_set_sleep, spt_sleep, spt_siesta, spt_kor, spt_eng, spt_math, spt_science, spt_community, spt_kh, spt_study, spt_livetime, spt_break, spt_break_action) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
      [spt_day, spt_set_morning, spt_morning, spt_set_sleep, spt_sleep, spt_siesta, spt_kor, spt_eng, spt_math, spt_science, spt_community, spt_kh, spt_study, spt_livetime, spt_break, spt_break_action, spt_name]
    );
    res.status(201).json(sptData);
  } catch (err) {
    res.status(400).json(err);
  }
});
const Multer = require("multer");
const FormData = require("form-data");
const _ = require("lodash");
const path = require("path");
const fs = require("fs");
let multer = Multer({
  storage: Multer.MemoryStorage,
  limits: {
    fileSize: 100 * 1024 * 1024,
  },
});


app.listen(port, () => console.log(`server is running on port ${port}`));
