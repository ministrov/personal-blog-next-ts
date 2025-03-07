import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/app/components/Logo/Logo';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />

            <Link href={`#rt`}>
                <Image className={styles.headerGit} src={'/git-icon.svg'} width={24} height={24} alt='Picture of the GitHub' />
            </Link>
        </header>
    )
}

export default Header;