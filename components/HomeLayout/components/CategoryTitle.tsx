import Link from "next/link";
import React from "react";
import style from "../homeLayout.module.css";
type Props = { categoryTitle: string; route: string };

const CategoryTitle = (props: Props) => {
  return (
    <div className={style.headingCategory_container}>
      <h4>{props.categoryTitle}</h4>
      <Link href={props.route} className={style.button_heading}>
        See All
      </Link>
    </div>
  );
};

export default CategoryTitle;
