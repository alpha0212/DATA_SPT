const express = require("express");
const { executeQuery } = require("../config/db");
const port = 9000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/employee", async (req, res) => {
  try {
    let employeeData = await executeQuery("select * from employee");
    res.status(200).json(employeeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get("/employee/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let employeeData = await executeQuery(
      "select * from employee where emp_id=?",
      [id]
    );
    res.status(200).json(employeeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.post("/saveEmployee", async (req, res) => {
  try {
    const { emp_name, emp_email, emp_address, emp_phone } = req.body;
    let employeeData = await executeQuery(
      "insert into employee(emp_name,emp_email,emp_address,emp_phone) values(?,?,?,?)",
      [emp_name, emp_email, emp_address, emp_phone]
    );
    res.status(201).json(employeeData);
  } catch (err) {
    res.status(400).json(err);
  }
});
const Multer = require("multer");
const FormData = require("form-data");
const _ = require("lodash");
const path = require("path");
const fs = require("fs");
// const upload = multer({
//   storage: multer.diskStorage({
//     destination: "./public/uploads",
//     filename: (req, file, cb) => cb(null, file.originalname),
//   }),
// });
// const uploadFile = upload.single("file");
let multer = Multer({
  storage: Multer.MemoryStorage,
  limits: {
    fileSize: 100 * 1024 * 1024,
  },
});


app.listen(port, () => console.log(`server is running on port ${port}`));
