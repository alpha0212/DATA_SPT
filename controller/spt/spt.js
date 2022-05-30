import { executeQuery } from "../../config/db";
import sptValidation from "../../common/sptValidator";
import ErrorHandler from "../../common/errorHandler";
const getAllSpts = async (req, res) => {
  try {
    console.log("all the spts");
    let sptData = await executeQuery("select * from spt", []);
    res.send(sptData);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getSptById = async (req, res, next) => {
  let id = req.query.id;
  try {
    console.log("spt by id");
    let sptData = await executeQuery(
      `select * from spt where spt_id=${id}`,
      []
    );
    if (sptData.length > 0) res.status(200).json(sptData);
    else {
      next(new ErrorHandler(`no spt found with this id ${id}`, 404));
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteSptById = async (req, res, next) => {
  let id = req.query.id;
  try {
    let sptData = await executeQuery(
      "delete from spt where spt_id=?",
      [id]
    );
    res.status(200).json("Spt Deleted Successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

const saveSpt = async (req, res) => {
  try {
    const result = req.body;
    const { spt_day, spt_set_morning, spt_morning, spt_set_sleep, spt_sleep, spt_siesta, spt_kor, spt_eng, spt_math, spt_science, spt_community, spt_kh, spt_study, spt_livetime, spt_break, spt_break_action } = result;
    let { error } = sptValidation(result);
    if (error) {
      console.log("입력되지 않은 칸이 있습니다.");
    } else {
      console.log("post request");
      let sptData = await executeQuery(
        "insert into spt(spt_day, spt_set_morning, spt_morning, spt_set_sleep, spt_sleep, spt_siesta, spt_kor, spt_eng, spt_math, spt_science, spt_community, spt_kh, spt_study, spt_livetime, spt_break, spt_break_action) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [spt_day, spt_set_morning, spt_morning, spt_set_sleep, spt_sleep, spt_siesta, spt_kor, spt_eng, spt_math, spt_science, spt_community, spt_kh, spt_study, spt_livetime, spt_break, spt_break_action]
      );
      sptData = await executeQuery(
        `select * from spt where spt_id=${sptData.insertId}`
      );
      res.status(201).json(sptData);
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

const updateSpt = async (req, res) => {
  let id = req.query.id;
  console.log("id", id);
  const { spt_day, spt_set_morning, spt_morning, spt_set_sleep, spt_sleep, spt_siesta, spt_kor, spt_eng, spt_math, spt_science, spt_community, spt_kh, spt_study, spt_livetime, spt_break, spt_break_action } = req.body;
  console.log("req.body", req.body);
  try {
    let sptData = await executeQuery(
      "select * from spt where spt_id=?",
      [id]
    );
    if (sptData.length > 0) {
      console.log("putrequest", sptData);
      sptData = await executeQuery(
        `update spt set spt_day=?, spt_set_morning=?, spt_morning=?, spt_set_sleep=?, spt_sleep=?, spt_siesta=?, spt_kor=?, spt_eng=?, spt_math=?, spt_science=?, spt_community=?, spt_kh=?, spt_study=?, spt_livetime=?, spt_break=?, spt_break_action=? where spt_id=${id}`,
        [spt_day, spt_set_morning, spt_morning, spt_set_sleep, spt_sleep, spt_siesta, spt_kor, spt_eng, spt_math, spt_science, spt_community, spt_kh, spt_study, spt_livetime, spt_break, spt_break_action]
      );
      res.status(200).json(sptData);
    } else {
      res.status(400).json(`spt not found on this id=${id}`);
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

export {
  getAllSpts,
  getSptById,
  deleteSptById,
  saveSpt,
  updateSpt,
};
