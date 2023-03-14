import { BackIcon, KebabIcon } from "@/components";
import { useRouter } from "next/router";
import React from "react";
import style from "./navbar.module.css";

type Props = {};

const NavbarDetail = (props: Props) => {
  const router = useRouter();
  const handlePrevPage = (): void => router.back();
  return (
    <div className={style.navbar_container}>
      <button onClick={handlePrevPage}>
        <BackIcon />
      </button>
      <h2>Detail</h2>
      <KebabIcon />
    </div>
  );
};

export default NavbarDetail;
