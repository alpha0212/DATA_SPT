import { useState } from 'react';
import BarGraph from '../components/GraphList/BarGraph';
import LineGraph from '../components/GraphList/LineGraph';
import PieGraph from '../components/GraphList/PieGraph';
import styles from "../styles/DataGraph.module.css";
import {UserData} from "./Data";


export default function Graph() {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.sub),
    datasets: [
      {
        label: "시간데이터",
        data: UserData.map((data) => data.time),
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
            <BarGraph chartData={userData}/>
          </div>
        </div>
        <div className={styles.content_line} />
        <div className={styles.graph_center}>        
          <div className={styles.LineGraph}>
            <LineGraph chartData={userData}/>
          </div>
        </div>
        <div className={styles.content_line} />
        <div className={`${styles.graph_center}`}>
          <div className={styles.PieGraph}>
            <PieGraph chartData={userData}/>
          </div>
        </div>
      </div>
    )
}