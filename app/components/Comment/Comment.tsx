import { CommentProps } from './Comment.props';
import styles from './Comment.module.css';

export const Comment = ({ comment }: CommentProps) => {
    return (
        <div className={styles.comment}>
            {comment}
            <h2></h2>
        </div>
    )
}
