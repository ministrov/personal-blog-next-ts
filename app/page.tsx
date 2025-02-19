import { getPosts } from '@/api/post';
// import BlogCard from './components/BlogCard/BlogCard';
// import ButtonLike from './components/ButtonLike/ButtonLike';
// import BlogCard from './components/BlogCard/BlogCard';
// import { MOCKS } from '@/mocks';
import styles from './page.module.css';

export default async function Home() {
  const posts = await getPosts();
  const modifiedPosts = Object.values(posts.posts);

  console.log(modifiedPosts);
  return (
    <div className={styles.page}>
      <div className={styles.pageCardList}>
        {/* {modifiedPosts.map((post) => (
          <BlogCard
            key={post}
            img={card.img}
            title={card.title}
            text={card.text}
            timeStamp={card.timeStamp}
            likes={card.likes}
          />
        ))} */}
      </div>

      {/* <ButtonLike /> */}

      <br />

      {/* <ButtonLike onChange={() => onPatchRequestHandler('1')} /> */}
    </div>
  );
}
