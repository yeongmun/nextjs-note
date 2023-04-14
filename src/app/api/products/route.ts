import { getProducts } from "@/service/products";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const products = await getProducts();
  return NextResponse.json({ products });
}

//13이전방식

// import { Product, getProducts } from "@/service/products";
// import type { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Product[]>
// ) {
//   if (req.method === "GET") {
//     const products = await getProducts();
//     return res.status(200).json(products);
//   }
//   res.status(200);
// }
