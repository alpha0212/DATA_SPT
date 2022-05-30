import React, { useEffect } from 'react';
import Title from "../components/Title";
import { useRouter } from "next/router";
import styles from "../styles/index.module.css";
import Link from "next/link";


export default function Home() {
  const router = useRouter();

  return (
    <main>
      <Title title="Home" />
      <div className={styles.button_index}>
        <Link href="/Menu">
          <button className={styles.Get_button}><a >Get Started</a></button>
        </Link>
        
      </div>
    </main>
  );
}



