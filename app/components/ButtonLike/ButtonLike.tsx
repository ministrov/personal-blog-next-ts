"use client";

import { useState } from "react";
import Image from "next/image";
import { ButtonLikeProps } from "./ButtonLike.props";
import cn from "classnames";
import styles from "./ButtonLike.module.css";

const ButtonLike = ({ onChange, ...props }: ButtonLikeProps) => {
  const [active, setActive] = useState<boolean>(false);

  const onClickHandler = () => {
    if (onChange) {
      onChange();
    }
    setActive((x) => !x);
  };

  return (
    <button
      onClick={onClickHandler}
      className={cn(styles.button, {
        [styles.active]: active,
      })}
      aria-label='Like button'
      {...props}
    >
      {active ? (
        <Image src={"/like-big-white.svg"} width={18} height={18} alt="" />
      ) : (
        <Image src={"/like.svg"} width={18} height={18} alt="" />
      )}
    </button>
  );
};

export default ButtonLike;
