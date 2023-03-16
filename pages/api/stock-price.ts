import stockPrice from "../../constant/stock-price";
import { Message, StockPrice } from "./models/api.models";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<StockPrice | Message>
) {
  res.setHeader('Cache-Control', 's-maxage=86400');
  if (req.method === "GET") {
    const { id } = req.query;

    if (id) {
      const stockData: StockPrice = stockPrice;
      const stock = stockData[Number(id)];
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
