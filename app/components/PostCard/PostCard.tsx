"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { truncateText } from "@/helpers";
import { PostCardProps } from "./PostCard.props";
import CardLink from "../CardLink/CardLink";

import styles from "./PostCard.module.css";

const PostCard = ({
  id,
  title,
  body,
  likes,
  dislikes,
  custom,
}: PostCardProps) => {

  const variants = {
    hidden: { opacity: 0 },
    visible: (index: number) => ({
      opacity: 1,
      transition: { delay: index * 0.3 },
    }),
  };

  return (
    <motion.li
      variants={variants}
      initial={"hidden"}
      animate={"visible"}
      custom={custom}
    >
      <div className={styles.postCardImage}>
        <Image
          src={"/card-image.png"}
          width={300}
          height={192}
          priority
          alt={"A placeholder for the image"}
        />
      </div>
      <div className={styles.postCardText}>
        <div className={styles.postCardMeta}>
          <ul className={styles.postCardMetaList}>
            <li className={styles.postCardMetaItem}>Front-end</li>
            <li className={styles.postCardMetaItem}>1 месяц назад</li>
          </ul>

          <div className={styles.postCardLikes}>
            <span>{likes}</span>
            <Image
              src={"/like.svg"}
              width={18}
              height={18}
              alt="Picture of the thumbs up"
            />
          </div>
        </div>
        <h3 className={styles.postCardTitle}>{title}</h3>
        <p className={styles.postCardTextContent}>{truncateText(body, 170)}</p>
      </div>

      <div className={styles.postCardFooter}>
        <span className={styles.postCardTime}>{dislikes} минуты</span>

        <CardLink id={id} />
      </div>
    </motion.li>
  );
};

export default PostCard;
