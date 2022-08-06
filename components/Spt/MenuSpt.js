import React, { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/index.module.css";
import Link from "next/link";

export default function Menu() {
  const router = useRouter();

  return (
    <>
      <div className={styles.button_index}>
        <Link href="/">
          <a className={styles.menu_list}>메인</a>
        </Link>
        <Link href="/addSpt">
          <a className={styles.menu_list}>시간적기</a>
        </Link>
        <Link href="/spts">
          <a className={styles.menu_list}>목록(admin)</a>
        </Link>
        <Link href="/mentor">
          <a className={styles.menu_list}>멘토구함</a>
        </Link>
        <Link href="/mentee">
          <a className={styles.menu_list}>멘티구함</a>
        </Link>
        <Link href="/Register">
          <a className={styles.menu_list}>회원가입</a>
        </Link>
        <Link href="/login">
          <a className={styles.menu_list}>로그인</a>
        </Link>
      </div>
      <div className={styles.content_line}></div>
    </>
  );
}
