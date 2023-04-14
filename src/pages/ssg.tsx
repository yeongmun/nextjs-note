import MeowArticle from "@/components/MeowArticle";
import { Product, getProducts } from "@/service/products";
import Link from "next/link";
import React from "react";

type Props = {
  products: Product[];
};

export default function SSGPage({ products }: Props) {
  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}

//서버상에서 실행한다.(이 페이지는 SSG로 행동을 한다.)
export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: { products },
    // revalidate: 10,//ISR로 해주는 옵션
  };
}
