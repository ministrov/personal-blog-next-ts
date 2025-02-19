import Image from 'next/image';
import styles from './CardLink.module.css';

const CardLink = () => {
    return (
        <a className={styles.cardLink} href="#">
            Читать

            <Image src={'/arrow.svg'} width={20} height={20} alt='Picture of arrow right' />
        </a>
    )
}

export default CardLink;