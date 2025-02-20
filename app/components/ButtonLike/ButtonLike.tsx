'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ButtonLikeProps } from './ButtonLike.props';
import styles from './ButtonLike.module.css';


const ButtonLike = ({ onChange, ...props }: ButtonLikeProps) => {
    const [active, setActive] = useState<boolean>(false);

    return (
        <button {...props} onClick={() => {
            if (onChange) {
                onChange();
            }
            setActive(x => !x);
        }} className={`${styles.buttonLike} ${active ? styles.buttonLikeActive : ''}`}>
            {active ? (
                <Image src={'/like-big-white.svg'} width={18} height={18} alt='' />
            ) : (
                <Image src={'/like.svg'} width={18} height={18} alt='' />
            )}
        </button>
    )
}

export default ButtonLike;