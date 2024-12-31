import Logo from '@/app/components/Logo/Logo';
import IconGitHub from '@/app/components/IconGitHub/IconGitHub';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />

            <IconGitHub />
        </header>
    )
}

export default Header;