import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Link from "next/link";
import BarGraph from '../components/GraphList/BarGraph';
import axios from "axios";
import LineGraph from '../components/GraphList/LineGraph';
import PieGraph from '../components/GraphList/PieGraph';
import styles from "../styles/DataGraph.module.css";
import {SubData, SleepData} from "./Data";


export default function Graph() {
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
    return(
      <div className={styles.graph}>
        <div className={styles.content_line} />
        <div className={styles.graph_center}>
          <div className={styles.BarGraph}>
            <BarGraph chartData={subData}/>
          </div>
        </div>
        <div className={styles.content_line} />
        <div className={styles.graph_center}>        
          <div className={styles.LineGraph}>
            <LineGraph chartData={sleepData}/>
          </div>
        </div>
        <div className={styles.content_line} />
        <div className={`${styles.graph_center}`}>
          <div className={styles.PieGraph}>
            <PieGraph chartData={sleepData}/>
          </div>
        </div>
      </div>
    )
}