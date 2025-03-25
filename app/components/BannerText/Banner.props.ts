import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface BannerTextProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  content: string;
}