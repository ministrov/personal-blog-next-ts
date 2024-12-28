import styles from './Logo.module.css';

const Logo = () => {
    return (
        <span className={styles.logo}>{`.my_blog${2}`}</span>
    )
}

export default Logo;