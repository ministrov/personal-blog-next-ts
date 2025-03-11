import { CommentProps } from './Comment.props';
import styles from './Comment.module.css';

export const Comment = ({ postId }: CommentProps) => {
    // const { postId, body, user: { fullname } } = comment;
    return (
        <div className={styles.comment}>
            <h2 className={styles.title}>Комментарии</h2>

            <ul className={styles.user}>
                <li className={styles.userTitle}>{'Василий Пупкин'}</li>
                <li className={styles.userEmail}>pupkin@gmail.com</li>
            </ul>

            <p className={styles.description}>
                {/* {body} */}
                Отличная статья, но не хватает информации о том, как лучше реализовать на гридах более сложные конструкции, например layout для интернет магазина.
            </p>
            {postId}
        </div>
    )
}
