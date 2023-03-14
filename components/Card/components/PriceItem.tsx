import { PlusIcon } from "@/components/icon";
import { fetcher } from "@/utils/Fetcher";
import { formatedNumber } from "@/utils/FormatNumber";
import useSWR from "swr";
import style from "../card.module.css";
type id = {
  id: {
    code: string;
    name: string;
  };
};

const PriceItem = ({ id }: id) => {
  const { data, isLoading, error } = useSWR(
    `api/stock-price?id=${id.code}`,
    fetcher,
    {
      refreshInterval: 10000,
    }
  );
  return (
    data && (
      <>
        <div className={style.description_card}>
          <span>{formatedNumber(data.price)}</span>
          <PlusIcon />
        </div>
      </>
    )
  );
};

export default PriceItem;
