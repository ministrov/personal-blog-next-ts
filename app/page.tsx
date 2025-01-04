'use client';

import { useState } from 'react';

import ButtonLike from './components/ButtonLike/ButtonLike';
import BlogCard from './components/BlogCard/BlogCard';
import { MOCKS } from '@/mocks';
import styles from './page.module.css';

export default function Home() {
  const [posts, setPosts] = useState<{ userId: number, id: number, title: string, body: string } | []>([]);

  const onPatchRequestHandler = async (id: string) => {
    console.log('request is sent');
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(
          {
            title: 'updated'
          }
        ),
        headers: {
          'Content-type': 'application/json'
        }
      });

      console.log(response);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log('Error making PATCH request', error);
    }
    console.log('Successful PATCH request', posts);
  }

  return (
    <div className={styles.page}>
      <div className={styles.pageCardList}>
        {MOCKS.map((card) => (
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

      <ButtonLike />

      <br />

      <ButtonLike onChange={() => onPatchRequestHandler('1')} />
    </div>
  );
}
