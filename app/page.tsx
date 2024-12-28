import BlogCard from './components/BlogCard/BlogCard';
import { BLOG_CARDS_MOCKS } from '@/mocks';
import styles from "./page.module.css";
import LikeButton from './components/LikeButton/LikeButton';

export default function Home() {
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

      <LikeButton />
    </div>
  );
}
