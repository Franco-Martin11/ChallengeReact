import Image from "next/image";
import React, { useState } from "react";
import style from "../homeLayout.module.css";
import CategoryTitle from "./CategoryTitle";

const CategoryFilterData = [
  {
    value: "all",
    title: "All",
    icon: null,
    id: 11,
  },
  {
    value: "beer",
    title: "Beer",
    icon: "/icons/Beer.png",
    id: 112,
  },
  {
    value: "wine",
    title: "Wine",
    icon: "/icons/Wine-glass.png",
    id: 113,
  },
];
const CategoryFilter = () => {
  const [filter, setFilter] = useState<string>("");

  const handleSetValue = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setFilter(event.target.value);
  };

  return (
    <div className={style.category_section}>
      <CategoryTitle categoryTitle="Drink Category" route="/SeeAll" />
      <div className={style.category_container}>
        {CategoryFilterData.map((category) => (
          <button
            key={category.id}
            value={category.value}
            onClick={(ev) => handleSetValue(ev)}
            className={
              filter === category.value
                ? style.categoryButton_focused
                : style.category_button
            }
          >
            {category.icon && (
              <Image
                src={category.icon}
                width={22}
                height={22}
                alt={category.title}
              />
            )}
            {category.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
