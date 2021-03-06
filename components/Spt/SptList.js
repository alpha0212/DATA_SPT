import {React, useState} from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/SptList.module.css";
import style from "../../styles/Today.module.css";
import axios from "axios";

function SptList({sptData}) {
    const router = useRouter();
    const deleteSpt = async (id) => {
        let data = await axios.delete(`http://localhost:3000/api/spt/${id}`);
        router.push("/spts");
    };
    return (
      <>
        <div className={styles.container}>
          <div>
            <table className={styles.table}>
              <thead className={styles.thead}>
                <tr>
                  <th className={styles.th}>ID</th>
                  <th className={styles.th}>이름</th>
                  <th className={styles.th}>요일</th>
                  <th className={styles.th}>목표기상시간</th>
                  <th className={styles.th}>실제기상시간</th>
                  <th className={styles.th}>목표취침시간</th>
                  <th className={styles.th}>실제취침시간</th>
                  <th className={styles.th}>낮잠시간</th>
                  <th className={styles.th}>국어</th>
                  <th className={styles.th}>영어</th>
                  <th className={styles.th}>수학</th>
                  <th className={styles.th}>과학</th>
                  <th className={styles.th}>사회</th>
                  <th className={styles.th}>한국사</th>
                  <th className={styles.th}>내신기타공부시간</th>
                  <th className={styles.th}>필수시간</th>
                  <th className={styles.th}>휴식시간</th>
                  <th className={styles.th}>휴식할 때 한것</th>
                </tr>
              </thead>

              <tbody className={styles.tbody}>
                {sptData.map((sptData, index) => (
                  <tr key={index}>
                    <th className={styles.td}>{index + 1}</th>
                    <td className={styles.td}>{sptData.spt_name}</td>
                    <td className={styles.td}>{sptData.spt_day}</td>
                    <td className={styles.td}>{sptData.spt_set_morning}</td>
                    <td className={styles.td}>{sptData.spt_morning}</td>
                    <td className={styles.td}>{sptData.spt_set_sleep}</td>
                    <td className={styles.td}>{sptData.spt_sleep}</td>
                    <td className={styles.td}>{sptData.spt_siesta}</td>
                    <td className={styles.td}>{sptData.spt_kor}</td>
                    <td className={styles.td}>{sptData.spt_eng}</td>
                    <td className={styles.td}>{sptData.spt_math}</td>
                    <td className={styles.td}>{sptData.spt_science}</td>
                    <td className={styles.td}>{sptData.spt_community}</td>
                    <td className={styles.td}>{sptData.spt_kh}</td>
                    <td className={styles.td}>{sptData.spt_study}</td>
                    <td className={styles.td}>{sptData.spt_livetime}</td>
                    <td className={styles.td}>{sptData.spt_break}</td>
                    <td className={styles.td}>{sptData.spt_break_action}</td>
                    <td className={styles.td}>
                      <button
                        className={style.Delete_Button}
                        onClick={() => deleteSpt(sptData.spt_id)}
                      >
                        삭제
                      </button>
                      <button className={style.Update_Button}>
                        <Link href={`/spt/${sptData.spt_id}`}>업데이트 및 그래프</Link>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.addEmployeeCenter}>
          <Link href={`/addSpt`}>
            <button className={style.Get_button}>AddSpt</button>
          </Link>
        </div>
      </>
    );
}

export default SptList;