import { IComment } from '@/interface/comment.interface';
import { PostItem } from '@/interface/posts.interface';

export interface PostPageProps {
    post: PostItem;
    comment: IComment;
}