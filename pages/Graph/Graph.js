import { useState } from 'react';
import BarGraph from '../components/Graph/BarGraphrGraph';
import LineGraph from '../components/Graph/LineGrapheGraph';
import PieGraph from '../components/Graph/PieGrapheGraph';
import {TimeData} from "../Dataa";
import styles from "../styles/DataGraph.module.css";


export default function Graph() {
  const TimeData = [
    {
      sub: "수학",
      time: 14,
    },
    {
      sub: "수학",
      time: 14,
    },
    {
      sub: "수학",
      time: 14,
    },
    {
      sub: "수학",
      time: 14,
    },
    {
      sub: "수학",
      time: 14,
    },
    {
      sub: "수학",
      time: 14,
    },
  ]
  const [timeData, setTimeData] = useState({
    labels: TimeData.map((data) => data.sub),
    datasets: [
      {
        label: "공부시간",
        data: TimeData.map((data) => data.time),
        backgroundColor:[
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
          "red",
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
            <BarGraph chartData={timeData}/>
          </div>
        </div>
        <div className={styles.content_line} />
        <div className={styles.graph_center}>        
          <div className={styles.LineGraph}>
            <LineGraph chartData={timeData}/>
          </div>
        </div>
        <div className={styles.content_line} />
        <div className={`${styles.graph_center}`}>
          <div className={styles.PieGraph}>
            <PieGraph chartData={timeData}/>
          </div>
        </div>
      </div>
    )
}