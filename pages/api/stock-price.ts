// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import products from "../../constant/products";
import stockPrice from "../../constant/stock-price";
import { DataProducts, Message, StockPrice } from "./models/api.models";
import { NextApiRequest, NextApiResponse } from "next";

interface ProductId {
  DataProducts: DataProducts[];
  Stock: StockPrice;
}
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<StockPrice | Message>
) {
  if (req.method === "GET") {
    const { id } = req.query;

    if (id) {
      const stock = stockPrice[Number(id)];
      stock
        ? res.status(200).json(stock)
        : res.status(404).json({ message: "Product not found" });
    } else {
      res.status(200).json(stockPrice);
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
