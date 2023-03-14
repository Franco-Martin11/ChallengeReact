import { AddCartIcon } from "@/components";
import style from "../cardDetail.module.css";

type Props = {};

const ActionBar = (props: Props) => {
  return (
    <div className={style.actionBar_container}>
      <button>
        <AddCartIcon />
      </button>
      <button className={style.addCard_button}>Add to cart</button>
    </div>
  );
};

export default ActionBar;
