import { getPost } from '@/api/postPage';
import ButtonLike from '@/app/components/ButtonLike/ButtonLike';

type PageProps = {
    params: Promise<{ id: string }>
}

export default async function PostPage({ params }: PageProps) {
    const page = getPost((await params).id);

    console.log(page.then(res => res));
    return (
        <div>
            {`Page Post ${(await params).id}`}
            <br />
            {(await params).id}
            <ButtonLike />
            <br />
            {/* <ButtonLike onChange={() => onPatchRequestHandler('1')} /> */}
        </div>
    )
}