import styles from "../styles/NavBar.module.css";
import Link from "next/link";
import MenuSpt from "./Spt/MenuSpt";
import { useRouter } from "next/router";
import Image from "next/image";
import React from 'react';

export default function NavBar(){
    const router = useRouter();
    return (
      <>
        <MenuSpt />
        <Image
          className={styles.book_image}
          src="/book3.jpg"
          width="1920"
          height="550"
        />
        <div className={styles.NavBar_container}>
          <Link href="/">
            <a className={router.pathname === "/" ? "active" : ""}>
              <span className={styles.Title_index_text}>
                STUDY PLAN TRAINING
              </span>
            </a>
          </Link>
        </div>
      </>
    );
    
}


 