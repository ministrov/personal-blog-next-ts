import React from 'react';
import { PostPageProps } from './PostPageComponent.props';
import ButtonLike from '@/app/components/ButtonLike/ButtonLike';
import styles from './PostPageComponent.module.css';

export const PostPageComponent = ({ post }: PostPageProps) => {
    return (
        <div className={styles.postWrapper}>
            <h2>{post.title}</h2>

            <ButtonLike />
        </div>
    )
}
