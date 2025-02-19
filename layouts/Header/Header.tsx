import Image from 'next/image';
import Logo from '@/app/components/Logo/Logo';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <Image src={'/git-icon.svg'} width={24} height={24} alt='Picture of the GitHub' />
        </header>
    )
}

export default Header;