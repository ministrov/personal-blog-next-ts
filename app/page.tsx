import { getPosts } from '@/api/posts';
import PostCardList from './components/PostCardList/PostCardList';
import { PostItem } from '@/interface/posts.interface';
import { incrementValue } from '@/helpers';
import styles from './page.module.css';

export default async function Home() {
  const posts = await getPosts();
  const modifiedPosts: PostItem[] = Object.values(posts.posts);

  return (
    <div className={styles.page}>
      <PostCardList posts={modifiedPosts} />

      {incrementValue(4)}
    </div>
  );
}
