'use client';

import ButtonLike from './components/ButtonLike/ButtonLike';
import BlogCard from './components/BlogCard/BlogCard';
import { MOCKS } from '@/mocks';
import styles from './page.module.css';

export default function Home() {


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

      {/* <ButtonLike onChange={() => onPatchRequestHandler('1')} /> */}
    </div>
  );
}
