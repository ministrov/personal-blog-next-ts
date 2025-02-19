
import Image from 'next/image';
import { BlogCardProps } from './BlogCard.props';
import CardLink from '../CardLink/CardLink';

import styles from './BlogCard.module.css';

const BlogCard = ({ img, title, text, timeStamp, likes }: BlogCardProps) => {
    return (
        <div className={styles.BlogCard}>
            <div className={styles.cardImage}>
                <Image src={img} width={300} height={192} priority alt={'A placeholder for the image'} />
            </div>
            <div className={styles.cardMeta}>
                <ul className={styles.cardMetaList}>
                    <li className={styles.cardMetaItem}>Front-end</li>
                    <li className={styles.cardMetaItem}>1 месяц назад</li>
                </ul>

                <div className={styles.cardLikes}>
                    <span>{likes}</span>
                    <Image src={'/like.svg'} width={18} height={18} alt='Picture of the thumbs up' />
                </div>
            </div>
            <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardTextContent}>{text}</p>
            </div>
            <div className={styles.cardFooter}>
                <span className={styles.cardTimeStamp}>{timeStamp} минуты</span>

                <CardLink />
            </div>
        </div>
    )
}

export default BlogCard;