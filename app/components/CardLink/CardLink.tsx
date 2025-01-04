import IconThumbUp from '../IconThumbUp/IconThumbUp';
import styles from './CardLink.module.css';

const CardLink = () => {
    return (
        <a className={styles.cardLink} href="#">
            Читать

            <IconThumbUp />
        </a>
    )
}

export default CardLink;