// import { IComment } from '@/interface/comment.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CommentProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    // comment: IComment;
    postId: number;
}