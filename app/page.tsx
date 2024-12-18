import BlogCard from './components/BlogCard/BlogCard';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <BlogCard
        img={'/card-image.png'}
        title={'Как работать с CSS Grid'}
        text={'Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..'}
        timeStamp={3}
        likes={4}
      />
    </div>
  );
}
