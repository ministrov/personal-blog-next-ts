import { getPost } from '@/api/postPage';
import ButtonLike from '@/app/components/ButtonLike/ButtonLike';

import styles from '../../page.module.css';

type PageProps = {
    params: Promise<{ id: string }>
}

export default async function PostPage({ params }: PageProps) {
    const page = await getPost((await params).id);

    // console.log(page);
    return (
        <div className={styles.page}>
            <h2>{page.title}</h2>
            {`Page Post ${(await params).id}`}
            <br />
            {(await params).id}
            <ButtonLike />
            <br />
            {/* <ButtonLike onChange={() => onPatchRequestHandler('1')} /> */}
        </div>
    )
}