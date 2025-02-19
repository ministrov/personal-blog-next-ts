import Image from 'next/image';
import Logo from '@/app/components/Logo/Logo';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <Image src={'/git-icon.svg'} width={23} height={23} alt='Picture of the GitHub' />
        </header>
    )
}

export default Header;