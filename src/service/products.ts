import path from "path";
import { promises as fs } from "fs";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

//Promise로만 썻으면 ts는 return의 type을 {}로 추론했을 것
export async function getProducts(): Promise<Product[]> {
  //path.join은 상대경로로 만들어줌 ex)../../data/products.json | process.cwd()현재경로
  const filePath = path.join(process.cwd(), "data", "products.json");
  //파일 읽는 함수(파일경로, 인코딩방법)
  const data = await fs.readFile(filePath, "utf-8");

  return JSON.parse(data);
}

export async function getProduct(id: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((item) => item.id === id);
}
