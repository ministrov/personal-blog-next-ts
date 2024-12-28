'use client';

import { useState } from 'react';

import LikeButton from './components/LikeButton/LikeButton';
import BlogCard from './components/BlogCard/BlogCard';
import { BLOG_CARDS_MOCKS } from '@/mocks';
import styles from "./page.module.css";

export default function Home() {
  const [active, setActive] = useState<boolean>(false);
  const [posts, setPosts] = useState<{ userId: number, id: number, title: string, body: string } | []>([]);

  const patchRequestHandler = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setPosts(data);
      console.log('Successful PATCH request', posts);
    } catch (error) {
      console.log('Error making PATCH request', error);
    }
  }

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

      <br />

      <LikeButton onChange={() => patchRequestHandler()} isActive={active} />
    </div>
  );
}
