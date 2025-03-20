import PostCard from '../PostCard/PostCard';
import { PostCardListProps } from './PostCardList.props';
import styles from './PostCardList.module.css';

const PostCardList = ({ posts }: PostCardListProps) => {
    return (
        <ul className={styles.postCardList}>
            {posts.map((post, index) => (
                <PostCard
                    key={post.id}
                    id={String(post.id)}
                    title={post.title}
                    body={post.body}
                    dislikes={post.reactions.dislikes}
                    likes={post.reactions.likes}
                    custom={index}
                />
            ))}
        </ul>
    )
}

export default PostCardList;