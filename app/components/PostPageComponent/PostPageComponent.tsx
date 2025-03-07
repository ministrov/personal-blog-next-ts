import Image from 'next/image';
import React from 'react';
import { PostPageProps } from './PostPageComponent.props';
import CardLink from '../CardLink/CardLink';
import ButtonLike from '@/app/components/ButtonLike/ButtonLike';
import styles from './PostPageComponent.module.css';

export const PostPageComponent = ({ post }: PostPageProps) => {
    return (
        <div className={styles.postWrapper}>
            <h2 className={styles.title}>{post.title}</h2>

            <ul className={styles.list}>
                <li className={styles.item}>Front-end</li>
                <li className={styles.item}>назад</li>
                <li className={styles.item}>3 минуты</li>
                <li className={styles.item}>
                    4
                    <CardLink id={'3'} />
                </li>
            </ul>

            <Image src={'/post-image.png'} width={687} height={440} alt='Post picture' />

            <p className={styles.desc}>{post.body}</p>

            <h3 className={styles.subtitle}>{post.title}</h3>

            {post.reactions.dislikes && <span className={styles.dislikes}>{post.reactions.dislikes}</span>}

            <p>
                Грид представляет собой пересекающийся набор горизонтальных и вертикальных линий, образующих колонки и строки. Элементы могут быть помещены в грид в пределах линий этих колонок и строк. Грид имеет следующие особенности:
            </p>

            <div className={styles.btnBox}>
                <span>Понравилось? Жми</span>
                <ButtonLike />
            </div>
        </div>
    )
}
