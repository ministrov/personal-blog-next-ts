import Image from 'next/image';
import Link from 'next/link';
import styles from './CardLink.module.css';

const CardLink = () => {
    return (
        <Link href="#" className={styles.cardLink}>
            Читать

            <Image src={'/arrow.svg'} width={20} height={20} alt='Picture of arrow right' />
        </Link>
    )
}

export default CardLink;