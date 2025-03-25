import Image from "next/image";
import Link from "next/link";
import { CardLinkProps } from "./CardLink.props";
import styles from "./CardLink.module.css";

const CardLink = ({ id }: CardLinkProps) => {
  return (
    <Link href={`/posts/${id}`} className={styles.cardLink}>
      Читать
      <Image
        src={"/arrow.svg"}
        width={20}
        height={20}
        alt="Picture of arrow right"
      />
    </Link>
  );
};

export default CardLink;
