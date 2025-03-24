import Link from "next/link";
import { LogoProps } from "./Logo.props";
import styles from "./Logo.module.css";

const Logo = ({ name }: LogoProps) => {
  return (
    <Link href={"/"} className={styles.logo}>
      {name}
    </Link>
  );
};

export default Logo;
