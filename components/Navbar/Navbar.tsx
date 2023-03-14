import Link from "next/link";
import BagIcon from "../icon/BagIcon";
import CheckOutIcon from "../icon/CheckOutIcon";
import ConfigIcon from "../icon/ConfigIcon";
import HomeIcon from "../icon/HomeIcon";
import style from "./navbar.module.css";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className={style.navbar_container}>
      <Link href={"/"} className={style.icon_container}>
        <HomeIcon />
      </Link>
      <Link href={'/order'} className={style.icon_container}>
        <CheckOutIcon />
      </Link>
      <Link href={'/bag'} className={style.icon_container}>
        <BagIcon />
      </Link>
      <Link href={'/config'} className={style.icon_container}>
        <ConfigIcon />
      </Link>
    </div>
  );
};

export default Navbar;
