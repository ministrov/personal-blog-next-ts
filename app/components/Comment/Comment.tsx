import { CommentProps } from './Comment.props';
import styles from './Comment.module.css';

export const Comment = ({ comment }: CommentProps) => {
    return (
        <div className={styles.comment}>
            {comment.postId}
            <h2>{comment?.user?.fullname}</h2>
        </div>
    )
}
