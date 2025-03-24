import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/components/Logo/Logo";
import { links } from "@/helpers";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo name="Anton Zhilin" />

      <div className={styles.right}>
        <nav className={styles.navigation}>
          <ul className={styles.list}>
            {links.map((link) => (
              <li key={link.id} className={styles.item}>
                {link.name}
              </li>
            ))}
          </ul>
        </nav>

        <Link href={`#rt`}>
          <Image
            className={styles.headerGit}
            src={"/git-icon.svg"}
            width={24}
            height={24}
            alt="Picture of the GitHub"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
