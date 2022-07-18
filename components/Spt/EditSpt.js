import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/Today.module.css";
import Title from "../Title";
import styled from "../../styles/DataGraph.module.css";
import BarGraph from "../GraphList/BarGraph";
import LineGraph from "../GraphList/LineGraph";
import PieGraph from "../GraphList/PieGraph";

function EditSpt({ sptUpdateData }) {
  console.log("sptid", sptUpdateData);
  const router = useRouter();
  const [addSpt, setSpt] = useState({
    spt_day: "",
    spt_name: "",
    spt_set_morning: "",
    spt_morning: "",
    spt_set_sleep: "",
    spt_sleep: "",
    spt_siesta: "",
    spt_kor: "",
    spt_eng: "",
    spt_math: "",
    spt_science: "",
    spt_community: "",
    spt_kh: "",
    spt_study: "",
    spt_livetime: "",
    spt_break: "",
    spt_break_action: "",
  });
  useEffect(() => {
    setSpt(sptUpdateData[0]);
  }, [sptUpdateData]);
  const onSubmit = async (e) => {
    e.preventDefault();
    let data = await axios.put(
      `http://localhost:3000/api/spt/${sptUpdateData[0].spt_id}`,
      addSpt
    );
    if (data.data) router.push("/spts");
    setSpt({
      spt_day: "",
      spt_set_morning: "",
      spt_morning: "",
      spt_set_sleep: "",
      spt_sleep: "",
      spt_siesta: "",
      spt_kor: "",
      spt_eng: "",
      spt_math: "",
      spt_science: "",
      spt_community: "",
      spt_kh: "",
      spt_study: "",
      spt_livetime: "",
      spt_break: "",
      spt_break_action: "",
    });
  };
  console.log("여기에요!", addSpt.spt_break);
  const handleChange = (e) => {
    const value = e.target.value;
    console.log("value", value);
    d4;
    setSpt({ ...addSpt, [e.target.name]: value });
  };
  const SubData = [
    {
      id: 1,
      sub: "국어",
      time: sptUpdateData[0].spt_kor,
    },
    {
      id: 2,
      sub: "영어",
      time: sptUpdateData[0].spt_eng,
    },
    {
      id: 3,
      sub: "수학",
      time: sptUpdateData[0].spt_math,
    },
    {
      id: 4,
      sub: "과학",
      time: sptUpdateData[0].spt_science,
    },
    {
      id: 5,
      sub: "사회",
      time: sptUpdateData[0].spt_community,
    },
    {
      id: 6,
      sub: "한국사",
      time: sptUpdateData[0].spt_kh,
    },
    {
      id: 7,
      sub: "공부",
      time: sptUpdateData[0].spt_study,
    },
  ];

  const SleepData = [
    {
      id: 1,
      sub: "목표기상시간",
      time: sptUpdateData[0].spt_morning,
    },
    {
      id: 2,
      sub: "실제기상시간",
      time: sptUpdateData[0].spt_set_morning,
    },
    {
      id: 3,
      sub: "목표취침시간",
      time: sptUpdateData[0].spt_set_sleep,
    },
    {
      id: 4,
      sub: "실제취침시간",
      time: sptUpdateData[0].spt_sleep,
    },
  ];
  const [subData, setUserData] = useState({
    labels: SubData.map((data) => data.sub),
    datasets: [
      {
        label: "시간데이터",
        data: SubData.map((data) => data.time),
        backgroundColor: [
          "#f4f0e6",
          "#d9d9f3",
          "#ceefe4",
          "#9dd3a8",
          "#96ceb4",
          "#ffeead",
          "#d9534f",
          "#ffad60",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  const [sleepData, setSleepData] = useState({
    labels: SleepData.map((data) => data.sub),
    datasets: [
      {
        label: "시간데이터",
        data: SleepData.map((data) => data.time),
        backgroundColor: [
          "#f4f0e6",
          "#d9d9f3",
          "#ceefe4",
          "#9dd3a8",
          "#96ceb4",
          "#ffeead",
          "#d9534f",
          "#ffad60",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <>
      <Title title="Today" />
      <div className={styles.content_line}>Input Now</div>
      <div className={styles.input_center}>
        <form onSubmit={onSubmit}>
          <div className={styles.input_background}>
            {addSpt.spt_name} 학생 데이터
          </div>

          <div className={styles.input_background}>
            <input
              type="radio"
              className={styles.input_time}
              name="spt_day"
              placeholder="요일"
              onChange={handleChange}
              value={`월`}
            />
            월
            <input
              type="radio"
              className={styles.input_time}
              name="spt_day"
              placeholder="요일"
              onChange={handleChange}
              value={`화`}
            />
            화
            <input
              type="radio"
              className={styles.input_time}
              name="spt_day"
              placeholder="요일"
              onChange={handleChange}
              value={`수`}
            />
            수
            <input
              type="radio"
              className={styles.input_time}
              name="spt_day"
              placeholder="요일"
              onChange={handleChange}
              value={`목`}
            />
            목
            <input
              type="radio"
              className={styles.input_time}
              name="spt_day"
              placeholder="요일"
              onChange={handleChange}
              value={`금`}
            />
            금
            <input
              type="radio"
              className={styles.input_time}
              name="spt_day"
              placeholder="요일"
              onChange={handleChange}
              value={`토`}
            />
            토
            <input
              type="radio"
              className={styles.input_time}
              name="spt_day"
              placeholder="요일"
              onChange={handleChange}
              value={`일`}
            />
            일
          </div>

          <div className={styles.input_background}>
            <input
              type="text"
              className={styles.input_time}
              name="spt_set_morning"
              placeholder="목표기상시간"
              onChange={handleChange}
              value={addSpt.spt_set_morning}
            />
          </div>
          <div className={styles.input_background}>
            <input
              type="text"
              className={styles.input_time}
              name="spt_morning"
              placeholder="실제기상시간"
              onChange={handleChange}
              value={addSpt.spt_morning}
            />
          </div>
          <div className={styles.input_background}>
            <input
              type="text"
              className={styles.input_time}
              name="spt_set_sleep"
              placeholder="목표취침시간"
              onChange={handleChange}
              value={addSpt.spt_set_sleep}
            />
          </div>
          <div className={styles.input_background}>
            <input
              type="text"
              className={styles.input_time}
              name="spt_sleep"
              placeholder="실제취침시간"
              onChange={handleChange}
              value={addSpt.spt_sleep}
            />
          </div>
          <div className={styles.input_background}>
            <input
              type="text"
              className={styles.input_time}
              name="spt_siesta"
              placeholder="낮잠시간"
              onChange={handleChange}
              value={addSpt.spt_siesta}
            />
          </div>
          <div className={styles.input_background}>
            <input
              type="text"
              className={styles.input_time}
              name="spt_kor"
              placeholder="국어"
              onChange={handleChange}
              value={addSpt.spt_kor}
            />
          </div>
          <div className={styles.input_background}>
            <input
              type="text"
              className={styles.input_time}
              name="spt_eng"
              placeholder="영어"
              onChange={handleChange}
              value={addSpt.spt_eng}
            />
          </div>
          <div className={styles.input_background}>
            <input
              type="text"
              className={styles.input_time}
              name="spt_math"
              placeholder="수학"
              onChange={handleChange}
              value={addSpt.spt_math}
            />
          </div>
          <div className={styles.input_background}>
            <input
              type="text"
              className={styles.input_time}
              name="spt_science"
              placeholder="과학"
              onChange={handleChange}
              value={addSpt.spt_science}
            />
          </div>
          <div className={styles.input_background}>
            <input
              type="text"
              className={styles.input_time}
              name="spt_community"
              placeholder="사회"
              onChange={handleChange}
              value={addSpt.spt_community}
            />
          </div>
          <div className={styles.input_background}>
            <input
              type="text"
              className={styles.input_time}
              name="spt_kh"
              placeholder="한국사"
              onChange={handleChange}
              value={addSpt.spt_kh}
            />
          </div>
          <div className={styles.input_background}>
            <input
              type="text"
              className={styles.input_time}
              name="spt_study"
              placeholder="내신공부시간"
              onChange={handleChange}
              value={addSpt.spt_study}
            />
          </div>
          <div className={styles.input_background}>
            <input
              type="text"
              className={styles.input_time}
              name="spt_livetime"
              placeholder="필수시간"
              onChange={handleChange}
              value={addSpt.spt_livetime}
            />
          </div>
          <div className={styles.input_background}>
            <input
              type="text"
              className={styles.input_time}
              name="spt_break"
              placeholder="휴식시간"
              onChange={handleChange}
              value={addSpt.spt_break}
            />
          </div>
          <div className={styles.input_background}>
            <input
              type="text"
              className={styles.input_time}
              name="spt_break_action"
              placeholder="휴식 때 한것"
              onChange={handleChange}
              value={addSpt.spt_break_action}
            />
          </div>
          <div className={styles.input_center}>
            <button className={styles.Get_button} type="submit">
              Submit
            </button>
            <button className={styles.Get_button}>
              <Link href={`/spts`}>Back</Link>
            </button>
          </div>
        </form>
      </div>
      <div className={styled.graph}>
        <div className={styled.content_line} />
        <div className={styled.graph_center}>
          <div className={styled.BarGraph}>
            <BarGraph chartData={subData} />
          </div>
        </div>
        <div className={styled.content_line} />
        <div className={styled.graph_center}>
          <div className={styled.LineGraph}>
            <LineGraph chartData={sleepData} />
          </div>
        </div>
        <div className={styled.content_line} />
        <div className={`${styled.graph_center}`}>
          <div className={styled.PieGraph}>
            <PieGraph chartData={subData} />
          </div>
        </div>
      </div>
    </>
  );
  
}

export default EditSpt;
