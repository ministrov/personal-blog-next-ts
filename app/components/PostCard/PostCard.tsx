
import Image from 'next/image';
import { PostCardProps } from './PostCard.props';
import CardLink from '../CardLink/CardLink';

import styles from './PostCard.module.css';

const PostCard = ({ title, body, likes, dislikes }: PostCardProps) => {
    return (
        <li className={styles.postCard}>
            <div className={styles.postCardImage}>
                <Image src={'/card-image.png'} width={300} height={192} priority alt={'A placeholder for the image'} />
            </div>
            <div className={styles.postCardMeta}>
                <ul className={styles.postCardMetaList}>
                    <li className={styles.postCardMetaItem}>Front-end</li>
                    <li className={styles.postCardMetaItem}>1 месяц назад</li>
                </ul>

                <div className={styles.postCardLikes}>
                    <span>{likes}</span>
                    <Image src={'/like.svg'} width={18} height={18} alt='Picture of the thumbs up' />
                </div>
            </div>
            <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardTextContent}>{body}</p>

                <div className={styles.cardFooter}>
                    <span className={styles.cardTimeStamp}>{dislikes} минуты</span>

                    <CardLink />
                </div>
            </div>
        </li>
    )
}

export default PostCard;