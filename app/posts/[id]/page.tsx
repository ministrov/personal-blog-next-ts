import { fetchPostPageById } from '@/api/postPage';
import { PostPageComponent } from '@/app/components/PostPageComponent/PostPageComponent';

import styles from '../../page.module.css';

type PageProps = {
    params: Promise<{ id: string }>
}

export default async function PostPage({ params }: PageProps) {
    const page = await fetchPostPageById((await params).id);

    console.log(page);

    return (
        <div className={styles.page}>
            <PostPageComponent post={page} comments={page.tags} />
        </div>
    )
}