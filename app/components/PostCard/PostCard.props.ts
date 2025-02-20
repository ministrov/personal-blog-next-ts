import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PostCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    id: string,
    title: string;
    body: string;
    dislikes: number;
    likes: number;
}