import React, { useEffect } from 'react';
import Title from "../components/Title";
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter();

  return (
    <main>
      <Title title="Home" />
    </main>
  );
}



