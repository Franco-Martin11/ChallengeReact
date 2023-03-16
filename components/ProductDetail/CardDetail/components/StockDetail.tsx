import { fetcher } from "@/utils/Fetcher";
import { formatedNumber } from "@/utils/FormatNumber";
import useSWR from "swr";
import style from "../cardDetail.module.css";

type stockDetail = {
  id: string;
  brand: string;
  origin: string;
};

const StockDetail = ({ id, brand, origin }: stockDetail) => {
  const { data, isLoading, error } = useSWR(
    `api/stock-price?id=${id}`,
    fetcher,
    {
      revalidateOnFocus: false,
      refreshInterval: 5000,
    }
  );
  {
    isLoading && <h1>Loading..</h1>;
  }
  return (
    data && (
      <div className={style.stockDetail_container}>
        <div className={style.stockDetail_brand}>
          <h2>{brand}</h2>
          <div className={style.stockDetail_description}>
            <p>Origin:{origin}</p>
            <div className={style.divider}></div>
            <p>Stock:{data.stock}</p>
          </div>
        </div>
        <h2>{formatedNumber(data.price)}</h2>
      </div>
    )
  );
};

export default StockDetail;
