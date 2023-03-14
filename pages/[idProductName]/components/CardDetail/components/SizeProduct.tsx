import React, { useState } from "react";
import { SizeProduct } from "../models/cardDetail.models";
import style from "../cardDetail.module.css";
type Products = { skus: SizeProduct[]; setIdStock: Function; idStock: string };

const SizeProduct = ({ skus, setIdStock, idStock }: Products) => {
  const [initialProduct, setInitialProduct] = useState(() => skus[0].code);

  const handleClickProduct = (ev: MouseEvent) => setIdStock(ev.target.value);

  return (
    <div className={style.sizeProduct_contianer}>
      {skus.map((product) => (
        <button
          key={product.code}
          value={product.code}
          className={`${
            idStock === product.code
              ? style.sizeProduct_button_active
              : style.sizeProduct_button
          } ${style.sizeProduct_button}`}
          onClick={(ev) => handleClickProduct(ev)}
        >
          {product.name.replace(/\bCans\b/g, "")}
        </button>
      ))}
    </div>
  );
};

export default SizeProduct;
