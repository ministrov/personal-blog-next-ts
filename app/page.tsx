import { getPosts } from '@/api/posts';
import PostCardList from './components/PostCardList/PostCardList';
import { PostItem } from '@/interface/posts.interface';
// import styles from './page.module.css';

export default async function Home() {
  const posts = await getPosts();
  const modifiedPosts: PostItem[] = Object.values(posts.posts);

  return (
    <PostCardList posts={modifiedPosts} />
  );
}
