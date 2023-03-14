import Image from "next/image";
import React, { useCallback, useState } from "react";
import style from "./card.module.css";
import Link from "next/link";
import { DataProducts } from "@/pages/api/models/api.models";
import PriceItem from "./components/PriceItem";

type Props = { props: DataProducts; index: number };

const ItemCard = ({ props, index }: Props): JSX.Element => {
  const { image, skus } = props;
  //create a state to set a fallback if necessary
  const [imgSrc, serImgSrc] = useState(image);

  const replaceSpacesWithDashes = useCallback((str: string) => {
    return str.toLowerCase().replace(/\s+/g, "-");
  }, []);

  return (
    <div className={style.home_card_container}>
      <Link
        className={style.link}
        href={`/${props.id}-${replaceSpacesWithDashes(props.brand)}`}
      >
        <div
          className={`${style.home_card} ${
            index % 2 !== 0 ? style.home_card_odd : style.home_card_even
          }`}
        >
          <h3 className={style.home_title}>{props.brand}</h3>
          <Image
            width={122}
            height={122}
            src={imgSrc}
            style={{ objectFit: "contain" }}
            // onError={() => serImgSrc("")}
            alt={props.brand}
          />
        </div>
      </Link>
      <PriceItem id={skus[0]} />
    </div>
  );
};

export default ItemCard;
