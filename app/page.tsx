import { getPosts } from '@/api/post';
// import PostCard from './components/PostCard/PostCard';
// import { PostItem } from '@/interface/posts.interface';
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
          <PostCard
            key={post.id}
            title={post.title}
            body={post.body}
            dislikes={post}
            likes={0}
          />
        ))} */}
      </div>

      {/* <ButtonLike /> */}

      <br />

      {/* <ButtonLike onChange={() => onPatchRequestHandler('1')} /> */}
    </div>
  );
}
