
import { BlogCardProps } from './BlogCard.props';
import CardLink from '../CardLink/CardLink';
import Image from 'next/image';
import styles from './BlogCard.module.css';

const BlogCard = ({ img, title, text, timeStamp, likes }: BlogCardProps) => {
    return (
        <div className={styles.BlogCard}>
            <div className={styles.cardImage}>
                <Image src={img} width={0} height={0} alt={''} />
            </div>
            <div className={styles.cardMeta}>
                <ul className={styles.cardMetaList}>
                    <li className={styles.cardMetaItem}>Front-end</li>
                    <li className={styles.cardMetaItem}>1 месяц назад</li>
                </ul>

                <div className={styles.cardLikes}>
                    <span>{likes}</span>
                    <Image src={'/like.svg'} width={16} height={16} alt={'Thumb up image'} />
                </div>
            </div>
            <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardTextContent}>{text}</p>
            </div>
            <div className={styles.cardFooter}>
                <span>{timeStamp} минуты</span>

                <CardLink />
            </div>
        </div>
    )
}

export default BlogCard