import { getPosts } from '@/api/posts';
import PostCardList from './components/PostCardList/PostCardList';
import { PostItem } from '@/interface/posts.interface';
import styles from './page.module.css';

export default async function Home() {
  const posts = await getPosts();
  const modifiedPosts: PostItem[] = Object.values(posts.posts);

  console.log(modifiedPosts);
  return (
    <div className={styles.page}>
      <PostCardList posts={modifiedPosts} />
      {/* <ButtonLike /> */}
      <br />
      {/* <ButtonLike onChange={() => onPatchRequestHandler('1')} /> */}
    </div>
  );
}
