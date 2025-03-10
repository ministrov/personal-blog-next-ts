import { PostItem } from '@/interface/posts.interface';

export interface PostPageProps {
    post: PostItem;
    comments: string[];
}