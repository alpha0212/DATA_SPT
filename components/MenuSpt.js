import React, { useEffect } from 'react';
import Title from "../components/Title";
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
                    <button className={styles.Get_button}><a >공부시간 적으러 가기</a></button>
                </Link>
                <Link href="/spts">
                    <button className={styles.Get_button}><a>목록(admin)</a></button>
                </Link> 
            </div>
        </>
    )
}
