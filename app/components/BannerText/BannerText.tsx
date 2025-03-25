import { BannerTextProps } from './Banner.props';
import styles from "./BannerText.module.css";

export const BannerText = ({ content }: BannerTextProps) => {
  return (
    <div className={styles.banner}>
        {content}
    </div>
  )
}

