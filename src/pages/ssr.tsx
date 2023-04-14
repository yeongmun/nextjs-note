import MeowArticle from "@/components/MeowArticle";
import { Product, getProducts } from "@/service/products";
import Link from "next/link";
import React from "react";

type Props = {
  products: Product[];
};

export default function SSRPage({ products }: Props) {
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

//서버상에서 실행한다.(이 페이지는 SSR로 행동을 한다.)
export async function getServerSideProps() {
  const products = await getProducts();
  return {
    props: { products },
  };
}
