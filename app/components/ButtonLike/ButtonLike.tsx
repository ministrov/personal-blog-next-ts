import { useState } from 'react';
import { ButtonLikeProps } from './ButtonLike.props';
import IconLike from '../IconLike/IconLike';
import IconLikeActive from '../IconLikeActive/IconLikeActive';
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
            {active ? <IconLikeActive /> : <IconLike />}
        </button>
    )
}

export default ButtonLike;