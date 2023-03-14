import Image from "next/image";
import React from "react";

type Props = { image: string; brand: string };

const DetailImage = (props: Props) => {
  return (
    <>
      <Image
        style={{ objectFit: "contain", margin: "0 auto", width: "100%" }}
        alt={props.brand}
        src={props.image}
        height={240}
        width={240}
      />
    </>
  );
};

export default DetailImage;
