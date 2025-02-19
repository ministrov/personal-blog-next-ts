import { getPosts } from '@/api/post';
import PostCard from './components/PostCard/PostCard';
import { PostItem } from '@/interface/posts.interface';
import styles from './page.module.css';

export default async function Home() {
  const posts = await getPosts();
  const modifiedPosts: PostItem[] = Object.values(posts.posts);

  console.log(modifiedPosts);
  return (
    <div className={styles.page}>
      <div className={styles.pageCardList}>
        {modifiedPosts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            body={post.body}
            dislikes={post.reactions.dislikes}
            likes={post.reactions.likes}
          />
        ))}
      </div>

      {/* <ButtonLike /> */}

      <br />

      {/* <ButtonLike onChange={() => onPatchRequestHandler('1')} /> */}
    </div>
  );
}
