import styles from './CardLink.module.css';

const CardLink = () => {
    return (
        <a className={styles.cardLink} href="#">
            Читать

            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_3248_32)">
                    <path d="M4.16666 10H15.8333" stroke="#1473E6" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.5 13.3333L15.8333 10" stroke="#1473E6" strokeWidth="1.25" strokeLinecap="round" stroke-linejoin="round" />
                    <path d="M12.5 6.66667L15.8333 10" stroke="#1473E6" strokeWidth="1.25" strokeLinecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_3248_32">
                        <rect width="20" height="20" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </a>
    )
}

export default CardLink