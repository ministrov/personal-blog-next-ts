import { CommentProps } from './Comment.props';
import styles from './Comment.module.css';

export const Comment = ({ comment }: CommentProps) => {
    const { postId, body, user: { fullname } } = comment;
    return (
        <div className={styles.comment}>
            <h2 className={styles.title}>Комментарии</h2>

            <ul className={styles.user}>
                <li className={styles.userTitle}>{fullname || 'Василий Пупкин'}</li>
                <li className={styles.userEmail}>pupkin@gmail.com</li>
            </ul>

            <p className={styles.description}>
                {body}
            </p>
            {postId}
        </div>
    )
}
