import Image from "next/image";
import React from "react";

type Props = { image: HTMLImageElement; alt: string };

const AvatarIcon = (props: Props) => {
  return (
    <Image
      className="avatar_radius"
      alt={props.alt}
      src={props.image}
      width={40}
      height={40}
    />
  );
};

export default AvatarIcon;
