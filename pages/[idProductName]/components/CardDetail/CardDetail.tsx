import { DataProducts } from "@/pages/api/models/api.models";
import { useState } from "react";
import style from "./cardDetail.module.css";
import {
  ActionBar,
  DescriptionProduct,
  DetailImage,
  SizeProduct,
  StockDetail,
} from "./components";

type Props = { data: DataProducts };

const CardDetail = ({
  data: { id, brand, image, origin, information, skus },
}: Props) => {
  const [idStock, setIdStock] = useState(() => skus[0].code);

  return (
    <>
      <div className={style.cardDetail_container}>
        <DetailImage brand={brand} image={image} />
        <div className={style.cardDetail_info}>
          <StockDetail id={idStock} brand={brand} origin={origin} />
          <DescriptionProduct desciption={information} />
          <SizeProduct skus={skus} setIdStock={setIdStock} idStock={idStock} />
          <ActionBar />
        </div>
      </div>
    </>
  );
};

export default CardDetail;
