import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface LogoProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  name: string;
}
