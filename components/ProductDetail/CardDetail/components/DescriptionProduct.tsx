import React from "react";

type Props = { desciption: string };

const DescriptionProduct = ({ desciption }: Props) => {
  return (
    <div>
      <h3>Description</h3>
      <p>{desciption}</p>
    </div>
  );
};

export default DescriptionProduct;
