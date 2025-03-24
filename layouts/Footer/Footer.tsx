import Link from "next/link";
import { headerLinks } from "@/helpers";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <p className={styles.copyright}>© 2023</p>

        <ul className={styles.list}>
          {headerLinks.map((link) => (
            <li key={link.id} className={styles.item}>
              <Link href={`/${link.name}`}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
