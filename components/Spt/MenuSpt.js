import React, { useEffect } from 'react';
import Title from "../Title"
import { useRouter } from "next/router";
import styles from "../styles/index.module.css";
import Image from "next/image";
import Link from "next/link";


export default function Menu(){
    const router = useRouter();

    return (
        <>
            <div className={styles.button_index}>

                <Link href="/addSpt">
                    <a className={styles.menu_list}>공부시간 적으러 가기</a>
                </Link>
                <Link href="/spts">
                    <a className={styles.menu_list}>목록(admin)</a>
                </Link> 
                <Link href="/Graph">
                    <a className={styles.menu_list}>그래프</a>
                </Link>
            </div>
            <div className={styles.content_line}></div>
        </>
    )
}
