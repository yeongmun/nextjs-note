"use client";
import React, { useEffect, useState } from "react";
import styles from "./MeowArticle.module.css";

export default function MeowArticle() {
  const [text, setText] = useState("데이터 준비중...");

  useEffect(() => {
    //    //fetch를 쓸 때 SSG, ISR, SSR설정해주는 방법들
    // const res = await fetch("https://meowfacts.herokuapp.com", {
    //   // next: { revalidate: 0 }, //ISR로 만들어줌 0을 옵션으로 주면 SSR로 만들어줌
    //   // cache: 'no-store' //no-store SSR로 만들어줌
    // });
    // const data = await res.json();
    // const factText = data.data[0];

    const res = fetch("https://meowfacts.herokuapp.com")
      .then((res) => res.json())
      .then((data) => {
        setText(data.data[0]);
      });
  }, []);

  return <article className={styles.article}>{text}</article>;
}
