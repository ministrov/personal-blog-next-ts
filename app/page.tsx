'use client';

import { useState } from 'react';

import LikeButton from './components/LikeButton/LikeButton';
import BlogCard from './components/BlogCard/BlogCard';
import { BLOG_CARDS_MOCKS } from '@/mocks';
import styles from "./page.module.css";

export default function Home() {
  const [active, setActive] = useState<boolean>(false);

  const onChangeHandler = () => {
    setActive(x => !x);
  }
  return (
    <div className={styles.page}>
      <div className={styles.pageCardList}>
        {BLOG_CARDS_MOCKS.map((card) => (
          <BlogCard
            key={card.id}
            img={card.img}
            title={card.title}
            text={card.text}
            timeStamp={card.timeStamp}
            likes={card.likes}
          />
        ))}
      </div>

      <LikeButton onChange={onChangeHandler} isActive={active} />
    </div>
  );
}
