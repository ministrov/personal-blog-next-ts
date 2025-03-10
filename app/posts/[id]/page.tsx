import { fetchPostPageById } from '@/api/postPage';
import { PostPageComponent } from '@/app/components/PostPageComponent/PostPageComponent';

import styles from '../../page.module.css';
import { getComments } from '@/api/comments';

type PageProps = {
    params: Promise<{ id: string }>
}

export default async function PostPage({ params }: PageProps) {
    const page = await fetchPostPageById((await params).id);
    const comments = await getComments();

    console.log(comments.comments);

    console.log(page);

    return (
        <div className={styles.page}>
            <PostPageComponent post={page} comments={comments.comments} />
        </div>
    )
}