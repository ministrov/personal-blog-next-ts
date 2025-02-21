import Link from 'next/link';
import styles from './Logo.module.css';

const Logo = () => {
    const fullName = 'Anton Zhilin';

    return (
        <Link href={'/'} className={styles.logo}>{fullName}</Link>
    )
}

export default Logo;